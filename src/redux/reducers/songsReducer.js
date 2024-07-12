import { GET_SONGS, SET_CURRENT_SONG } from "../actions"


const initialState = {
    content: [],
    currentSong: null
}





const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONGS:
            return {
                ...state,
                content: action.payload
            }
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.payload
            }

        default:
            return state
    }
}


export default songsReducer