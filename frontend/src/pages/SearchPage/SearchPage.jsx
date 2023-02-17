import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import useCustomForm from "../../hooks/useCustomForm"

const SearchPage = (props) => {
    const [videos, setVideos] = useState({});
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(fetchVideos);

    async function fetchVideos(fd) {
        try {
            await axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?q=${fd.text}&key=${KEY}&part=snippet&type=video&maxResults=5`)
                .then(response => setVideos(response.data.items));
            // console.log("Video feed:", response.data)
            console.log(formData.text)

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
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
        </div>
    )
}
export default SearchPage;