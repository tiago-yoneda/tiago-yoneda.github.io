function changeBgColor(color){
    let pageBackgroundColor = document.querySelector('html');
    pageBackgroundColor.style.backgroundColor = color;
    localStorage.setItem ('backgroundColor', color);
}
function changeFontColor(color){
    let pageFontColor = document.querySelector('html');
    pageFontColor.style.color = color;
    localStorage.setItem ('fontColor', color)
}
function changeFontSize(size){
    let paragraphFontSize = document.querySelector('body');
    paragraphFontSize.style.fontSize = size;
    localStorage.setItem ('fontSize', size)
}
function changeLineSpacing(spacing){
    let paragraphSpacing = document.querySelectorAll('.paragraph');
    for (let item of paragraphSpacing) {
        item.style.lineHeight = spacing;
    }
    localStorage.setItem ('lineHeight', spacing)
}
function changeFontFamily(family){
    let pageFont = document.querySelector('html');
    pageFont.style.fontFamily = family;
    localStorage.setItem ('fontFamily', family)
}


let bgColorButtons = document.querySelectorAll('#backgroundSetup>button')
for (let item of bgColorButtons){
    item.addEventListener('click', function(event){
        changeBgColor(event.target.innerText);
    });
}
let fontColorButtons = document.querySelectorAll('#fontColorSetup>button')
for (let item of fontColorButtons){
    item.addEventListener('click', function(event){
        changeFontColor(event.target.innerText);
    });
}
let fontSizeButtons = document.querySelectorAll('#fontSizeSetup>button')
for (let item of fontSizeButtons){
    item.addEventListener('click', function(event){
        changeFontSize(event.target.innerText);
    });
}
let spacingButtons = document.querySelectorAll('#spacingSetup>button')
for (let item of spacingButtons){
    item.addEventListener('click', function(event){
        changeLineSpacing(event.target.innerText);
    });
}
let fontFamilyButtons = document.querySelectorAll('#fontSetup>button')
for (let item of fontFamilyButtons){
    item.addEventListener('click', function(event){
        changeFontFamily(event.target.innerText);
    });
}
