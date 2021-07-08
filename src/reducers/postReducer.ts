import axios from 'axios';
import { getPostFromApi } from '../database/DataFeching';
import typePost from '../interfaces/post';

export interface postState {
	posts: typePost[];
}

const initialPostState = {
	posts: [
		{
			userId: 0,
			id: 0,
			title: '',
			body: '',
		},
	],
};

type postAction = {
	type: 'ADD_POST' | 'REMOVE_POST';
	payload: typePost;
};

export const postReducer = (
	state: postState = initialPostState,
	action: postAction
) => {
	switch (action.type) {
		case 'ADD_POST':
			const newPost: typePost = {
				userId: action.payload.userId,
				id: action.payload.id,
				title: action.payload.title,
				body: action.payload.body,
			};
			return {
				...state,
				posts: state.posts.concat(newPost),
			};
		case 'REMOVE_POST':
			const removePost: typePost[] = state.posts.filter(
				post => post.id !== action.payload.id
			);
			return {
				...state,
				posts: removePost,
			};

		default:
			return state;
	}
};
