import React from "react";

const UserInfo = ({user}) => {
    return(
        <div className="user-info">
            <div className="avatar">
                <img src={user.avatar_url} alt="avatar"/>
            </div>
            <div className="content">
                <h2>{user.name}</h2>
                <p>
                    <strong>Company:</strong>
                    {user.company}
                </p>
                <p>
                    <strong>Url:</strong>
                    {user.url}
                </p>
                <p>
                    <strong>Bio:</strong>
                    {user.bio}
                </p>
                <p>
                    <strong>Location:</strong>
                    {user.location}
                </p>
                <p>
                    <strong>Followers:</strong>
                    {user.followers}
                </p>
                <p>
                    <strong>Following:</strong>
                    {user.following}
                </p>
            </div>
        </div>
    )
}

export default UserInfo;