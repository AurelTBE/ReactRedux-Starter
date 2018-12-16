import React from 'react'
import VideoListItem from '../components/video-list-items'

const VideoList = () => {
    const movies = ["Film1", "Film2", "Film3", "Film4", "Film5"]
    const moviesList = movies.map(movie => {
        return <VideoListItem key={movie} movie={movie} />
    })
    return (
        <div>
            <ul>
                {moviesList}
            </ul>
        </div>
    )
}

export default VideoList