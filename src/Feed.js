import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])


    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />


            {posts.map((post) => (
                <Post 
                    key={post.data.id} 
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />

            ))}

            {/* 
            <Post 
                profilePic= "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                message='Tesla Model X'
                timestamp="This is a timestamp"
                username="Elon Musk"
                image="https://tesla-cdn.thron.com/delivery/public/image/tesla/2ddb3f38-d056-43cc-8e35-c849e7817ded/bvlatuR/std/2880x1800/MX-Interior-Hero-Desktop"
            /> 
*/}
        </div>
    )
}

export default Feed
