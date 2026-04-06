const element = document.getElementById('canvas');
element.addEventListener('click', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`A posição atual do cursor do mouse é: (${x}, ${y})`);
});