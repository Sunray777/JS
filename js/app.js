function guessTheNumber(num) {
  if (num <= 10 && num >= 0) {
    res = Math.ceil(Math.random() * num) + 1;
    console.log(res);
    return res;
  } else if (num !== "number") {
    return new Error("Please provide a valid number");
  } else {
    return new Error("Please provide a number in range 0-10");
  }
}
guessTheNumber(10);
