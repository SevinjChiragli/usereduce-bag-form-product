import { goods } from "../../assets/data/data";

export let initialObject = {
  products: goods.map((item) => ({ ...item, open: false })),
  searchValue: ""
};

export function reducer(state, action) {
  if (action.type === "ADD DATA") {
    action.payload.preventDefault();

    let formData = Object.fromEntries([...new FormData(action.payload.target)]);
    let newArr = [...state.products];
    newArr.push(formData);
    return { ...state, products: newArr };
  } else if (action.type === "SHOW FORM") {
    let newArr = state.products.map((item) => {
      if (item.id === action.payload.id) {
        return { ...action.payload, open: !action.payload.open };
      } else {
        return { ...item, open: false };
      }
    });
    return { ...state, products: newArr };
  } else if (action.type === "CHANGE DATA") {
    action.payload.argument.preventDefault();

    let formData = Object.fromEntries([
      ...new FormData(action.payload.argument.target),
    ]);

    let newArr = [...state.products];
    let elementIndex = newArr.findIndex(
      (item) => item.id === action.payload.id
    );
    newArr[elementIndex].product_name = formData.product_name;
    newArr[elementIndex].product_description = formData.product_description;
    newArr[elementIndex].product_price = formData.product_price;

    return { ...state, products: newArr };
  } else if (action.type === "SEARCH VALUE") {
    return { ...state, searchValue: action.payload };
  } else if (action.type === "DELETE DATA") {
    let newArr = [...state.products];
    let elementIndex = newArr.findIndex((item) => item.id === action.payload);
    newArr.splice(elementIndex, 1);
    return { ...state, products: newArr };
  }

  return state;
}
