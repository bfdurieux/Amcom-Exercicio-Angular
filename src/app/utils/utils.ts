export class Utils {

  static validateRegistration(registration: string): boolean {

    if(registration.length != 11)
      return false;

    let multiplier1: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let multiplier2: number[] = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    let baseNumbers = registration.slice(0, registration.length - 2);

    let sum = multiplier1.map((multiplierNumber, i) => multiplierNumber * +baseNumbers[i]).reduce((a, b) =>  a + b, 0);
    let digits: string = Math.abs(this.getRemainder(sum)).toString();

    baseNumbers += digits;
    sum = multiplier2.map((multiplierNumber, i) => multiplierNumber * +baseNumbers[i]).reduce((a, b) =>  a + b, 0);

    digits += Math.abs(this.getRemainder(sum)).toString();

    return registration.endsWith(digits);
  }

  static getRemainder(sumReference: number): number {
    let remainder = sumReference % 11;

    if (remainder < 2)
      remainder = 0;
    else
      remainder -= 11;

    return remainder;
  }
}
