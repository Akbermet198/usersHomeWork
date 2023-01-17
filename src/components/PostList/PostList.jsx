import PostItem from "../PostItem/PostItem"
 import styles from "./PostList.module.css" 

const PostList =({posts})=>{
//  console.log(posts)
 return (
  <div className={styles.div} >
{posts.map(post=>(
 <PostItem post ={post} key={post.name}/>
))}
  </div>
 )
}
export default PostList