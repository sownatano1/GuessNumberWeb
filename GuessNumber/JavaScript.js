let randoness = parseInt(Math.random() * 100 + 1 )
let correctNumber = randoness

const paragraph = document.createElement("p")
paragraph.classList.add("hint")
const image = document.createElement("img")
image.classList.add("winPNG")
const container = document.getElementById("container")

function Input()
{
    let inputNum = document.getElementById("numberInput")
    let number = inputNum.value

    console.log("O numero é: " + correctNumber)
    console.log(number)
    
    if (number == correctNumber)
    {
        paragraph.textContent = "Acertou!";
        container.appendChild(paragraph)
        RandomImage()
        setTimeout(() => 
        {
            Reset()
        }, 2000);
    }

    else if (correctNumber - 3 < number && number < correctNumber + 3)
    {
        paragraph.textContent = "O número está próximo";
        container.appendChild(paragraph)
    }

    else if (number == 0)
    {   
        paragraph.remove()
    }

    else if (number > correctNumber)
    {
        paragraph.textContent = "O número é menor";
        container.appendChild(paragraph)
    }

    else if (number < correctNumber)
    {
        paragraph.textContent = "O número é maior";
        container.appendChild(paragraph)
    }
}

function Reset()
{
    paragraph.remove()
    image.remove()
    randoness = parseInt(Math.random() * 100 + 1 )
    correctNumber = randoness;
}

function RandomImage()
{
    let randomImg = parseInt(Math.random() * 8)

    if (randomImg <= 2)
    {
        image.src = "cat-meme.gif"
    }

    else if (randomImg <= 5)
    {
        image.src = "HappyCat.gif"
    }

    else if (randomImg <= 8)
    {
        image.src = "froggy.gif"
    }

    container.appendChild(image)
}