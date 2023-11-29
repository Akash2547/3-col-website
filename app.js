const celciusInput = document.getElementById("c");
const fahrenheitInput = document.getElementById("f");
const kelvinInput = document.getElementById("k");
const inputs = document.getElementsByClassName("t");


for(let i=0; i<inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);

        switch(e.target.name) {
            case "c":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "f":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "k":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}
