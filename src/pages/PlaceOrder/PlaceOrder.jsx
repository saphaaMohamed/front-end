import { useContext } from 'react';
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext'; // ✅ Correct path to your context
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext); // ✅ Fix is here
  const navigate = useNavigate();

  return (
    <div className="placeorder-container">
      <form className="placeorder-form">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>

          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Street" />

          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>

          <input type="text" placeholder="Phone" />
        </div>

        <div className="place-order-right">
          <p className="title">Order Summary</p>
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
