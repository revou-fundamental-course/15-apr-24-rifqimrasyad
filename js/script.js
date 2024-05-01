let isReverse = true;
const buttonConvert = document.getElementById("button-convert");
buttonConvert.addEventListener("click", convert);

const buttonReverse = document.getElementById("button-reverse");
buttonReverse.addEventListener("click", convert);

function reverse() {
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');

    if (isReverse) {
        console.log(isReverse);
        fToC.style.display = "block";
        cToF.style.display = "none";
        isReverse = false;
    } else {
        console.log(isReverse);
        cToF.style.display ="block";
        fToC.style.display ="none";
        isReverse = true; 
    }
}

function convert(evt) {
    evt.preventDefault();
    console.log("masuk");
    let inputNilai = document.getElementBy ('c-to-f-input')[0].id;
    let inputValueCelcius = document.getElementById('celcius-input').value;

    if (inputValueCelcius) {
        console.log(inputValue);
    } else if (inputNilai === "input2") {
        let fahrenheit = parseFloat(document.getElementById("input2").value);
        if (isNaN(fahrenheit)) {
            let pilih = fahrenheit + 32;
            let Celcius = pilih * 5/9;
            document.getElementById("input1").value = Celcius.toFixed(2);

            let resultText = "C = (F - 32) x 5/9\r\n= (" + fahrenheit + "-32) *5/9";
            document.getElementById("result").textContent = resultText;
        } else {
            document.getElementById("result").textContent = "Tolong isi Suhu dahulu";
        }
    }
}

function convert(e) {
    e.preventDefault();
    const inputValueCelcius = parseInt(document.getElementById('celcius-input').value);
    const inputValueFarenhit = parseInt(document.getElementById('fahrenheit-input').value);

    if (!isNaN(inputValueCelcius)) {
        let fahrenheit = (inputValueCelcius * 9/5) + 32;
        let fixed = fahrenheit.toFixed(2)
        let calculation = `${inputValueCelcius} * (9/5) + 32\r\n= ${fixed}`
        document.getElementById("fahrenheit-input").value = fixed;
        document.getElementById("calculation-input").value = calculation;
    } 
     else if (!isNaN(inputValueFarenhit)) {
        let celcius = (inputValueFarenhit + 32) * 5/9;
        let fixed = celcius.toFixed(2)
        let calculation = `C = (${inputValueFarenhit} - 32) x 5/9\r\n= (" + ${celcius} + "-32) * 5/9`
        document.getElementById("celsius-input").value = fixed;
        document.getElementById("calculation-input").value = calculation;
    }
    else {
        document.getElementById("fahrenheit-input").value = "";
        document.getElementById("celcius-input").value = "";
        document.getElementById("calculation-input").value = "";
        alert("Cek input kembali yaa!")
    }
}

function reverse(e) {
    e.preventDefault();

    reverse = !reverse

    if (reverse){
        document.getElementById("option-farenhit").style.display = "none";
        document.getElementById("option-celcius").style.display = "inline";
    } else {
        document.getElementById("option-farenhit").style.display = "inline";
        document.getElementById("option-celcius").style.display = "none";
    }
}

document.getElementById("button-convert").addEventListener('click', () => convert());
