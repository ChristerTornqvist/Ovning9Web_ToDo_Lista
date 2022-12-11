const inputForm = document.querySelector('#inputForm');
const itemInput = document.querySelector('#itemInput');
const output = document.querySelector('#output');
const btnAddToList = document.querySelector('#btnAddToList');
const btnChangable = document.querySelector('#btnChangable');
const funcText = document.querySelector('#funcText');

let eraseValue = true;

const changeFunction = () => {
    if (eraseValue)
    {
        funcText.innerText = 'Klick ändrar överstrykning i listan';
        eraseValue = false;
    }
    else
    {
        funcText.innerText = 'Klick raderar vara från listan';
        eraseValue = true;
    }
}

btnAddToList.addEventListener('click', (e) => {
    let itemToList = itemInput.value;
    output.innerHTML += `
    <div>
        <p>Hej: ${itemToList} </p>
    </div>
    `
})

btnChangable.addEventListener('click', changeFunction);

output.addEventListener('click', (e) => {
    if (eraseValue)
    {
        console.log(e.target);
        e.target.remove();
    }
    else
    {
        console.log(e.target);
        e.target.classList.toggle('line')
    }
})