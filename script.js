const one = document.querySelector('.first_summand')
const two = document.querySelector('.second_summand')

const action = document.querySelectorAll('a')
const output = document.querySelector('.output')

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

  const numberOne = Number(one.value)
  const numberTwo = Number(two.value)

  if (!one.value || !two.value){
    output.textContent = 'Вы внесли не все данные'
  }
  else{
    if (target.classList.contains("plus")){
      output.textContent = sum(numberOne, numberTwo)
    }

    if (target.classList.contains("minus")){
      output.textContent  = subtraction(numberOne, numberTwo)
    }

    if (target.classList.contains("percent")){
      output.textContent = percent(numberOne, numberTwo)
    }

    if (target.classList.contains("multi")){
      output.textContent = multiplication(numberOne, numberTwo)
    }

    if (target.classList.contains("division")){
      output.textContent = division(numberOne, numberTwo)
    }

    if (target.classList.contains("power")){
      output.textContent = pow(numberOne, numberTwo)
    }  
  }
}

action.forEach( element => {
  element.addEventListener('click', actionBtn)
})

