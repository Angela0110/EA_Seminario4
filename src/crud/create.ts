import { Song, User } from '../main';
import mongoose from 'mongoose';

export const create = async () => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: 'Polaris',
        email: 'bill@initech.com',
        birthdate: 154889705
      });

    await user.save();

    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name: 'Elvis Crespo',
        email: 'Jane@initech.com',
        birthdate: 15488948705    });
    await newUser.save();

    const p = new Song({
        name: 'Dissipate',
        singer: user._id,
        duration: 3.5
    })
    await p.save();

    const s = new Song({
        name: 'Suavemente',
        singer: newUser._id,
    })
    await s.save();

};