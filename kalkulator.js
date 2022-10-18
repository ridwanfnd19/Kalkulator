const readline = require('readline-sync');
const fs = require('fs');

let angka1 = 0;
let angka2 = 0;
let Hasil = 0;
let data = `Angka 1 \t Angka 2 \t Hasil \n`;

function input() {
    angka1 = Hasil;
    if (angka1 == 0) {
        angka1 = readline.question('Masukkan angka pertama: ');
    }
    angka2 = readline.question('Masukkan angka kedua: ');

    console.log("\n-----------------------------------------");
    console.log("Angka Pertama Anda  " + angka1 );
    console.log("Angka Kedua Anda  " + angka2 );
    console.log("-----------------------------------------");
}

function save() {
    fs.appendFile('Kalkulator.xls', data, (err) => {
        if (err) throw err;
        console.log('\nFile created');
    });
}

function operasi() {
    operator = readline.question(
        'Kalkulator' + '\n============' + '\n1. Tambah(+)' +
        '\n2. Kurang(-)' + '\n3. Kali(*)' + '\n4. Bagi(/)' + 
        '\n5. Stop' + '\n6. Exit' +
        '\nOperasi apa yang ingin Anda lakukan? '
        );

    console.log('Menu yang Anda pilih: ' + operator  + '\n');

    switch (operator) {
        case '1' :
            input();
            Hasil = Number(angka1) + Number(angka2);
            console.log('Hasil: ' + Hasil + '\n');
            return operasi();
        case '2' :
            input();
            Hasil = Number(angka1) - Number(angka2);
            console.log('Hasil: ' + Hasil + '\n');
            return operasi();
        case '3' :
            input();
            Hasil = Number() * Number(angka2);
            console.log('Hasil: ' + Hasil + '\n');
            return operasi();
        case '4' :
            input();
            Hasil = (Number(angka1) / Number(angka2)).toFixed(2);
            console.log('Hasil: ' + Hasil + '\n');
            return operasi(Hasil);
        case '5' :
            console.log('Hasil: ' + Hasil + '\n');
            data += angka1 + '\t' + angka2 + '\t' + Hasil + '\n';
            angka1 = 0;
            Hasil = 0;
            return operasi();
        case '6' :
            if (angka1 != 0) {
                data += angka1 + '\t' + angka2 + '\t' + Hasil + '\n';
            }
            console.log('Terima Kasih');
            save();
            break;
        default :
            console.log(`Pilihan salah`);
            break;
    }
}

operasi();