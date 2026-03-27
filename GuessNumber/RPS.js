let enemy = document.getElementById("enemy")
let start = document.getElementById("startRPS")

let rock = document.getElementById("RockBtn")
let paper = document.getElementById("PaperBtn")
let scissor = document.getElementById("ScissorBtn")

paper.disabled = true
rock.disabled = true
scissor.disabled = true

let randomNumber

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

    enemy.textContent = 3
    
    const timer = setTimeout(() =>
    {
        enemy.textContent = 2
    }, 1000);

    const timer1 = setTimeout(() =>
    {
        enemy.textContent = 1
    }, 2000);

    const timer2 = setTimeout(() =>
    {
        enemy.textContent = 0
    }, 3000);

    const timer3 = setTimeout(() =>
    {
        EnemyChoosing()
    }, 3100);
}

function PaperPress()
{
    rock.disabled = true
    scissor.disabled = true
}

function RockPress()
{
    paper.disabled = true
    scissor.disabled = true
}

function ScissorPress()
{
    paper.disabled = true
    rock.disabled = true
}

function EnemyChoosing()
{
    if (randomNumber == 1)
    {
        
    }
    if (randomNumber == 2)
    {
        alert("teste2")
    }
    if (randomNumber == 3)
    {
        alert("teste3")
    }
}