export let initialObject = {
  bag: [],
  totalSum: 0,
};

export function reducer(state, action) {
  if (action.type === "ADD TO BAG") {
    let newArr = [...state.bag];
    let productInBag = {
      ...action.payload,
      count: 1,
      totalPrice: action.payload.product_price,
    };
    console.log(productInBag);
    newArr.push(productInBag);
    return { ...state, bag: newArr };
  } else if (action.type === "Delete From Bag") {
    let newArr = [...state.bag];
    let filteredArr = newArr.filter((item) => item.id !== action.payload);
    return { ...state, bag: filteredArr };
  } 
  
  else if (action.type === "DECREASE") {
    let newArr = [...state.bag];
    let elementIndex = newArr.findIndex((item) => item.id == action.payload);
    newArr[elementIndex].count = newArr[elementIndex].count - 1;
    newArr[elementIndex].totalPrice =
      newArr[elementIndex].count * newArr[elementIndex].product_price;
    // let totalSumValue = newArr.reduce(
    //   (total, price) => total + price.totalPrice,
    //   0
    // );
    if (newArr[elementIndex].count < 1) {
      newArr.splice(elementIndex, 1);
    }
    return { ...state, bag: newArr};
  } 
  
  else if (action.type === "INCREASE") {
    let newArr = [...state.bag];
    let elementIndex = newArr.findIndex((item) => item.id == action.payload);
    newArr[elementIndex].count = newArr[elementIndex].count + 1;
    newArr[elementIndex].totalPrice =
      newArr[elementIndex].count * newArr[elementIndex].product_price;
    // let totalSumValue = newArr.reduce(
    //   (total, price) => total + price.totalPrice,
    //   0
    // );
    return { ...state, bag: newArr };
  }
//   } else if (action.type === "GET TOTAL SUM") {
//     let totalSumValue = state.bag.reduce(
//       (total, price) => total + price.totalPrice,
//       0
//     );
//     return { ...state, totalSum: totalSumValue };
  
  return state;
}
