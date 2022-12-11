const itemInput = document.querySelector('#itemInput');
const nrInList = document.querySelector('#nrInList');
const output = document.querySelector('#output');
const btnAddToList = document.querySelector('#btnAddToList');
const btnChangable = document.querySelector('#btnChangable');
const alertText = document.querySelector('#alertText');
const funcText = document.querySelector('#funcText');

let nrOfListedItems = 0;

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
    <p>Hej: ${itemToList} </p>
    `;
    nrOfListedItems++;
    nrInList.innerHTML = `${nrOfListedItems} listade varor`;
})

btnChangable.addEventListener('click', changeFunction);

output.addEventListener('click', (e) => {
    if (e.target != output)
    {
        if (eraseValue)
        {
            console.log(e.target);
            e.target.remove();
            alertText.innerText = '-';
            funcText.innerText = 'Klick raderar vara från listan';
            nrOfListedItems--;
        }
        else
        {
            console.log(e.target);
            e.target.classList.toggle('line')
            alertText.innerText = '-';
            funcText.innerText = 'Klick ändrar överstrykning i listan';
        }
    }
    else
    {
        alertText.innerText = 'Klicka inte mellan varorna!';
    }
})