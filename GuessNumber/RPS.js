let enemy = document.getElementById("enemy")
let start = document.getElementById("startRPS")

let rock = document.getElementById("RockBtn")
let paper = document.getElementById("PaperBtn")
let scissor = document.getElementById("ScissorBtn")

const hint = document.createElement("h3")
hint.classList.add("RPShint")
let result = document.getElementById("result")

paper.disabled = true
rock.disabled = true
scissor.disabled = true

let randomNumber

let rockSelected = false
let paperSelected = false
let scissorSelected = false

let startButton = document.getElementById("startRPS")

function GetRandomInt(min, max)
{
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}

function StartGame()
{
    GetRandomInt(1,3) 

    if (start)
    {
        start.disabled = true;
    }

    paper.disabled = false
    rock.disabled = false
    scissor.disabled = false

    enemy.src = "3.png"
    
    setTimeout(() =>
    {
        enemy.src = "2.png"
    }, 1000);

    setTimeout(() =>
    {
        enemy.src = "1.png"
    }, 2000);

    setTimeout(() =>
    {
        enemy.src = "0.png"
    }, 3000);

    setTimeout(() =>
    {
        EnemyChoosing()
    }, 3600);

    setTimeout(() =>
    {
        Decisao()
    }, 3700);
}

function PaperPress()
{
    rock.disabled = true
    scissor.disabled = true
    paperSelected = true
}

function RockPress()
{
    paper.disabled = true
    scissor.disabled = true
    rockSelected = true
}

function ScissorPress()
{
    paper.disabled = true
    rock.disabled = true
    scissorSelected = true
}

function EnemyChoosing()
{
    if (randomNumber == 1)
    {
        enemy.src = "Rock.png"
    }

    if (randomNumber == 2)
    {
        enemy.src = "Papper.jpg"
    }

    if (randomNumber == 3)
    {
        enemy.src = "Scissor.jpg"
    }
}

function Decisao()
{
    if (paperSelected && randomNumber == 1)
    {
        Acertar()
    }

    else if (scissorSelected && randomNumber == 2)
    {
        Acertar()
    }

    else if (rockSelected && randomNumber == 3)
    {
        Acertar()
    }

    else if (rockSelected && randomNumber == 1)
    {
        Empate()
    }

    else if (paperSelected && randomNumber == 2)
    {
        Empate()
    }

    else if (scissorSelected && randomNumber == 3)
    {
        Empate()
    }

    else
    {
        Errou()
    }
}

function Acertar()
{
    result.appendChild(hint)
    hint.textContent = "Ganhou!"
    setTimeout(() => 
    {
        Reset()
    }, 4000);
}

function Errou()
{
    result.appendChild(hint)
    hint.textContent = "Perdeu!"
    setTimeout(() => 
    {
        Reset()
    }, 4000);
}

function Empate()
{
    result.appendChild(hint)
    hint.textContent = "Empate!"
    setTimeout(() => 
    {
        Reset()
    }, 4000);
}

function Reset()
{
    rockSelected = false
    paperSelected = false
    scissorSelected = false

    rock.disabled = false
    paper.disabled = false
    scissor.disabled = false

    enemy.src = "Int.png"
    hint.textContent = ""
    hint.remove()
    startButton.disabled = false
}