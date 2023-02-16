import React from "react";
import useCustomForm from "../../hooks/useCustomForm";
import fetchVideos from "../../pages/SearchPage/SearchPage";


const SearchBar = () => {
    const { formData, handleInputChange, handleSubmit, reset } = useCustomForm(fetchVideos);
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='text' placeholder='Search' onChange={handleInputChange}
                value={formData.text} required={true} />

            <button type='submit'>Go!</button>
        </form>
    );
}

export default SearchBar;