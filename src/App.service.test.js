import AppService from './App.service'

describe('Teste de AppService', () => {
  const [calculate, concatNumber, SUM, SUBTRACTION, MULTIPLICATION, DIVISION] = AppService();

  it('1 + 4 should be 5', () => {
    let sum = calculate(1, 4, SUM);
    expect(sum).toEqual(5);
  });

  it('1 - 4 should be -3', () => {
    let subtraction = calculate(1, 4, SUBTRACTION);
    expect(subtraction).toEqual(-3);
  });

  it('1 * 4 should be 4', () => {
    let multiplication = calculate(1, 4, MULTIPLICATION);
    expect(multiplication).toEqual(4);
  });

  it('1 * 4 should be 0.25', () => {
    let division = calculate(1, 4, DIVISION);
    expect(division).toEqual(0.25);
  });

  it('should return null for invalid operation', () => {
    let invalid = calculate(1, 4, '%');
    expect(invalid).toEqual(null)
  })

});