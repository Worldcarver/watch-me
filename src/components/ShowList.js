import React from 'react';
import ShowCard from './ShowCard';

function ShowList({ addedShows, onShowClicked, onShowDelete }) {

    const showInfo = addedShows.map((show, index) => (
          <ShowCard key = {index} show = {show} onShowClicked = {onShowClicked} onShowDelete = {onShowDelete}/>
    ))

    return(
        <div className="show-container">
            {showInfo}
        </div>
    );
}

export default ShowList;