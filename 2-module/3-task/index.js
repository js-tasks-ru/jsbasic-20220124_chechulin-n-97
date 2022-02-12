let calculator = {
  read(a, b) {
    num1 = a;
    num2 = b;
  },
  sum() {
    return num1 + num2;
  },
  mul() {
    return num1 * num2;
  }
};

window.calculator = calculator;
