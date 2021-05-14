import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {GenerationMaxSize, requiredField} from "../../../utils/validators/validators";
import {TextArrea} from "../../Common/FormsControls/FormsControls";

const maxLanth3 = GenerationMaxSize(3);



const ProfileForm = (props) =>{
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"add my post"} name={"post"} component={TextArrea} validate ={[requiredField,maxLanth3]} />
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
}
const ProfileReduxForm = reduxForm({
    form : 'Post', // имя формы
})(ProfileForm)




const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message ={p.message} likesCount={p.likesCount} />);

    const onSubmit = (formData) =>{
        props.addPost(formData.post);
    }
    return <div>
        <h3>My post</h3>
        <ProfileReduxForm onSubmit={onSubmit} />
        {posts}
    </div>
}

export default MyPosts;
