import React from "react";
import './Card.css'
import '../../styles/defaultDesign.css';

function Card({data, setModal, setModalInfo}) {

  const openModal = () => {
    setModal(true);
    setModalInfo(data);
  }

  const membership = () => {
    if (data.isAlumni) {
      return "졸업생";
    } else {
      return "인기모";
    }
  }

  return(
    <div className="Card--container" onClick={openModal}>
      <div className="Card--header-container">
        <div className="Card--header-text">
          <span className="b0-10-m" style={{ color: "#66707A"}}>{data.campus} {data.generation}회 {membership()} {data.city}, {data.country}</span>
        </div>

        <img 
          className="Card--header-img"
          src={require("../../assets/card-image.png")} 
          alt="card-img" 
        />
      </div>

      <div className="Card--content-container">
        <span className="Card--content-name">{data.korName} | {data.engName}</span>
        <span 
          className="b1-12-m" 
          style={{ color: "#66707A"}}
        >
          소설을 주로 쓰는 작가이면서..
        </span>
      </div>
    </div>
  )
}

export default Card;