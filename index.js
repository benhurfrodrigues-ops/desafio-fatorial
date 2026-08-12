const n = Number(prompt("Digite o número:"));

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

alert(fatorial(n));
