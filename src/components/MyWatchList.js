import React from 'react';
import ShowCard from './ShowCard';


function MyWatchList({ onShowClicked, watchListShows }) {

    return(
        <div className="watch-list-container">
            {watchListShows.map((show, index) => {
                return <ShowCard key = {show.id} show = {show} onShowClicked = {onShowClicked}/>
            })}
        </div>
    )
}

export default MyWatchList;