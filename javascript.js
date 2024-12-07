console.log("Javascript is initializing!...")

let boxes = document.querySelector(".container").children
let containers = document.getElementsByClassName("container")

// console.log(boxes)

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(containers).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.borderColor = getRandomColor();
})

setInterval(() => {
    Array.from(containers).forEach((e) => {
        e.style.backgroundColor = getRandomColor();
        e.style.borderColor = getRandomColor();
    })
}, 3000)

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
    e.style.borderColor = getRandomColor();
})

setInterval(() => {
    Array.from(boxes).forEach((e) => {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
        e.style.borderColor = getRandomColor();
    });
}, 1000);