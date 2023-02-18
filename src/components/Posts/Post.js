import React,{useState,useEffect} from 'react';
import "./post.css"

const Post = ({apiData,limit}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // initialize the posts state with the apiData array
        setPosts(apiData.map((post) => 
        {
            console.log({...post,likes:0})
            return {...post, likes: 0};//adding likes with old property of list
        }
        ));
    }, [apiData]);

    const handleLike = (index) => {
        // create a new copy of the posts array
        const newPosts = [...posts];
        // update the likes count for the specified post
        newPosts[index].likes += 1;
        // update the state with the newPosts array
        setPosts(newPosts);
    };
    return (
        <div className="Page">
             {
                posts.map((post,index) => {
                    return (
                        <div className="Post" key={index}>
                            <img src=" https://picsum.photos/200?random=${post.id}" width="280px" height="60%"></img>
                            <p>User Id : {post.id}</p>
                            <p>Title : {post.title}</p>
                            <p>Likes: {post.likes}</p>
                            <button className="like" onClick={()=>handleLike(index)}>Like Post</button>
                        </div>
                    )
                })
             }
             {
                <button className="load-more" onClick={limit}>Load More Post</button>
             }
        </div>
    );

}

export default Post;
