import React from "react";
import PostItem from "../post-list-item/post-list-item";
import "./post-list.css"


// {posts, onDelite, onToggleImportant , onToggleLiked}
const PostList = (props) => {
    const element = props.posts.map((elem) => {
        return <li key={elem.id} className='app-list list-group'>
            <PostItem label={elem.label}
                      important={elem.important}
                      like={elem.like}
                      onDelite={() => props.onDelete(elem.id)}
                      onToggleImportant={() => props.onToggleImportant(elem.id)}
                      onToggleLiked={() => props.onToggleLiked(elem.id)}
            />
        </li>
    });

    return <ul className='app-list list-group'>
        {element}
    </ul>
};

export default PostList;
