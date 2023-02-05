const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = console.log(window.innerHeight / 5 * 4);
}

boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect();

    if(boxTop < triggerBottom) {
        box.classList.add('show')
    }
    else{
        box.classList.remove('show')
    }
})