let randoness = parseInt(Math.random() * 100 + 1 )
let correctNumber = randoness
let triesNumber = 6
const tries = document.getElementById("tries")

const paragraph = document.createElement("p")
paragraph.classList.add("hint")
const image = document.createElement("img")
image.classList.add("winPNG")
const container = document.getElementById("container")

let confirm = document.getElementById("confirm")

function Input()
{
    let inputNum = document.getElementById("numberInput")
    let number = inputNum.value

    console.log("O numero é: " + correctNumber)
    console.log(number)
    
    triesNumber = triesNumber - 1
    tries.textContent = triesNumber

    if (triesNumber <= 0)
    {
        confirm.disabled = true;
        document.g
        tries.textContent = 0;
        paragraph.textContent = "Perdeu!";
        container.appendChild(paragraph)
        image.src = "sad-emotional.gif"
        container.appendChild(image)
        setTimeout(() =>
        {
            Reset()
        }, 2000);   
    }

    if (triesNumber > 0)
    {
        if (number == correctNumber)
        {
            confirm.disabled = true;
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
}

function Reset()
{
    confirm.disabled = false;
    triesNumber = 6;
    randoness = parseInt(Math.random() * 100 + 1 )
    correctNumber = randoness;
    paragraph.remove()
    image.remove()
    tries.textContent = 6
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