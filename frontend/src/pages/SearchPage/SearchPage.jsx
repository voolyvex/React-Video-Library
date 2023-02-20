import React, { useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import useCustomForm from "../../hooks/useCustomForm"
import SearchFeed from "../../components/SearchFeed/SearchFeed";
import '../../components/SearchFeed/SearchFeed.css'

const SearchPage = (props) => {
    const [videos, setVideos] = useState([]);

    const [formData, handleInputChange, handleSubmit] = useCustomForm(fetchVideos);

    async function fetchVideos(fd) {
        try {
            await axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?q=${fd.text}&key=${KEY}&part=snippet&type=video&maxResults=10`)
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
                    name='text'
                    onChange={(e) => handleInputChange(e)}
                    value={formData.text} required={true} />
                <input
                    type='submit'
                    value="Go!" />
            </form>
            <SearchFeed videos={videos}/>
        </div>
    )
}
export default SearchPage;