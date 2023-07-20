const pick = document.querySelector('#pick')
const boxChange = document.querySelector("#box-change")
const box = document.querySelector('#box')
const p = document.querySelector('#p')
let letters;

function event(){
    boxChange.style.borderRadius = pick.value
    boxChange.style.background = pick.value
    boxChange.style.transform = `rotateZ(${pick.value})`
    let letters = pick.value
}

function wait(){
    return new Promise((resolve) => {
        pick.addEventListener('input', () => {
            event(),
            resolve()
        })
    })
}

async function back(){
    await wait()
    p.classList.remove('show')
    p.classList.add('transition')
    box.classList.add('transition-box')  
}

back()
