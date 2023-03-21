import '../styles/Form.css';
import Menubar from '../components/Menubar';
import { useEffect } from 'react';

function Form({discussions, setDiscussions}) {
  function inputDiscussion(){
    let nameValue = document.querySelector('#name').value;
    let titleValue = document.querySelector('#title').value;
    let storyValue = document.querySelector('#story').value;
    let currentTime = new Date();

    const newDiscussion = {
      id: discussions.length + 10,
      createdAt: currentTime,
      author: nameValue,
      title: titleValue,
      body: storyValue,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
      answer: null  // 안 넣어주면 answer null 아닌거 if문에 걸려서 오류난다.
    };
    setDiscussions([newDiscussion, ...discussions]);
    localStorage.setItem('Discussions', JSON.stringify(discussions));
  }

  return (

      <div className="Form">
        
        <Menubar text={'Your Question'}/>
        <form action="" method="get" className="form">
            <div className="form__text">
              <p>ENTER HERE</p>
            </div>
            <div className="form__input--wrapper">

              <div className="form__input--name">
                <label htmlFor="name"></label>
                <input type="text" placeholder="name" name="name" id="name" autoComplete="off" required></input>
              </div>

              <div className="form__input--title">
                <label htmlFor="name"></label>
                <input type="text" placeholder="title" name="title" id="title" autoComplete="off" required></input>
              </div>

              <div className="form__textbox">
                <label htmlFor="story"></label>
                <textarea id="story" name="story" placeholder="Write your Question" autoComplete="off" required></textarea>
              </div>

              <div className="form__submit">
                <input onClick={inputDiscussion} className="inputBtn" type="button" value="Question"></input>
              </div>
          </div>
        </form>
      </div>

  );
}

export default Form;