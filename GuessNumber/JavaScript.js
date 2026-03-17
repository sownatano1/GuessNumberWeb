let randoness = parseInt(Math.random() * 100 + 1 )
let correctNumber = randoness

function Input()
{
    let inputNum = document.getElementById("numberInput")
    let number = inputNum.value

    console.log("O numero é: " + correctNumber)
    console.log(number)
    
    if (number == correctNumber)
    {
        document.getElementById("hint").textContent = "Acertou!"
        document.getElementById("image").src = "WinPNG.png"
        setTimeout(() => 
        {
            Reset()
        }, 2000);
    }

    else if (number > number + 10 || number < number - 10)
    {
        console.log("Numero esta proximo")
    }

    else if (number == 0)
    {   
        document.getElementById("hint").textContent = " "
    }

    else if (number > correctNumber)
    {
        document.getElementById("hint").textContent = "O numero é menor!"
    }

    else if (number < correctNumber)
    {
        document.getElementById("hint").textContent = "O numero é maior!"
    }
}

function Reset()
{
    document.getElementById("hint").textContent = " "
    document.getElementById("image").src = " "
    randoness = parseInt(Math.random() * 100 + 1 )
    correctNumber = randoness;
}