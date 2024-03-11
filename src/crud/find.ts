import { Song, User } from '../main';
import mongoose from 'mongoose';

export const find = async (userName, songName) => {
    const newUser = await User.findOne({name: userName});
    const song = await Song.find({name: songName});

    console.log('(Find) The singer is with this name is',newUser);

    console.log('(Find) The song with this name is',song);

    const popu = await Song.
        findOne({ name: 'Suavemente' }).
        populate('singer').
        exec();

    console.log('(Popuate) The singer is ', popu.singer);
};

 