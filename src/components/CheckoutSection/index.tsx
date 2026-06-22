import React, { Fragment, useState } from "react";
import Collapse from "@mui/material/Collapse";
import FontAwesome from "../UiStyle/FontAwesome";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { totalPrice } from "../../utils";
import type { CartItem } from "../../store/slices/cartSlice";

// images
import visa from "../../images/icon/visa.png";
import mastercard from "../../images/icon/mastercard.png";
import skrill from "../../images/icon/skrill.png";
import paypal from "../../images/icon/paypal.png";

import CheckWrap from "../CheckWrap";
import "./style.scss";

interface CheckoutProps {
  cartList: CartItem[];
}

interface TabsState {
  cupon: boolean;
  billing_adress: boolean;
  payment: boolean;
}

interface FormState {
  cupon_key: string;
  fname: string;
  lname: string;
  country: string | number;
  dristrict: string;
  address: string;
  post_code: string;
  email: string;
  phone: string;
  note: string;

  payment_method: string;
  card_type: string;

  fname2: string;
  lname2: string;
  country2: string | number;
  dristrict2: string;
  address2: string;
  post_code2: string;
  email2: string;
  phone2: string;

  card_holder: string;
  card_number: string;
  cvv: string;
  expire_date: string;
}

const cardType = [
  { title: "visa", img: visa },
  { title: "mastercard", img: mastercard },
  { title: "skrill", img: skrill },
  { title: "paypal", img: paypal },
];

const CheckoutSection: React.FC<CheckoutProps> = ({ cartList }) => {

  const [tabs, setExpanded] = useState<TabsState>({
    cupon: false,
    billing_adress: false,
    payment: true,
  });

  const [forms, setForms] = useState<FormState>({
    cupon_key: "",
    fname: "",
    lname: "",
    country: "",
    dristrict: "",
    address: "",
    post_code: "",
    email: "",
    phone: "",
    note: "",

    payment_method: "card",
    card_type: "",

    fname2: "",
    lname2: "",
    country2: "",
    dristrict2: "",
    address2: "",
    post_code2: "",
    email2: "",
    phone2: "",

    card_holder: "",
    card_number: "",
    cvv: "",
    expire_date: "",
  });

  const [dif_ship, setDif_ship] = useState<boolean>(false);

  const faqHandler = (name: keyof TabsState) => {
    setExpanded({
      cupon: false,
      billing_adress: false,
      payment: true,
      [name]: !tabs[name],
    });
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForms((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Fragment>
      <div className="checkoutWrapper section-padding">
        <div className="container">
          <div className="row g-3">

            {/* LEFT */}
            <div className="col-lg-7 col-12">
              <div className="check-form-area">

                {/* COUPON */}
                <div className="cuponWrap checkoutCard">
                  <Button
                    className="collapseBtn"
                    fullWidth
                    onClick={() => faqHandler("cupon")}
                  >
                    Have a coupon ? Click here to enter your code.
                    <FontAwesome name={tabs.cupon ? "minus" : "plus"} />
                  </Button>

                  <Collapse in={tabs.cupon}>
                    <div className="chCardBody">
                      <p>If you have coupon code, please apply it</p>
                      <form className="cuponForm">
                        <TextField
                          fullWidth
                          name="cupon_key"
                          value={forms.cupon_key}
                          onChange={changeHandler}
                        />
                        <Button className="cBtn cBtnBlack">Apply</Button>
                      </form>
                    </div>
                  </Collapse>
                </div>

                {/* BILLING ADDRESS */}
                <div className="cuponWrap checkoutCard">
                  <Button
                    className="collapseBtn"
                    fullWidth
                    onClick={() => faqHandler("billing_adress")}
                  >
                    Billing Address
                    <FontAwesome
                      name={tabs.billing_adress ? "minus" : "plus"}
                    />
                  </Button>

                  <Collapse in={tabs.billing_adress}>
                    <div className="chCardBody">
                      <div className="row g-3">

                        <div className="col-sm-6">
                          <TextField
                            label="First Name"
                            name="fname"
                            value={forms.fname}
                            onChange={changeHandler}
                            fullWidth
                          />
                        </div>

                        <div className="col-sm-6">
                          <TextField
                            label="Last Name"
                            name="lname"
                            value={forms.lname}
                            onChange={changeHandler}
                            fullWidth
                          />
                        </div>

                        <div className="col-12">
                          <TextField
                            label="Address"
                            name="address"
                            value={forms.address}
                            onChange={changeHandler}
                            fullWidth
                          />
                        </div>

                        <div className="col-sm-6">
                          <TextField
                            label="Email"
                            name="email"
                            value={forms.email}
                            onChange={changeHandler}
                            fullWidth
                          />
                        </div>

                        <div className="col-sm-6">
                          <TextField
                            label="Phone"
                            name="phone"
                            value={forms.phone}
                            onChange={changeHandler}
                            fullWidth
                          />
                        </div>

                        <div className="col-12">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={dif_ship}
                                onChange={() => setDif_ship(!dif_ship)}
                              />
                            }
                            label="Ship to a different address?"
                          />
                        </div>

                      </div>
                    </div>
                  </Collapse>
                </div>

                {/* PAYMENT */}
                <div className="cuponWrap checkoutCard">
                  <Button
                    className="collapseBtn"
                    fullWidth
                    onClick={() => faqHandler("payment")}
                  >
                    Payment Method
                    <FontAwesome name={tabs.payment ? "minus" : "plus"} />
                  </Button>

                  <Collapse in={tabs.payment}>
                    <RadioGroup
                      name="payment_method"
                      value={forms.payment_method}
                      onChange={changeHandler}
                    >
                      <FormControlLabel
                        value="card"
                        control={<Radio />}
                        label="Payment By Card"
                      />

                      <FormControlLabel
                        value="cash"
                        control={<Radio />}
                        label="Cash On Delivery"
                      />
                    </RadioGroup>

                    {/* Card Payment */}
                    {forms.payment_method === "card" && (
                      <>
                        <div className="cardType">
                          {cardType.map((item, i) => (
                            <div
                              key={i}
                              className={`cardItem ${forms.card_type === item.title ? "active" : ""
                                }`}
                              onClick={() =>
                                setForms((prev) => ({
                                  ...prev,
                                  card_type: item.title,
                                }))
                              }
                            >
                              <img src={item.img} alt={item.title} />
                            </div>
                          ))}
                        </div>

                        <CheckWrap />
                      </>
                    )}

                    {/* Cash On Delivery */}
                    {forms.payment_method === "cash" && (
                      <Link
                        to="/order_received"
                        className="cBtn cBtnLarge cBtnTheme mt-20"
                      >
                        Proceed to Checkout
                      </Link>
                    )}
                  </Collapse>
                </div>

              </div>
            </div>

            {/* RIGHT CART SUMMARY */}
            <div className="col-lg-5 col-12">
              <div className="cartTotals">
                <h4>Cart Total</h4>

                <Table>
                  <TableBody>

                    {cartList.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          {item.title} ${item.price} x {item.qty}
                        </TableCell>
                        <TableCell align="right">
                          ${item.qty * item.price}
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell>Total product</TableCell>
                      <TableCell align="right">{cartList.length}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Sub Price</TableCell>
                      <TableCell align="right">
                        ${totalPrice(cartList)}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Total Price</TableCell>
                      <TableCell align="right">
                        ${totalPrice(cartList)}
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutSection;