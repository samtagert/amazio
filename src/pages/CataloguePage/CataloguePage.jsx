import React from 'react';
import './CataloguePage.css';

const CataloguePage = (props) => {
  return (
    <div>
      {props.products
      ?
      props.products.map((product, idx) => <li key={idx}>{product.name}</li>)
      :
      <h2>LOADING</h2>}
    </div>
  );
}

export default CataloguePage;