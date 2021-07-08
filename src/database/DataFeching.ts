import axios from 'axios';

const restApiUrl = 'https://jsonplaceholder.typicode.com';

export const getPostFromApi = (): Promise<any> => {
	return axios.get(`${restApiUrl}/posts`);
};

export const searchPostFromApi = (term: String): Promise<any> => {
	return axios.get(`${restApiUrl}/posts/?search=${term}`);
};
