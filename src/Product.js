import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
export default function Product() {
  const productObj = useSelector((store) => store.ItemReducer);
  let [itemsObj, setCopyproductobj] = useState(productObj.products);
  const radionbtnselect = (ele) => {
    let currentVal = ele.target.value;
    let filteredObj = currentVal != "all" ? productObj.products.filter((item, index) => {
      return item.type == currentVal;
    }) : productObj.products;
    setCopyproductobj(filteredObj);
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="product_compo">Product Component</h1>
        <div className="p-3 mb-2 bg-info text-white text-center information-text">
          project developed by using
          <strong>
            Functional Component(Hooks), React Router, React Redux, Redux
            persist
          </strong>
          to maintain local storage
        </div>

        <div className="col-sm-2">
          <div>
            <div className="form-check">
            <input className="form-check-input" name="flexRadioDefault" type="radio" value="all" onChange={(e) => radionbtnselect(e)} id="all" />
              <label className="form-check-label" htmlFor="all">
                All
              </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" name="flexRadioDefault" type="radio" value="mobile" onChange={(e) => radionbtnselect(e)} id="mobile" />
              <label className="form-check-label" htmlFor="mobile">
                Mobile
              </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" name="flexRadioDefault" type="radio" value="laptop" onChange={(e) => radionbtnselect(e)} id="laptop" />
              <label className="form-check-label" htmlFor="laptop">
                Laptop
              </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" name="flexRadioDefault" type="radio" value="tv" onChange={(e) => radionbtnselect(e)} id="tv" />
              <label className="form-check-label" htmlFor="tv">
                Tv
              </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" name="flexRadioDefault" type="radio" value="others" onChange={(e) => radionbtnselect(e)} id="others" />
              <label className="form-check-label" htmlFor="others">
                others
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="row">
            {itemsObj.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
