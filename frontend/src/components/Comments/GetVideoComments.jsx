import React, { useEffect, useState } from 'react';

import DisplayCommentFeed from './DisplayCommentFeed';
import axios from 'axios';


const GetVideoComments = () => {
    
    const [commentFeed, setCommentFeed] = useState([{
        "id": 2,
        "user": {
            "id": 4,
            "password": "pbkdf2_sha256$390000$4MnG1Y846aNfLS2kSdbV6j$3/sQNKjUZ667G9gsoHGZ5aY2cxvkLF7k29z4oSP5oDo=",
            "last_login": null,
            "is_superuser": false,
            "username": "jm",
            "first_name": "Joe",
            "last_name": "Moe",
            "email": "joe@joemoe.com",
            "is_staff": false,
            "is_active": true,
            "date_joined": "2023-02-10T04:48:26.912302Z",
            "groups": [],
            "user_permissions": []
        },
        "video_id": "abcd1234",
        "text": "This is not ? a comment acoording to Lacey Beans",
        "likes": 5,
        "dislikes": 0
    }]);

    useEffect(() => {
        getComments();

    }, []);

    async function getComments() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/comments/');
            console.log(response.data);
            setCommentFeed(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    


    // if user is logged in - http request to get videos from my backend api 

    return (
        <div>
            <DisplayCommentFeed commentFeed={commentFeed} />
        </div>
    )
}

export default GetVideoComments;