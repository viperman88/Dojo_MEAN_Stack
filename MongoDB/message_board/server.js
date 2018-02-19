// Require modules
const express = require('express'),
    bodyParser = require('body-parser'), // Require body-parser (to receive post data from clients)
    mongoose = require('mongoose'),
    path = require('path'),
    port = process.env.PORT || 8000,
    app = express(), // Create Express app
    Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({
    extended: true
})); // Integrate body-parser with our App
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dashboard_db'); // This is how we connect to the mongodb database using mongoose
mongoose.connection.on('connected', () => console.log('mongodb connected')); // Listen for connection and log connected
// Use native promises
mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [4, 'Name must be min 4 characters'],
        trim: true
    },
    message: {
        type: String,
        required: [true, "Must submit a message"],
        trim: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
});

const commentSchema = new mongoose.Schema({
    _message: {
        type: Schema.Types.ObjectId,
        ref: "Message"
    },
    name: {
        type: String,
        required: [true, "Name must be min 4 characters"],
        minlength: [4, 'Name must be min 4 characters'],
        trim: true
    },
    comment: {
        type: String,
        required: [true, "Must submit a comment"],
        trim: true
    },
});

// const 'VALUE' retrieves schema set in models = Setting schema in models as 'VALUE'
// mongoose WILL create the appropriate collection in database
// with the appropriate naming (plural for collection names)!
const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.get("/", (req, res) => {
    Message.find({}).populate("comments")
        .then(messages => {
            res.render("index", { messages });
        })
        .catch(err => {
            res.render("index", { error: err, messages: [] })
        })
});

app.post("/message", (req, res) => {
    Message.create(req.body)
    .then(message => {
        console.log(req.body);
        res.redirect("/");
    })
    .catch(err => {
        res.redirect("/", { error: err })
    })
});

app.post("/comment", (req, res) => {
    Comment.create(req.body)
    .then(comment => {
        console.log(req.body);
        Message.findById(comment._message)
            .then(message => {
                console.log("THIS IS THE MESSAGE", message);
                message.comments.push(comment);
                return message.save();
            })
            .then(() => {
                res.redirect("/");
            })
    })
    .catch(err => {
        Message.find({})
        .then(messages => {
            response.render("index", { error: err, messages });
        })
        .catch(err => {
            console.log(err);
        })
    })
});

// Setting our Server to Listen on Port: 8000
app.listen(port, () => console.log(`express listening on port ${port}`));
