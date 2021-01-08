const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('-------------- MONGO STRING HERE -----------', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.log('Error');
    console.log(e);
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = {
    mongoose
};