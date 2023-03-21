import React, { useState } from 'react';
import '../styles/Paging.css';
import Discussions from '../components/Discussions';
import Pagination from "react-js-pagination";

function Paging({ discussions }) {
  const [page, setPage] = useState(1);
  //console.log(discussions);
  let discussionsCount = discussions.length;
  let discussionPerPage = 10;
  let totalPage = discussionsCount/discussionPerPage;

  let dataPerPage = [];

  for(let i=0; i<totalPage; i++){ //10개씩 나눠서 배열에 넣기
    let temp = [];
    for(let j=0; j<10; j++){
      if(i*10 + j < discussionsCount) temp.push(discussions[i*10 + j])
    }
    dataPerPage.push(temp);
  }
  //console.log(discussions[0]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  let pageData = dataPerPage[page-1];

  return (
    <div className='Paging'>
      <Pagination
        activePage={page}
        itemsCountPerPage={discussionPerPage}
        totalItemsCount={discussionsCount}
        pageRangeDisplayed={totalPage}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
      <Discussions currentPageData={pageData}/>
    </div>
  );
}
export default Paging;