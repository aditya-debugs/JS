const form = document.querySelector('form');
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
//bahar declare kiya toh, har baar reload karne pe eempty values jayegi

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height=== '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight=== '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height * height)/10000)).toFixed(2);
        //result
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi<=18.6){
            const text = document.createTextNode(": Underweight")
            results.appendChild(text)
        }
        else if(bmi>=24.9){
            const text1 = document.createTextNode(": Overweight")
            results.appendChild(text1)
        }
        else{
            const text2 = document.createTextNode(": Normal Range")
            results.appendChild(text2)
        }
    }
    

    

})