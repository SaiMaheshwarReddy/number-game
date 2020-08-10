const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const container4 = document.querySelector('.container4')
const container5 = document.querySelector('.container5')
const container6 = document.querySelector('.container6')
const container7 = document.querySelector('.container7')
const input = document.querySelector('.input')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')




btn1.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter a number')

    } else if (input.value === '0') {
        alert('Invalid input')
    } else if (input.value < 0) {
        alert('Invalid input')
    } else {
        container1.classList.add('hide')
        container2.classList.remove('hide')
    }
})
btn2.addEventListener('click', () => {
    container2.classList.add('hide')
    container3.classList.remove('hide')
})

btn3.addEventListener('click', () => {
    container3.classList.add('hide')
    container4.classList.remove('hide')
})
btn4.addEventListener('click', () => {
    container4.classList.add('hide')
    container5.classList.remove('hide')
})
btn5.addEventListener('click', () => {
    container5.classList.add('hide')
    container6.classList.remove('hide')
})
btn6.addEventListener('click', () => {
    container6.classList.add('hide')
    container7.classList.remove('hide')
})