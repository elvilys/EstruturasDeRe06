
const numeroArmazenado = parseInt(prompt(`digite um valor:`))

for (let i = 1; i <= numeroArmazenado; i+=2) {
    if (i % 2 !== 0) {
      document.write(`${i}`);
    }
  }