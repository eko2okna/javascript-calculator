//liczba dziesietna
document.querySelector("#dec").addEventListener("input", function(event) {
    let input = event.target;
    let decValue = input.value;

    if (!/^[0-9]*$/.test(decValue)) {
        input.style.backgroundColor = "#ffcccc";
        input.value = decValue.replace(/[^0-9]/g, "");

        setTimeout(() => {
            input.style.backgroundColor = "";
        }, 250);
    }

    if (input.value !== "") {
        let num = parseInt(input.value, 10);

        document.querySelector("#oct").value = num.toString(8);
        document.querySelector("#hex").value = num.toString(16).toUpperCase();
        document.querySelector("#bin").value = num.toString(2);
    } else {
        document.querySelector("#oct").value = "";
        document.querySelector("#hex").value = "";
        document.querySelector("#bin").value = "";
    }
});
//liczba osemkowa
document.querySelector("#oct").addEventListener("input", function(event) {
    let input = event.target;
    let octValue = input.value;

    if (!/^[0-7]*$/.test(octValue)) {
        input.style.backgroundColor = "#ffcccc";
        input.value = octValue.replace(/[^0-7]/g, "");

        setTimeout(() => {
            input.style.backgroundColor = "";
        }, 250);
    }

    if (input.value !== "") {
        let num = parseInt(input.value, 8);

        document.querySelector("#dec").value = num.toString(10);
        document.querySelector("#hex").value = num.toString(16).toUpperCase();
        document.querySelector("#bin").value = num.toString(2);
    } else {
        document.querySelector("#dec").value = "";
        document.querySelector("#hex").value = "";
        document.querySelector("#bin").value = "";
    }
});
//liczba szesnastkowa
document.querySelector("#hex").addEventListener("input", function(event) {
    let input = event.target;
    input.value = input.value.toUpperCase();
    let hexValue = input.value;
    
    // Sprawdzanie poprawności wartości
    if (!/^[0-9A-F]*$/.test(hexValue)) {
        input.style.backgroundColor = "#ffcccc";
        input.value = hexValue.replace(/[^0-9A-F]/g, "");
        
        setTimeout(() => {
            input.style.backgroundColor = ""; 
        }, 250);
    }
    
    // Przeliczanie wartości jeśli pole nie jest puste
    if (input.value !== "") {
        let num = parseInt(input.value, 16);
        
        document.querySelector("#dec").value = num.toString(10);
        document.querySelector("#oct").value = num.toString(8);
        document.querySelector("#bin").value = num.toString(2);
    } else {
        document.querySelector("#dec").value = "";
        document.querySelector("#oct").value = "";
        document.querySelector("#bin").value = "";
    }
});
//liczba binarna
document.querySelector("#bin").addEventListener("input", function(event) {
    let input = event.target;
    let binValue = input.value;
    
    if (!/^[01]*$/.test(binValue)) {
        input.style.backgroundColor = "#ffcccc";
        input.value = binValue.replace(/[^01]/g, "");
        
        setTimeout(() => {
            input.style.backgroundColor = "";
        }, 250);
    }
    
    if (input.value !== "") {
        let num = parseInt(input.value, 2);
        
        document.querySelector("#dec").value = num.toString(10);
        document.querySelector("#oct").value = num.toString(8);
        document.querySelector("#hex").value = num.toString(16).toUpperCase();
    } else {
        document.querySelector("#dec").value = "";
        document.querySelector("#oct").value = "";
        document.querySelector("#hex").value = "";
    }
});