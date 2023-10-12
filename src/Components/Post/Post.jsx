import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://webneel.com/daily/sites/default/files/images/daily/05-2014/nature-music.preview.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ad
        possimus commodi magnam rem quis dolorem excepturi quo suscipit
        praesentium dignissimos accusantium voluptatibus iure adipisci harum ea,
        explicabo quia nisi.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ad
        possimus commodi magnam rem quis dolorem excepturi quo suscipit
        praesentium dignissimos accusantium voluptatibus iure adipisci harum ea,
        explicabo quia nisi.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ad
        possimus commodi magnam rem quis dolorem excepturi quo suscipit
        praesentium dignissimos accusantium voluptatibus iure adipisci harum ea,
        explicabo quia nisi.
      </p>
    </div>
  );
}

export default Post;
