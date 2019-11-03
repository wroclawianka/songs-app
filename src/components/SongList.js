import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
    render() {
        return (
            <div>SongList</div>
        )
    }
}

const mapStateToProps = (state) => { // function mapStateToProps named according to convention
// we will take our state (all data we keep in redux store) and make some calculation on it
    return state;
};

export default connect(mapStateToProps)(SongList);
/*connect is function which returns a function,
so in second brackets you see arguments of returned function*/