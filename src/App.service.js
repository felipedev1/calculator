function AppService() {

  const SUM = '+';
  const SUBTRACTION = '-';
  const MULTIPLICATION = '*';
  const DIVISION = '/';

  function calculate(number1, number2, operation) {
    let result;

    switch(operation) {
      case SUM:
        result = number1 + number2;
        break;
      case SUBTRACTION:
        result = number1 - number2;
        break;
      case MULTIPLICATION:
        result = number1 * number2;
        break;
      case DIVISION:
        result = number1 / number2;
        break;
      default: 
        result = null;
        break;
    }

    return result;
  }

  return [
    calculate,
    SUM,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION
  ]
}

export default AppService;