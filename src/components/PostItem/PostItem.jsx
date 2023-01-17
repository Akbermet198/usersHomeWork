import styles from "./PostItem.module.css"

const PostItem = ({post})=>{
 
 return (
  <div className={styles.div} >
<strong  >
 {post.name}
</strong>
<div  >({post.age} years old)</div>
  </div>
 )
}
export default PostItem