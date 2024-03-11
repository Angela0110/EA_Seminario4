import { Schema, model, connect } from 'mongoose';
import mongoose from 'mongoose';
import { create } from './crud/create';
import { list } from './crud/list';
import { find } from './crud/find';
import { deleteOne } from './crud/delete';


// 1. Create an interface representing a document in MongoDB.
interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  birthdate?: Date;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  birthdate: Date
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);

// 1. Create an interface representing a document in MongoDB.
interface ISong {
  name: string;
  singer: IUser['_id'];
  duration?: Number;
}

// 2. Create a Schema corresponding to the document interface.
const songSchema = new Schema<ISong>({
  name: { type: String, required: true },
  singer: { type: Schema.Types.ObjectId, ref: 'User' , required: true},
  duration: Number
});

// 3. Create a Model.
export const Song = model<ISong>('Song', songSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/test');

  //Crear datos (ya están creados)
  //await create();

  //listas
  await list();

  //get/popolate (username, songName)
  await find('Elvis Crespo', 'Suavemente');

  //delete ((userId, songName)
  await deleteOne('65ef3024f945293138c2a640','Dissipate');

}
