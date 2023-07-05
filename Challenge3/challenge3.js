//testcase1
const billValue1 = 275;

const tip1 =
  billValue1 >= 50 && billValue1 <= 300
    ? (billValue1 / 100) * 15
    : (billValue1 / 100) * 15;
const total1 = tip1 + billValue1;
const message = ` The bill was ${billValue1}, the tip was ${tip1}, and the total value ${total1}.`;
console.log(message)
