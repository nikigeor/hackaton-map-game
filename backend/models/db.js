const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/MapGames", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', (_) =>
console.log('MongoDB is now connected')  
);
db.on('error', (err) => console.error('MongoDB connection error!', err));






  