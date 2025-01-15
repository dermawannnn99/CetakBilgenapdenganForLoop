let total = 0

for (let i = 1; i <= 50; i++) {
    if (i % 2===0) {
        console.log(i)
        total += i
    }
}

console.log("Jumlah totalnya Adalah :", total)