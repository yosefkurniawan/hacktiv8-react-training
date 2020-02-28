import { createAction } from "@reduxjs/toolkit";

const addPodcast = createAction('ADD_PODCAST');
const incrementAction = createAction('INCREMENT');
const decrementAction = createAction('DECREMENT');

export {addPodcast, incrementAction, decrementAction};
// export function addPodcast(title, thumbnail, url, episodes) {
//     return {
//         type: 'ADD_PODCAST',
//         title: title,
//         thumbnail: thumbnail,
//         url: url,
//         episodes: episodes
//     }
// }

// export function incrementAction() {
//     return {
//         type: 'INCREMENT'
//     }
// }
// export function decrementAction() {
//     return {
//         type: 'DECREMENT'
//     }
// }
