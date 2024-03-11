import { Song, User } from '../main';
import mongoose from 'mongoose';

export const deleteOne = async (userId, songName) => {
    // const deletedProduct = await Product.deleteOne({name: 'laptop hp'});
    // const result = await Product.deleteMany({name: 'laptop hp'});
    const result2 = await Song.findOneAndDelete({name: songName});
    const result = await User.findByIdAndDelete(userId);
    
    console.log('Deleted' ,result);
    console.log('Deleted', result2);
};