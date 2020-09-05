module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    //set function basically calls a function or evaluates an expression after some delay(in millisecs)
    setTimeout(
      () =>
        callback(
          new Error(
            "Rectangle's dimensions should be greater than zero:l" +
              x +
              " ,and b=" +
              y
          ), //new creates an object from constructor function
          null
        ), //takes 2 parameters:1. eroor 2. return value
      2000
    ); //it takes 2 parameters:1.function 2.time period for which it is delayed
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }), //takes 2 parameters:1. error 2. return value
      2000
    ); //setTimeOut() takes 2 parameters:1.function 2.time period for which it is delayed
  }
};
