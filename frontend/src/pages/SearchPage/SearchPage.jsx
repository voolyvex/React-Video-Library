import React, { useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import SearchFeed from "../../components/SearchFeed/SearchFeed";
import '../../components/SearchFeed/SearchFeed.css'

const SearchPage = (props) => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("pinnocchio");
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchVideos(searchTerm);
    }

    async function fetchVideos(text) {
        try {
            await axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}&part=snippet&type=video&maxResults=12`)
                .then(response => setVideos(response.data.items));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="search-page">
            <h1>Start your search here</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm} required={true} />
                <input
                    type='submit'
                    value="Go!" />
            </form>
            <SearchFeed videos={videos} />
        </div>
    )
}
export default SearchPage;