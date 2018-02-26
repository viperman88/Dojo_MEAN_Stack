const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    validator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const logRegSchema = new mongoose.Schema({ // Create a Schema (Bluprint) for model
    first_name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be min 2 characters'],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be min 2 characters'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email Address is required'],
        unique: true,
        validate: {
            validator: value => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message: 'enter valid email'
        }
    },
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: [8, 'min password length 8 characters long'],
        maxlength: [20, 'max password length 8 characters long'],
        validate: {
            validator: password => {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(password);
            },
            message: 'Password must have a min 1 number, uppercase and special character'
        }
    },
    birthday: {
        type: Date,
        required: [true, 'must enter birthday'],
    }
});

// logRegSchema retrieves schema set in models = Setting schema in models as User
// mongoose WILL create the appropriate collection in database
// with the appropriate naming (plural for collection names)!
const User = mongoose.model('User', logRegSchema)

// export the primateSchema
module.exports = User;
