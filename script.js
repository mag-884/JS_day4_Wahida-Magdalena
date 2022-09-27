const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const age = document.querySelector('.age');
const btn = document.querySelector('.submit');
let inputsArea = document.querySelector('.inputs-area');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let valueFirstName = firstName.value;
    let valueLastName = lastName.value;
    let valueAge = age.value;


    inputsArea.innerHTML = `<div>${valueFirstName}</div>
<div>${valueLastName}</div>
<div>${valueAge}</div>`;
    if (valueFirstName.length > 5) {
        inputsArea.style.color = "green";
    } else {
        inputsArea.style.color = "red";
    }
})
