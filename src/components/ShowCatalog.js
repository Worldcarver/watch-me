import React, {useState, useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

// 1. See all the details of the shows rendered in ShowList.
// 2. Add a show from the ShowList to MyWatchList by clicking on it. The selected show should render in the MyWatchList component. The show can be added only once. The item does not disappear from the ShowList.
// 3. Remove a show from MyWatchList by clicking on it. The show disappears from the MyWatchList component.
// 4. Remove a show forever by clicking the delete button at the bottom of the each ShowCard. This should delete the show from both the backend and the frontend.

function ShowCatalog() {

    const [addedShows, setAddedShows] = useState([])
    const [watchListShows, setWatchListShows] = useState([])

    useEffect(() =>{
        fetch('http://localhost:8081/shows/')
            .then (res => res.json())
            .then (addedShows => setAddedShows(addedShows))
    }, [])

    function onShowClicked(newShow) {
        if (watchListShows.includes(newShow) === false) {
            setWatchListShows([...watchListShows, newShow])
        } else {
            const removedFromWatchList = watchListShows.filter((show) =>{
                return show !== newShow
            })
            setWatchListShows(removedFromWatchList)
        }

    }
    function onShowDelete(id){
        const newShows = addedShows.filter((show) => show.id !== id)
        setAddedShows(newShows)
    }
    

    return(
        <>
            <MyWatchList watchListShows = {watchListShows} onShowClicked = {onShowClicked}/>
            <hr/>
            <ShowList addedShows={addedShows} onShowClicked = {onShowClicked} onShowDelete = {onShowDelete} />
        </>
    );
}

export default ShowCatalog;