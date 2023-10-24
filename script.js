let back = document.querySelectorAll('row')

// initial declarations
let i = 0;

//slider functionality
function handleChange() {
document.slide.src = back[i];
if (i < back.length - 1) {
i++;
} else {
i = 0;
}
}

// slider previous functionality

function previous() {
if (i === 0) {
i = back.length - 1;
} else {
i--;
}
document.slide.src = back[i];
}

// slider next functionality
function next() {
if(i === back.length - 1) {
i = 0;
} else {
i++;
}
document.slide.src = back[i];
}

window.onload = handleChange;