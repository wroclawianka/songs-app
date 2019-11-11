import React from 'react';
import '../index.css';
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
    return (
        <div className="main-container">
            <div className="ui container grid">
                <h1 className="ui row">Your song picker</h1>
                <div className="ui row">
                    <div className="column six wide">
                        <SongList/>
                    </div>
                    <div className="column six wide">
                        <SongDetail/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;