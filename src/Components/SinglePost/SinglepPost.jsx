import "./SinglePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function SinglepPost() {
  return (
    <div className="singlepPost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/4610798/pexels-photo-4610798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <FontAwesomeIcon className="singlePostIcon" icon={faEdit} />
            <FontAwesomeIcon className="singlePostIcon" icon={faTrashAlt} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Jimmy</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse et
          beatae minus consequatur laudantium commodi perferendis consequuntur
          debitis, atque excepturi velit illo, sequi sit quo odit reiciendis
          veritatis itaque aspernatur.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Esse et beatae minus consequatur laudantium commodi
          perferendis consequuntur debitis, atque excepturi velit illo, sequi
          sit quo odit reiciendis veritatis itaque aspernatur.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Esse et beatae minus
          consequatur laudantium commodi perferendis consequuntur debitis, atque
          excepturi velit illo, sequi sit quo odit reiciendis veritatis itaque
          aspernatur.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Esse et beatae minus consequatur laudantium commodi perferendis
          consequuntur debitis, atque excepturi velit illo, sequi sit quo odit
          reiciendis veritatis itaque aspernatur.
        </p>
      </div>
    </div>
  );
}

export default SinglepPost;
