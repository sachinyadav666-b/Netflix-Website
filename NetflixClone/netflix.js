const bx = document.querySelectorAll(".bx")
const ans = document.querySelectorAll(".ans")
const input = document.querySelector('#input')
const icon = document.querySelector('.icon')
const i1 = document.querySelectorAll(".icon i")
const xicon = document.querySelectorAll('.bx svg')
let turn = 0

hides = ['hide1','hide2','hide3','hide4','hide5','hide6']

for(let i = 0; i < bx.length;i++){
    console.log();
    bx[i].addEventListener("click", () =>{
        ans[i].classList.toggle(hides[i])
    })
}

// icon.addEventListener('click', () => {
//     if(turn==0){
//         i1[0].classList.add("hide")
//         i1[1].classList.remove("hide")
//         input.type = "text";
//         turn = 1
//     }
//     else {
//         i1[0].classList.remove("hide")
//         i1[1].classList.add("hide")
//         input.type = "password";
//         turn = 0
//     }
// })

bx.forEach((bx,idx) => {
    bx.addEventListener('click', () => {
        xicon[idx].classList.toggle("x-icon")
    })
})

