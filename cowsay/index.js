const informations = require('./information');
const message = informations.Object;
const cowsay = require('cowsay');
console.log(cowsay.say({
    text : `Hello i'm ${message.name} from the ${message.campus} campus`
}))