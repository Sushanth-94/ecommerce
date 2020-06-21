import React from "react";
import SHOPDATA from './ShopData';
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

class Shop extends React.Component {
  state = {
    collections: SHOPDATA
  };
  render() {
      return(
        <div className="shop-page">
            {this.state.collections.map(({id, ...otherProps }) => {
                return <PreviewCollection key={id} {...otherProps} />
            })}
        </div>
      )
  }
}

export default Shop;