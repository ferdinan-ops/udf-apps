import React from "react";
import { useNavigate } from "react-router-dom";
import "./post.scss";

const Post = ({ post }) => {
   const navigate = useNavigate();

   return (
      <div className="post">
         <div className="container" onClick={() => navigate(`/forum/questions/${post.id}`)}>
            <div className="info">
               <div className="wrapper">
                  <p><span>{post?.likes?.length}</span> suka</p>
                  <p><span>{post?.answers?.length}</span> jawaban</p>
                  <p><span>{post?.views?.length}</span> melihat</p>
               </div>
            </div>
            <div className="content">
               <div className="top">
                  <h2>{post.title}</h2>
                  <span>{post.desc}</span>
               </div>
               <div className="bottom">
                  <div className="tags">
                     {post?.tags?.map((tag, index) => (
                        <button key={index}># {tag}</button>
                     ))}
                  </div>
                  <div className="userInfo">
                     <img src={post?.user?.profilePic} alt="" />
                     <span>{post?.user?.name}</span>
                     <span>&bull;</span>
                     <span>{post.createdAt}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Post;
