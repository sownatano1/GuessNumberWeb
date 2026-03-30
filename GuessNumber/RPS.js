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

    enemy.src = "3.png"
    
    const timer = setTimeout(() =>
    {
        enemy.src = "2.png"
    }, 1000);

    const timer1 = setTimeout(() =>
    {
        enemy.src = "1.png"
    }, 2000);

    const timer2 = setTimeout(() =>
    {
        enemy.src = "0.png"
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
        enemy.scr = "Rock.png"
    }
    if (randomNumber == 2)
    {
        enemy.scr = "Papper.jpeg"
    }
    if (randomNumber == 3)
    {
        enemy.scr = "Scissor.jpeg"
    }
}