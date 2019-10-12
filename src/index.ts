import { User } from './models/User';

const user = new User({ name: 'Julia', age: 25 });

user.on('save', () => {
    console.log(user);
});

user.save();