import { useState, useEffect } from 'react';

function Discussions({ currentPageData }) {
  //스테이트로 받은 페이지 보여주기.
  //데이터를 페이지에 넣을 만큼만 받아오기.
  //console.log(currentPageData)

  return (
    <div className="Discussions">
      <ul className="discussions__container">
        {currentPageData && currentPageData.map((data) => {
          return(
          <li className="discussion__container" key={data.id}>
            <div className="discussion__avatar--wrapper"><img className="discussion__avatar--image" alt="avatarImg" src={data.avatarUrl}/></div>
            <div className="discussion__content">
              <h2 className="discussion__title"><a href={data.url}>{data.title}</a></h2>
              <div className="discussion__information">{data.author + '/' + new Date(data.createdAt).toLocaleString()}</div>
            </div>
            {data.answer !== null ? <div className="answered__check"><a href={data.answer.url}>💬</a></div> : <div className="answered__check"></div>}     
          </li>
          )
          })
        }
      </ul>
    </div>
  );
}

export default Discussions;
