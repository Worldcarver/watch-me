import React from 'react';

function ShowCard({show, onShowClicked, onShowDelete}) {

    const {id, name, summary, image} = show


    function handleDelete() {
        fetch(`http://localhost:8081/shows/${id}`, {
            method: 'DELETE'
        })
        onShowDelete(id)
    }
    /** 
     * This function to get the correct image to show up for the streaming service.
     * 
     * You don't need to worry about it - I just wanted this to look pretty.
     * 
     * Input: show.streams_on
     * Output: image src
     * */
    function getStreamingLogo(streamOnString) {
        let imgSrc;
        switch (streamOnString) {
            case "Amazon":
                imgSrc = "./images/amazon.png";
                break;
            case "HBO":
                imgSrc = "./images/hbo.webp";
                break;
            case "Hulu":
                imgSrc = "./images/hulu.png";
                break;
            case "Netflix":
                imgSrc = "./images/netflix.jpeg";
                break;
            case "Peacock":
                imgSrc = "./images/peacock.png";
                break;
        }
        return imgSrc;
    }

    return(
        <div className="show-card" onClick={() => onShowClicked(show)}>
            <img src={image} alt="cover art" className="show-art"/>
            <div className="details-container">
                <header>
                    <h3>{name}</h3>                    
                </header>
                <p>{summary}</p>
                <footer>
                    <img src={getStreamingLogo(show.stream_on)} alt={show.stream_on} className="streaming-logo"></img>
                    <button onClick={handleDelete}>Delete</button>
                </footer>
            </div>
        </div>
    );
}

export default ShowCard;