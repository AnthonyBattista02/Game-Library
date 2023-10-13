const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/libraryDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        return mongoose.connection.dropDatabase();
    })
    .then(() => {
        console.log('Database dropped');
        return mongoose.connection.close();
    })
    .catch(error => {
        console.error('Error dropping database:', error);
    });