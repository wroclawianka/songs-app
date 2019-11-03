import {combineReducers} from "redux"; //this is named export

const songsReducer = () => {
    return [
        {title: 'Dance Monkey', duration: '4:20'},
        {title: 'Bad Guy', duration: '3:50'},
        {title: 'No Roots', duration: '4:14'},
        {title: 'Havana', duration: '3:36'},
        {title: 'New Rules', duration: '4:26'},
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});