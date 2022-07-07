const fs = require('fs');
const readline = require('readline');
//console.log(fs);


// menuliskan string ke file .txt (syncronos)
// fs.writeFileSync('test.txt', 'hello world');

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })


// cara membaca file
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



// cara mebuat pertanyaan
rl.question('what is your name?', (name) => {
    rl.question('what is your email?', (email) => {
       rl.question('what is your Nomor Telepon?', (nomor_tlp) => {
            console.log(`Nama : ${name}`);
            console.log(`Email : ${email}`);
            console.log(`Nomor Telepon : ${nomor_tlp}`);
            rl.close();
        });
    });
});

