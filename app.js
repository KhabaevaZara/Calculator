const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// Выбор операции
plusBtn.onclick = function() {
    action = '+'
   console.log('+')
}

minusBtn.onclick = function() {
    action = '-'
    console.log('-')
}

// Вычисление
submitBtn.onclick = function() {
    if(input1.value === '' || input2.value === '') {
        resultElement.textContent = 'Введите оба числа!'
        resultElement.classList.add('error')
        resultElement.classList.add('result-pulse')
        setTimeout(() => resultElement.classList.remove('result-pulse'), 500)
        return
    }
    
    const num1 = parseFloat(input1.value)
    const num2 = parseFloat(input2.value)
    
    if(isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Ошибка: введите числа'
        resultElement.classList.add('error')
        resultElement.classList.add('result-pulse')
        setTimeout(() => resultElement.classList.remove('result-pulse'), 500)
        return
    }
    
    let result
    if(action === '+') {
        result = num1 + num2
    } else {
        result = num1 - num2
    }
    
    resultElement.textContent = result
    resultElement.classList.remove('error')
    resultElement.classList.add('result-pulse')
    setTimeout(() => resultElement.classList.remove('result-pulse'), 500)
    
    // Анимация контейнера
    document.querySelector('.container').style.transform = 'translateY(-5px)'
    setTimeout(() => {
        document.querySelector('.container').style.transform = 'translateY(0)'
    }, 300)
}

// Инициализация при загрузке
window.onload = function() {
    plusBtn.classList.add('active')
}



 let num = 'dick'

 console.dir(num)