import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import OrderRecivedSec from "../../components/OrderRecivedSec";
import type { RootState } from "../../store";
import type { CartItem } from "../../store/slices/cartSlice";

const OrderRecived: React.FC = () => {

  const cartList: CartItem[] = useSelector(
    (state: RootState) => state.cart.cart
  );

  return (
    <Fragment>
      <OrderRecivedSec cartList={cartList} />
    </Fragment>
  );
};

export default OrderRecived;