import '../styles/DiscussionsContainer.css';
import Menubar from '../components/Menubar';
import '../styles/Discussions.css';
import Paging from './Paging';

function DiscussionsContainer({discussions}) {

  return(
    <div className="DiscussionsContainer">
      <Menubar text={`Question List (${discussions.length})`} />
      <Paging discussions={discussions}/>
    </div>
  );
}

export default DiscussionsContainer;
