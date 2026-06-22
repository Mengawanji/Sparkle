import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface FormState {
  email: string;
  password: string;
  card_holder: string;
  card_number: string;
  cvv: string;
  expire_date: string;
  remember: boolean;
}

const CheckWrap: React.FC = () => {

  const navigate = useNavigate();

  const [value, setValue] = useState<FormState>({
    email: "user@gmail.com",
    password: "123456",
    card_holder: "Jhon Doe",
    card_number: "589622144",
    cvv: "856226",
    expire_date: "",
    remember: false,
  });

  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

    validator.showMessages();
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validator.allValid()) {
      setValue({
        email: "",
        password: "",
        card_holder: "",
        card_number: "",
        cvv: "",
        expire_date: "",
        remember: false,
      });

      validator.hideMessages();

      const userRegex = /^user+.*/gm;
      const email = value.email;

      if (email.match(userRegex)) {
        toast.success("Order Received successfully!");
        navigate("/order_received");
      } else {
        toast.info("User not existed!");
        alert(
          "User not existed! credential is : user@*****.com | vendor@*****.com | admin@*****.com"
        );
      }

    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  return (
    <div className="cardbp mt-20">
      <form onSubmit={submitForm}>
        <div className="row g-3">

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="Card holder Name"
              name="card_holder"
              value={value.card_holder}
              onChange={changeHandler}
              type="text"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="Card Number"
              name="card_number"
              value={value.card_number}
              onChange={changeHandler}
              type="number"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="CVV"
              name="cvv"
              value={value.cvv}
              onChange={changeHandler}
              type="text"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="Expire Date"
              name="expire_date"
              value={value.expire_date}
              onChange={changeHandler}
              type="date"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-12">
            <div className="formFooter mt-20">
              <Button
                fullWidth
                className="cBtn cBtnLarge cBtnTheme mt-20 ml-15"
                type="submit"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CheckWrap;