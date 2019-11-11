import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if (song) {
        return <div>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    } else {
        return <div>Please, select song</div>
    }
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);