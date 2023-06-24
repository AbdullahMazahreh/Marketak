import "./Summary.css";
import { useState } from "react";
function Summary({products}) {
const [subtotal, setSubTotal] = useState(0);

  return (
    <div className="summary-card">
      <h2>Summary</h2>
      <span>Estimate Shipping and Tax</span>
      <p className="shippinp">
        Enter your destination to get a shipping estimate.
      </p>
      <span>Apply Discount code</span>
      <p>
        <span>subtotal</span>
        <span>{subtotal}$</span>
      </p>
      <p>
        <span>Shipping</span>
        <span>150$</span>
        <span className="shippinp">
          (Standard Rate - Price may vary depending on the item/destination.
          TECS Staff will contact you.)
        </span>
      </p>
      <p>
        <span>Tax</span>
        <span>150$</span>
      </p>
      <p>
        <span>GST</span>
        <span>150$</span>
      </p>
      <p>
        <span> Order Totall </span>
        <span>150$</span>
      </p>

      <a href="#">Proceed to Checkout</a>
      <a href="#">Checkout with Paypal</a>
    </div>
  );
}

export default Summary;
