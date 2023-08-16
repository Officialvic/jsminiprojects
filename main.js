let firstName = prompt(`Please Enter your first name`)

alert(`Hello ${firstName}! It's great to have you here. \n
Welcome to GfCal, a mini Calculator for your basic operations and temp conversion. \n
Kindly click 'ok' to continue.`)

let operation = prompt(`What would like to do today? \n
1. Basic Calculator
2. Temperature Converter`)

if (operation == 1) {
    let cal = prompt(`Select your operation \n
    1. Add
    2. Subtract
    3. Multiply
    4. Divide`)
    if (cal == 1 || cal == 'add') {
        let num1 = prompt(`Enter first number`)
        let num2 = prompt(`Enter second number \n Click 'Ok' to add`);
        num1 = Number(num1);
        num2 = Number(num2)
        let sum = num1 + num2;
        alert(`Result = ${sum}`)
    } else if (cal == 2 || cal == 'subtract') {
        let num3 = prompt(`Enter first number`)
        let num4 = prompt(`Enter second number \n Click 'Ok' to Subtract`);
        num3 = Number(num3);
        num4 = Number(num4)
        let sub = num3 - num4;
        alert(`Result = ${sub}`)
    }  else if (cal == 3 || cal == 'multiply') {
        let num5 = prompt(`Enter first number`)
        let num6 = prompt(`Enter second number \n Click 'Ok' to Mulitply`);
        num5 = Number(num5);
        num6 = Number(num6)
        let mul = num5 * num6;
        alert(`Result = ${mul}`)
    }  else if (cal == 4 || cal == 'divide') {
        let num7 = prompt(`Enter first number`)
        let num8 = prompt(`Enter second number \n Click 'Ok' to Divide`);
        num7 = Number(num7);
        num8 = Number(num8);
        let div = num7 / num8;
        alert(`Result = ${div}`)
    }  else {
        alert (`Erro!!! \n Input the correct and available option.`)
    } 
} else if (operation == 2) {
        let convert = prompt(`Select your conversion option \n
        1. Celsius to Fahrenheit
        2. Celsius to Kelvin
        3. Fahrenheit to Celsius
        4. Fahrenheit to Kelvin
        5. Kelvin to Celsius        
        6. Kelvin to Fahrenheit`)
        if (convert == 1) {
            let celsius = prompt(`Enter the value you want to convert \n
            Celsius to Fahrenheit`)
            celsius = Number(celsius)
            let fahrenheit = (celsius * 9/5) + 32
            fahrenheit = Number(fahrenheit)
            alert(`The result of converting ${celsius}℃ is ${fahrenheit}F`)
        } else if (convert == 2) {
            let celsius2 = prompt(`Enter the value you want to convert \n
            Celsius to Kelvin`)
            celsius2 = Number(celsius2)
            let kelvin = celsius2 + 273.15
            kelvin = Number(kelvin)
            alert(`The result of converting ${celsius2}℃ is ${kelvin}K`)
        } else if (convert == 3) {
            let fahrenheit1 = prompt(`Enter the value you want to convert \n
            Fahrenheit to Celsius`)
            fahrenheit1 = Number(fahrenheit1)
            let celsiusf = (fahrenheit1 - 32) * 5/9
            celsiusf = Number(celsiusf)
            alert(`The result of converting ${fahrenheit1}F is ${celsiusf}℃`)
        } else if (convert == 4) {
            let fahrenheit2 = prompt(`Enter the value you want to convert \n
            Fahrenheit to Kelvin`)
            fahrenheit2 = Number(fahrenheit2)
            let kelvinf = (fahrenheit2 + 459.67) * 5/9
            kelvinf = Number(kelvinf)
            alert(`The result of converting ${fahrenheit2}F is ${kelvinf}K`)
        } else if (convert == 5) {
            let kelvinc = prompt(`Enter the value you want to convert \n
            Kelvin to Celsius`)
            kelvinc = Number(kelvinc)
            let celsiusk = kelvinc - 273.15
            celsiusk = Number(celsiusk)
            alert(`The result of converting ${kelvinc}K is ${celsiusk}℃ `)
        } else if (convert == 6) {
            let kelvinf2 = prompt(`Enter the value you want to convert \n
            Kelvin to Fahrenheit`)
            kelvinf2 = Number(kelvinf2)
            let fahrenheitk = (kelvinf2 * 9/5) - 459.67
            fahrenheitk = Number(fahrenheitk)
            alert(`The result of converting ${kelvinf2}K is ${fahrenheitk}F`)
        }
    }