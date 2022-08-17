import checkoutFormModel from "./checkout-form-model";

const {
  formField: {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipcode,
    country,
    // useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = checkoutFormModel;

const formInitialValue = {
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [state.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [nameOnCard.name]: "",
  [cardNumber.name]: "",
  [expiryDate.name]: new Date().toDateString(),
  [cvv.name]: "",
};

export default formInitialValue;
