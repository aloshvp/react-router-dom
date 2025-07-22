import React, { useEffect, useState } from 'react'

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const data = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const json = await response.json();
                setPosts(json)
            }
            catch (err) {
                console.error("Error fetching posts:", err);
            }
            finally {
                setLoading(false);
            }
        }
        data();
    }, [])


    if (loading) {
        return <div>Loading......</div>
    }

    return (
        <>
            <div>Display all post here</div>
            <ul>
                {posts?.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul >
        </>
    )
}

export default PostList