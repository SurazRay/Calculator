// Creating a main div element in centre that will have all the buttons

let calculatorBody = document.createElement("main");

// Appending the main div into the body body element

document.body.append(calculatorBody);
// calculatorBody.innerText = "Suraj";

// Styling the main div

calculatorBody.style.height = "400px";
calculatorBody.style.width = "300px";
calculatorBody.style.backgroundColor = "#323232";
calculatorBody.style.color = "orangered";
calculatorBody.style.display = "grid";
calculatorBody.style.placeItems = "center";
calculatorBody.style.gridTemplateColumns = "repeat(4,25%)";
calculatorBody.style.padding = "0.5rem";
//Shadow on main box
calculatorBody.style.boxShadow = "4px 4px 30px blue,-4px -4px 30px blue";

// Placing the main div in the centre

calculatorBody.style.position = "absolute";
calculatorBody.style.top = "50%";
calculatorBody.style.left = "50%";
calculatorBody.style.transform = "translate(-50%,-50%)";

// Adding input cum Output screen to the main div

let inOut = document.createElement("input");
calculatorBody.append(inOut);
inOut.style.width = "250px";
inOut.style.height = "70px";
inOut.style.justifySelf = "center";
inOut.style.margin = "1rem";
inOut.style.gridColumnStart = "1";
inOut.style.gridColumnEnd = "5";
inOut.style.color = "black";

//Style for buttons  -- 1

let style = ((button) => {
    button.style.color = "orangered";
    button.style.width = "3rem";
    button.style.height = "2rem";
    button.style.backgroundColor = "black";
    //Buttons Border Color
    button.style.borderColor = "blue";
    button.style.fontSize = "1rem";
});

// Adding number buttons

for (let i = 13; i >= 0; i--) {
    let newButton = document.createElement("button");
    newButton.innerText = i;
    newButton.className = `button${i}`;
    calculatorBody.append(newButton);
    style(newButton);   // 1
    newButton.style.color = "white";

    // Broadning the 0 button

    if (i === 0) {
        newButton.style.width = "83%";
        newButton.style.gridColumnStart = "1";
        newButton.style.gridColumnEnd = "3";
    }
}


// Adding Operators

document.querySelector(".button13").innerText = "CE"
style(document.querySelector(".button13"));  // 1

document.querySelector(".button12").innerText = "Del"
style(document.querySelector(".button12"));  // 1

document.querySelector(".button11").innerText = "%"
style(document.querySelector(".button11"));  // 1

document.querySelector(".button10").innerText = "/"
style(document.querySelector(".button10"));  // 1

let multiplyButton = document.createElement("button");
multiplyButton.innerText = "*";
document.querySelector(".button7").after(multiplyButton);
style(multiplyButton);  // 1
multiplyButton.style.fontSize = "1.5rem";

let minusButton = document.createElement("button");
minusButton.innerText = "-";
document.querySelector(".button4").after(minusButton);
style(minusButton); // 1
minusButton.style.fontSize = "1.5rem";

let plusButton = document.createElement("button");
plusButton.innerText = "+";
document.querySelector(".button1").after(plusButton);
style(plusButton); // 1
plusButton.style.fontSize = "1.5rem";

let decimalButton = document.createElement("button");
decimalButton.innerText = ".";
document.querySelector(".button0").after(decimalButton);
style(decimalButton); // 1
decimalButton.style.color = "white";
decimalButton.style.fontSize = "1.5rem";

let equalButton = document.createElement("button");
equalButton.innerText = "=";
decimalButton.after(equalButton);
style(equalButton); // 1
equalButton.style.fontSize = "1.5rem";

// Calculation

let output = "";

//Create an array that has all buttons in it and add an eventListener on each of them that returns their value. so, I know the pressed button and o/p that no./value.

let buttons = document.querySelectorAll("button");

buttons.forEach(element => {
    element.addEventListener("click", (evt) => {

        // Operators doing their work

        //Clear Entry
        if (evt.target.innerText === "CE") {
            output = "";
        }
        //Equal to
        else if (evt.target.innerText === "=") {
            output = eval(output);
        }
        //Delete
        else if (evt.target.innerText === "Del") {
            output = output.replace(output.charAt(output.length - 1), "");
        }
        //Percentage
        else if (evt.target.innerText === "%") {
            output = output / 100;
        }
        //Show inputed number
        else {
            output = output + evt.target.innerText;
        }

        //Outputing the value into the output box

        inOut.value = output;

        //Size of output font

        if (inOut.value.length > 14) {
            inOut.style.fontSize = "1rem";
        }
        else if (inOut.value.length > 9) {
            inOut.style.fontSize = "2rem";
        }
        else {
            inOut.style.fontSize = "3rem";
        }
    });
});
