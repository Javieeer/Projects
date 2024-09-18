import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Instagram.css';

const Instagram = ({ userId, accessToken }) => {
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Obtener la información del perfil
                const profileResponse = await axios.get(`https://graph.instagram.com/${userId}`, {
                    params: {
                        fields: 'id,username,account_type,profile_picture_url',
                        access_token: accessToken,
                    },
                });
                setProfile(profileResponse.data);

                // Obtener los posts del perfil
                const postsResponse = await axios.get(`https://graph.instagram.com/${userId}/media`, {
                    params: {
                        fields: 'id,caption,media_type,media_url,thumbnail_url,permalink',
                        access_token: accessToken,
                    },
                });
                setPosts(postsResponse.data.data);
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
            }
        };

        fetchProfileData();
    }, [userId, accessToken]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="instagram-profile">
        <div className="profile-header">
            <img src={profile.profile_picture_url} alt={`${profile.username}'s profile`} className="profile-picture" />
            <h2 className="username">@{profile.username}</h2>
        </div>
        <div className="post-gallery">
            {posts.slice(0, 9).map((post) => (
            <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
                <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="post-image"
                />
            </a>
            ))}
        </div>
        </div>
    );
};

export default Instagram;
