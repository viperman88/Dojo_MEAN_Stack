// Create a database called 'my_first_db'.
use my_first_db
// Create students collection.
db.createCollection('students')
// Each document you insert into this collection should have the following format: ({name: STRING, home_state:
// STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info.
db.students.insert({name:'Robert',home_state:'Texas', lucky_number:7,birthday:{month:11, day:20, year:1981}})
db.students.insert({name:'Maggie',home_state:'Maryland', lucky_number:32,birthday:{month:04, day:05, year:1987}})
db.students.insert({name:'Frank',home_state:'Seattle', lucky_number:19,birthday:{month:06, day:10, year:2008}})
db.students.insert({name:'Ashley',home_state:'Washington DC', lucky_number:20,birthday:{month:11, day:23, year:1987}})
db.students.insert({name:'Kim',home_state:'Florida', lucky_number:62,birthday:{month:08, day:08, year:1963}})
// Get all students.
db.students.find().pretty()
// Get all students whose lucky number is:
// greater than 3
// less than or equal to 10
// between 1 and 9 (inclusive)
db.students.find({lucky_number:{$gt:3}})
db.students.find({lucky_number:{$gte:10}})
db.students.find({lucky_number:{$gt:1,$lt:10}})
// Add a field to each student collection called 'interests' that is an ARRAY.
// It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({},{$set: {"interests":['coding', 'brunch', 'MongoDB']}},{multi:true})
// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name:'Ashley'},{$addToSet:{interests:'Art'}})
// Add the interest 'taxes' into someone's interest array.
db.students.update({name:'Kim'},{$addToSet:{interests:'taxes'}})
// Remove the 'taxes' interest you just added.
db.students.update({name:'Kim'},{$pull:{interests:'taxes'}})
// Remove all students who are from Texas (or Washington).
db.students.remove({$or: [{home_state:"Texas"}, {home_state:"Washington"}]})
// Remove a student by name.
db.students.remove({name:'Kim'})
// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5}},true)
// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.update({},{$set:{number_of_belts:0}},{multi:true})
// Increment this field by 1 for all students in Washington DC.
db.students.update({home_state:'Washington DC'},{$inc:{number_of_belts:1}},{multi:true})
// Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({},{$rename:{'number_of_belts':'belts_earned'}},{multi:true})
// Remove the 'lucky_number' field.
db.students.update({}, {$unset:{lucky_number:''}},{multi:true})
// Add a 'updated_on' field, and set the value as the current date.
db.students.update({}, {$currentDate:{updated_on:true}},{multi:true})
