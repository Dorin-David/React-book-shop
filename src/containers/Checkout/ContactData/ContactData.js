import { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      triggered: false,
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Street",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      triggered: false,
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ZIP Code",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
      },
      valid: false,
      triggered: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      triggered: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your E-mail",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      triggered: false,
    },
    deliveryType: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
      value: "cheapest",
      validation: {},
      valid: true,
    },
  });

  const [isFormValid, setFormValidity] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOrder = (event) => {
    event.preventDefault();
    setLoading(true);
    let formData = {};
    for (let formKey in orderForm) {
      formData[formKey] = orderForm[formKey].value;
    }
    const currentOrder = {
      books: props.books,
      price: props.price.toFixed(2),
      date: new Date(),
      orderData: formData,
    };
    axios
      .post("/orders.json", currentOrder)
      .then((res) => {
        setLoading(false);
        props.history.push("/order-confirm");
      })
      .catch((rej) => {
        setLoading(false);
      });
  };

  const validateValue = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length === rules.minLength && isValid;
    }
    return isValid;
  };

  const handleInputChange = (event, id) => {
    let copyForm = {
      ...orderForm,
    };
    let updatedValue = {
      ...copyForm[id],
    };
    updatedValue.value = event.target.value;
    updatedValue.valid = validateValue(
      updatedValue.value,
      updatedValue.validation
    );
    updatedValue.triggered = true;
    copyForm[id] = updatedValue;

    let isFormValid = true;
    for (let key in copyForm) {
      isFormValid = copyForm[key].valid && isFormValid;
    }
    setOrderForm(copyForm);
    setFormValidity(isFormValid);
  };

  const cancelPurchasing = () => {
    props.history.replace("/");
  };

  const formElements = [];
  for (let key in orderForm) {
    formElements.push({ key, data: orderForm[key] });
  }
  const generateForms = formElements.map((form) => {
    return (
      <Input
        key={form.key}
        elementType={form.data.elementType}
        elementConfig={form.data.elementConfig}
        value={form.data.value}
        invalid={!form.data.valid}
        shouldValidate={form.data.validation}
        triggered={form.data.triggered}
        handleChange={(event) => handleInputChange(event, form.key)}
      />
    );
  });

  let form = (
    <form>
      {generateForms}
      <div className="form-btns">
        <Button click={cancelPurchasing} btnClass={["cancel-btn"]}>
          CANCEL
        </Button>
        <Button
          click={handleOrder}
          disabled={!isFormValid}
          btnClass={["checkout-btn"]}
        >
          ORDER
        </Button>
      </div>
    </form>
  );
  if (loading) {
    form = <Spinner />;
  }
  return (
    <div className="ContactData">
      <h4 className="form-title">Please enter your contact data</h4>
      {form}
    </div>
  );
};

export default ContactData;
