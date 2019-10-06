import { User } from './models/User'

const user = new User({ name: 'Alex', age: 20 });

user.on('change', () => {});
user.on('change', () => {});

console.log(user);