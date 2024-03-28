import mongoose from "mongoose";


const connection =  async() => {
const URL = `mongodb+srv://kartikeyharsha1998:kartikey1811@cluster0.vb5zsh3.mongodb.net/test`;
 try {
   await mongoose.connect(URL,{useunifiedtopology: true, usenewurlparser: true});
   console.log('database connected succesfully');
     }catch (error){
    console.log('error while connecting with database', error);
  }
}
export default connection;