import React from "react";
import useAuth from "../../hooks/useAuth";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const name = (user.first_name);
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       let response = await axios.get(
  //       //   `https://www.googleapis.com/youtube/v3/search?q=pinnocchio&key=${KEY}&part=snippet&type=video&maxResults=5`, {
  //       //   headers: {
  //       //     Authorization: "Bearer " + token,
  //       //   },
  //       // });
  //       console.log("Video feed:", videos)
  //       setVideos(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchVideos();
  // }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.first_name}!</h1>
      {/* {videos &&
        videos.map((video) => (
          <p>
            {video.items.snippet.title}
          </p>
        ))} */}
      
    </div>
  );
};

export default HomePage;
