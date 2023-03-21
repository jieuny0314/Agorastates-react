import Form from '../components/Form';
import '../styles/Contents.css';
import { useState, useEffect, useRef } from 'react';
import DiscussionsContainer from '../components/DiscussionsContainer';

function Contents() {
  const [storageData, setStorageData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000/discussions')  // 서버의 데이터 받아오기
      .then(res => res.json())
      .then(json => { 
        if(localStorage.length===0){
          localStorage.setItem('Discussions', JSON.stringify(json));
          setStorageData(JSON.parse(localStorage.getItem('Discussions')));
        }
        else{
          setStorageData(JSON.parse(localStorage.getItem('Discussions')));
        }
      }); 

  }, []);

  //console.log(storageData);

  return (
    <div className="Contents">
      <Form discussions={storageData} setDiscussions={setStorageData}/>
      <DiscussionsContainer discussions={storageData}/>
    </div>
  );
}

export default Contents;