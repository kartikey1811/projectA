import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment'


autoIncrement.initialize(mongoose.connection);

const userschema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
})

//userschema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });

//autoIncrement.initialize(mongoose.Collection);
//userschema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userschema);


export default user;