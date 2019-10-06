import axios from "axios";

axios.post('http://localhost:3000/users', {
    name: 'Alex',
    age: 29,
});

axios.get('http://localhost:3000/users/1');