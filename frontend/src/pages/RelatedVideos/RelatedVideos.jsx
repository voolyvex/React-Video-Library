import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedFeed from '../../components/RelatedFeed/RelatedFeed';
import axios from 'axios';


const RelatedVideos = () => {
    const [relatedVideos, setRelatedVideos] = useState([])
    const { videoId } = useParams()

    useEffect(() => {
        console.log('is useEffect hook');
        getRelatedVideos();

    }, []);

    async function getRelatedVideos() {
        try {
            await axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&part=snippet&key=AIzaSyCVpaCOK8rYM9_3_-38P-6tQyzl6zb8qgE&maxResults=5`)
                .then(response => setRelatedVideos(response.data.items));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <RelatedFeed relatedVideos={relatedVideos} />
        </div>
    )
}
export default RelatedVideos;