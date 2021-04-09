import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emptyBasket } from "../actions/basketActions";
import { BasketItem } from "./BasketItem";
import { AiOutlineArrowLeft } from "react-icons/ai";
import empty from "../assets/empty.jpg";

export const Basket = () => {
  const state = useSelector((state) => state.takeawayReducer.items);
  const dispatch = useDispatch();
  const subTotal = state
    .reduce((acc, item) => acc + item.price.price * item.qty, 0)
    .toFixed(2);

  const basketItem = state.map((item) => (
    <BasketItem key={item.id} item={item} />
  ));

  return (
    <div className="basket_container">
      <div className="basket_header">
        <div className="arrow">
          <Link to="/takeawaymenu">
            <AiOutlineArrowLeft className="icon arrow" size={23} />
          </Link>
        </div>
        <div className="title">
          <h3>Basket</h3>
        </div>
      </div>

      {state.length === 0 ? (
        <>
          <div className="empty_basket_container">
            <div className="img_container">
              <img src={empty} alt="empty" />
            </div>
            <div>
              <h2>No Orders Yet</h2>
            </div>
            <div>
              <p>Your basket is empty. Add something from the menu</p>
            </div>

            <div className="btn_goback_container">
              <Link to="/takeawaymenu">
                <button className="btn_goback">GO BACK</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="basket_item_container">{basketItem}</div>
          <div className="basket_total_container">
            <div className="total">
              <h4>Total</h4>
              <div>€{subTotal}</div>
            </div>

            {/* <button onClick={() => dispatch(emptyBasket())}>
              Empty Basket
            </button> */}
          </div>
          <div
            className="btn_order_container 
"
          >
            <Link to="/checkout">
              <button className="btn_order">Order</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
