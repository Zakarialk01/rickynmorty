import React from "react";

const Character = ({ item }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={item.image} />
        </div>
        <div className="flip-card-back">
          <div style={{ marginTop: "10%" }}>
            <ul>
              <li>
                <strong>Name :</strong>
                {item.name}
              </li>
              <li>
                <strong>Gender :</strong>
                {item.gender}
              </li>
              <li>
                <strong>Status :</strong> {item.status}
              </li>
              <li>
                <strong>Species :</strong> {item.species}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
