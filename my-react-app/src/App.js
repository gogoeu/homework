import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>글 제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;


/* 자료 잠깐 보관할 수 있는 변수랑 비슷한 state란 문법 사용법 useState, 상단에 자동으로 import 됨 */