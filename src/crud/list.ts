import { Song, User } from '../main';

export const list = async () => {

    const users = await User.find();
    console.log('The list of users is:', users);

    const songs = await Song.find();
    console.log('The list os songs is:', songs)

};

