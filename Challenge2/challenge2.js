


const markBmi = 78 / (1.69 * 1.69)
const johnBmi = 92 / (1.95 * 1.95)

const markHigherBmi = markBmi > johnBmi ? true : false;
const message = markHigherBmi ? "mark has hgher BMI" : " john has highe BMI"
console.log(message)