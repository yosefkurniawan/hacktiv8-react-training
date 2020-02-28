import { createReducer } from "@reduxjs/toolkit";
import { addPodcast, incrementAction, decrementAction } from "./actions";

const podcasts = createReducer([], {
    [addPodcast]: (state, action) => (
        [
            ...state,
            {
                id: action.podcast.id,
                title: action.podcast.title,
                thumbnail: action.podcast.thumbnail,
                url: action.podcast.url,
                episodes: action.podcast.episodes
            }
        ]
    )
})

const counter = createReducer(0, {
    [incrementAction]: (state) => state + 1,
    [decrementAction]: (state) => state - 1
})

export {podcasts, counter}

// export function podcasts(state = [], action) {
//     switch (action.type) {
//         case 'ADD_PODCAST':
//             return [
//                 ...state,
//                 {
//                     id: action.podcast.id,
//                     title: action.podcast.title,
//                     thumbnail: action.podcast.thumbnail,
//                     url: action.podcast.url,
//                     episodes: action.podcast.episodes
//                 }
//             ]
//         default:
//             return state
//     }
// }
// export function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }