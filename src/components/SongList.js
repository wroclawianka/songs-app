//this flow will be repeated for each redux use:
import React from 'react';
import {connect} from 'react-redux'; // 1.

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }


    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => { // 3. function mapStateToProps named according to convention
// we will take our state (all data we keep in redux store) and make some calculation on it
    return {songs: state.songs}; // result: this.props === {songs: state.songs};
};

export default connect(mapStateToProps)(SongList); // 2.
/*connect is function which returns a function,
so in second brackets you see arguments of returned function*/