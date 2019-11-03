//this flow will be repeated for each redux use:
import React from 'react';
import {connect} from 'react-redux'; // 1.

class SongList extends React.Component {
    render() {
        return (
            <div>SongList</div>
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