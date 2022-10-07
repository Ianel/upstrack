import React from "react";

const CollectionCard = ({ imgSrc, title, text }) => {
  return (
    <div className="shadow-lg p-12 text-center rounded-sm">
      <img className="w-48 object-cover mx-auto" src={imgSrc} alt={title} />
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-tertiary">{text}</p>
    </div>
  );
};

export default CollectionCard;
