import React from "react";
import "./PreviewCollection.scss";
import ItemCollection from "../itemCollection/ItemCollection";

const PreviewCollection = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map(({id, ...items}) => {
            return <ItemCollection key={id} {...items} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
