import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";
import FormData from "../../hooks/useCustomForm"

const SearchPage = () => {
    const [videos, setVideos] = useState({});
    
        const fetchVideos = async () => {
            try {
                let response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?q=${FormData}&key=${KEY}&part=snippet&type=video&maxResults=5`);
                console.log("Video feed:", response.data)
                setVideos(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchVideos();
    
    return (
        <div>
            <h1>Start your search here</h1>
            <SearchBar />
            {/* {videos.map((video) => (
                <p>{videos.items.snippet.title}</p>
            ))} */}
        </div>
    )
}
export default SearchPage;