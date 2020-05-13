import React from "react";

function ShowCaseCard({ category, items }) {
  return (
    <div className="showcase-card">
      <div className="category">
        <button>{category}</button>
      </div>
      <div className="images">
        {items.map((i) => (
          <div className="image-wrap">
            <img src={i.image.src} />
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCaseCard;
