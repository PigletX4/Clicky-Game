import React from "react";
import "./style.css";

  const GameCard = props => (
    <div className="holder" onClick={() => props.clickConfirm(props.id)}>
      <img className="img" alt={props.name} src={props.image} />
    </div>
  );


export default GameCard;