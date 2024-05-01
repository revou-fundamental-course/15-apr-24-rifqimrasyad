let isReverse = true;

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
    console.log("masuk")
    // let inputNilai = document.getElementBy ('c-to-f-input')[0].id;
    let inputValueCelcius = document.getElementsByClassName('celcius-input').value;


    if (inputValueCelcius) {
        console.log(inputValue)
        // let Celcius = parseFloat(document.getElementById("input1").value);
        // console.log("celcius", Celcius)

        // if(!isNaN(Celcius)) {
        //     let pilih = (Celcius * 9/5);
        //     let fahrenheit = pilih + 32;
        //     document.getElementById("input2").value = fahrenheit.toFixed(2);

        //     let resultText = "Fahrenheit = (Celcius x 9/5) + 32\r\n= (" + Celcius + " x 9/5) + 32"
        //     document.getElementById("result").textContent = resultText;
        //     console.log(resultText)
        // } else {
        //     document.getElementById("result").textContent = "Tolong isi Suhu dahulu";
        // }

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

document.getElementById("button-convert").addEventListener('click', () => convert());
