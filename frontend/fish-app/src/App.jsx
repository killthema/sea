import { useState } from "react";
import "./App.css";
import congerImg from "./assets/conger.jpg";

function App() {
  const [showDetail, setShowDetail] = useState(false);

  const fishInfo = {
    name: "붕장어",
    scientificName: "Conger myriaster",
    description: "우리나라 전 연안의 모래바닥에 서식하는 바닷물고기입니다.",
    habitat: "수심 100m 이내 모래·펄 바닥",
    size: "최대 90cm",
    salinity: "1.021 ~ 1.024",
  };

  return (
    <div className="page">
      <nav className="navbar">
        <h1 className="logo">해수어 도감</h1>
        <div className="menu">
          <a href="#">회원가입</a>
          <a href="#">어종 검색</a>
          <a href="#">로그인</a>
        </div>
      </nav>

      <main className="content">
        <div className="card">
          <h2>해수어 도감에 오신 것을 환영합니다</h2>

          <img src={congerImg} alt="붕장어" className="photo" />

          <h3>{fishInfo.name}</h3>
          <p className="sub">{fishInfo.scientificName}</p>
          <p>{fishInfo.description}</p>

          <button onClick={() => setShowDetail(!showDetail)}>
            {showDetail ? "닫기" : "상세 정보"}
          </button>

          {showDetail && (
            <ul className="detail">
              <li>서식지: {fishInfo.habitat}</li>
              <li>크기: {fishInfo.size}</li>
              <li>적정 염도: {fishInfo.salinity}</li>
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;