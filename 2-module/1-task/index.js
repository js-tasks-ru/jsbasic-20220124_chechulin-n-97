function sumSalary(salaries) {
  let result = 0;
  for (let value of Object.values(salaries)) {
    if (isFinite(value)) {
      result += value;
    }
  }
  return result;
}
