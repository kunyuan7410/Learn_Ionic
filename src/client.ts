import axios from 'axios';

const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 2000,
	headers: {
		'Content-Type': 'testing123',
	},
});

export default client;
