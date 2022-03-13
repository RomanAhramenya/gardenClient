import React from "react";
import style from "./content.module.css";

function OpenGroundCard(props) {
  

  const deleteClick = () => {
    props.deleteThunk(props.path,props.id)

  }
  return (
    <div className={style.card}>
      <h3>{props.title}</h3>
      <div className={style.card_wraper}>
        <div className={style.image}>
          <img src={"http://localhost:5000/" + props.image} alt={props.title} />
        </div>
        <div className={style.card_wraper__text}>
          <p>{props.descript}</p>
          <button>Читать дальше</button>
          <button onClick={deleteClick}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default OpenGroundCard;
