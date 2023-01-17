import { useState } from "react";
import MyButton from "../UI/Input/Button/Button";
import MyInput from "../UI/Input/MyInput";
 
import styles from "./Postform.module.css"

const PostForm = ({ onCreatePost }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    // console.log(event.target.value)
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const newPostHandler = (event) => {
    event.preventDefault();
    const newPost = {
      name,
      age,
    };

    onCreatePost(newPost);
    setName("");
    setAge("");
  };

  return (
   <div className= {styles.div}>
<form>
      <MyInput
        onChange={nameChangeHandler}
        value={name}
        type="text"
        placeholder="name"
        label={"Username"}
      />
      <MyInput
        onChange={ageChangeHandler}
        value={age}
        type="text"
        placeholder="age"
        label={"Age(Years)"}
      />
      <MyButton onClick={newPostHandler} type="submit" disabled={!name || !age}>
        Add User
      </MyButton>
    </form>
   </div>
    
  );
};
export default PostForm;
