import './Single.css'
import Sidebar from "../../../Components/Sidebar/Sidebar"
import SinglepPost from '../../../Components/SinglePost/SinglepPost';

function Single() {
  return <div className="single">
    <SinglepPost/>
    <Sidebar/>
  </div>;
}

export default Single