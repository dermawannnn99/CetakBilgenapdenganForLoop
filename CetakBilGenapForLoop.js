/**
 * tentukan lah bil genap dari 1 hingga 50, cetak semua bil genapnya dan jumlahkan semua bilangan genap tersebut
 */


let total = 0 //inisialisasi variabel total dengan nilai 0

for (let i = 1; i <= 50; i++) { //loop sebanyak 1 sampai 50
    if (i % 2===0) { // cek apakah i = bil genap
        console.log(i)
        total += i // tambahkan setiap nilai i ke var total
    }
}

console.log("Jumlah totalnya Adalah :", total)
