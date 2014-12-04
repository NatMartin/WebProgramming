var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    // Define a schema for a kitten. The only field is the kitten's name
    var kittySchema = mongoose.Schema({
	name: String
    })

    // NOTE: methods must be added to the schema before compiling it
    // with mongoose.model()
    kittySchema.methods.speak = function () {
	var greeting = this.name
	    ? "Meow name is " + this.name
	    : "I don't have a name"
	console.log(greeting);
    }

    // Use the schema to define a model
    var Kitten = mongoose.model('Kitten', kittySchema);

    // Create two kitten items
    var silence = new Kitten({ name: 'Silence' })
    var fluffy = new Kitten({ name: 'fluffy' });


    // Saves the kitten called fluffy to the database. If there is an
    // error, it prints the error. it then calls speak.
    silence.save(function (err, kitty) {
	if (err) return console.error(err);
	kitty.speak();
    });

    // Retrievs all of the records in Kitten and prints them on the console.
    Kitten.find(function (err, kittens) {
	if (err) return console.error(err);
	console.log(kittens)
    })
});
