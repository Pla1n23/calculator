const one = document.querySelector('.first_summand')
const two = document.querySelector('.second_summand')

const action = document.querySelectorAll('a')
const output = document.querySelector('.output')

let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function fromArabicToRoman(a){
  let result = '';
  let num = Number(a)
  arabic.map( (item, index) => {
    while (item <= num){
      result += roman[index]
      num -= item
    }
  });
  return result
}

function fromRomanToArabic(r){
  let num = r.split("").reverse().join("")
  let i = 0
  let result = 0
  while (i <= num.length - 1){
    let j = i + 1
    while (arabic[roman.indexOf(num[i])] > arabic[roman.indexOf(num[j])] && j <= num.length){ 
      result -= arabic[roman.indexOf(num[j])]
      j += 1
    }
  result += arabic[roman.indexOf(num[i])]
  i = j
  }
  return result
}

const sum = (a, b) => {
  return a + b
}

const subtraction = (a, b) => {
  return a - b
}

const multiplication = (a, b) => {
  return a * b
}

const division = (a, b) => {
  if (b !== 0) {
    return a / b
  }
  else {
    return 'Невозможно делить на 0'
  }
}

const percent = (a, b) => {
  return (a * b) / 100
}


const pow = (a, b) => {
    return a ** b
}

const acButton = document.querySelector('button')

const clear = event => {

  if (event.target === acButton){
    one.value = '';
    two.value    = '';
    output.textContent = '';
  }
}

acButton.addEventListener('click', clear)

const actionBtn = event => {
  const target = event.target;

  let numberOne = one.value
  let numberTwo = two.value

  let isArabic
  let result 

  if (!Number(numberOne) && !Number(numberTwo)){
    numberOne = fromRomanToArabic(numberOne.toUpperCase())
    numberTwo = fromRomanToArabic(numberTwo.toUpperCase())
    isArabic = false
  }
  else{
    numberOne = Number(numberOne)
    numberTwo = Number(numberTwo)
    isArabic = true
  }
  console.log(numberOne)
  console.log(numberTwo)
  if (!one.value || !two.value){
    output.textContent = 'Вы внесли не все данные'
  }
  else if (!numberOne || !numberTwo){
    output.textContent = 'Вы внесли неправильные значения'
  }
  else{
    if (target.classList.contains("plus")){
      result = sum(numberOne, numberTwo)
      output.textContent = isArabic ? result : fromArabicToRoman(result)
    }

    if (target.classList.contains("minus")){
      result = subtraction(numberOne, numberTwo)
      output.textContent = isArabic ? result : fromArabicToRoman(result)
    }

    if (target.classList.contains("percent")){
      result = percent(numberOne, numberTwo)
      output.textContent = isArabic ? result : fromArabicToRoman(result)
    }

    if (target.classList.contains("multi")){
      result = multiplication(numberOne, numberTwo)
      output.textContent = isArabic ? result : fromArabicToRoman(result)
    }

    if (target.classList.contains("division")){
      result = division(numberOne, numberTwo)
      output.textContent = isArabic ? result : fromArabicToRoman(result)
    }

    if (target.classList.contains("power")){
      result = pow(numberOne, numberTwo)
      output.textContent = isArabic ? result : fromArabicToRoman(result)
    }  
  }
}

action.forEach( element => {
  element.addEventListener('click', actionBtn)
})
