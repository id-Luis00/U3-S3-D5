
export const GET_SONGS = 'GET_SONGS'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'

export const setCurrentSongAction = (song) => ({ type: SET_CURRENT_SONG, payload: song })

export const getSongsAction = (query) => {

    return async (dispatch, getState) => {
        console.log('GET STATE', getState)

        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query
            )
            if (response.ok) {
                let data = await response.json()
                dispatch({ type: GET_SONGS, payload: data.data })
            } else {
                throw new Error('Error in fetching songs')
            }
        } catch (err) {
            console.log('error', err)
        }

    }
}