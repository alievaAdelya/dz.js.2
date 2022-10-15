const btnred = document.querySelector('.btnred')
const btngreen = document.querySelector('.btnyellow')
const btnyellow = document.querySelector('.btngreen')
const btnreset = document.querySelector('.btnreset')

const body = document.body

btnred.addEventListener('click', () => {
    let timer = setTimeout (() => {
        body.style.backgroundColor = "red"
        console.log("RED");
    },3000)
})
btngreen.addEventListener('click', () => {
    let timer2 = setTimeout (() => {
        body.style.backgroundColor = "yellow"
        console.log("YELLOW");
    },3000)
})
btnyellow.addEventListener('click', () => {
    let timer3 = setTimeout (() => {
        body.style.backgroundColor = "green"
        console.log("GREEN");
    },3000)
})
btnreset.addEventListener('click', () => {
    let reset = setTimeout(() => {
        body.style.backgroundColor = '#fff'
    })
})
b



