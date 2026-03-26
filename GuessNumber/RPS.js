let enemy = document.getElementById("enemy")
let start = document.getElementById("startRPS")

let rock = document.getElementById("RockBtn")
let paper = document.getElementById("PaperBtn")
let scissor = document.getElementById("ScissorBtn")

function GetRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StartGame()
{
    if (start)
    {
        start.disabled = true;
    }

    GetRandomInt(1,3)

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
}