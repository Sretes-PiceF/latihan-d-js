document.title = 'fajar saja'

//Indexs di array dimulai dari 0,1,2
//Banyak nya data di array jumlah seluruh data di mulai 1 etc
//Methode array first
const array = ['fajar', 'mufti', 'hitta', 'ayyin']
console.log(array)

//Methode array second
const arrayyou = []
arrayyou[0] = 'muspit'
arrayyou[1] = 'hittam'
arrayyou[2] = 'zuzuinah'
console.log(arrayyou)

//Methode array third
let arrayNew = new Array()
arrayNew[0] = 'pasa'
arrayNew[1] = 'gadis'
arrayNew[5] = 'pintar'
console.log(arrayNew[3])


let arrayOu = ['fajar', 'ihsan', 'malik', 'syaqil']
let nama = arrayOu.includes('fajar')

if(nama){
    let posisiNya = arrayOu.indexOf('li')
    console.log(arrayOu.length)
    // `Nama yang anda cari berada di indexs ${posisiNya}`    
} else if(nama){
    console.log(`Bisa anda lihat apakah nilai nya ${nama}`)
}

var beri = ['CIA', 'FBI', 911, 'NASA', 'BIN']
const cari = beri.indexOf('FBI')

if (cari) {
    let posisi = beri.indexOf('FBI')
    let iniIndex = posisi - 1
    let iniIndexs = posisi + 3
    let before = beri[iniIndex]
    let after = beri[iniIndexs]
    console.log(`sebelumya itu ${before}`)
    console.log(`setelahnya itu ${after}`)
    let awal = beri[0]
    console.log(`Yang datang pertama adalah ${awal}`)
    let akhir = beri[beri.length - 1]
    console.log(`Yang terakhit ${akhir}`)
    }

    
//Data yang diinputkan or nilai nya itu beda, kalau array dia tipe data nya numeric bukan string kalau gitu kita pakai {} ini untuk string atau object dari chatty    
let siapa = []

siapa['fajar'] = '🙏'
siapa['puan'] = '🎉'
console.log(siapa) 


//Main manipulasi array ori or kw50
var pinjom = ['👌', '✌', '👏', '👍'] //Data ini tidak boleh diubah 
//Var ini yang boleh diubah
var newPinjom = JSON.parse(JSON.stringify(pinjom)) //saya ada tiga cara : 1. [...pinjom], 2. pinjom.slice(), 3. Array.from(pinjom), 4. JSON.parse(JSON.stringify(pinjom))
newPinjom[0] = '🎉'

console.log({pinjom})
console.log({newPinjom})


//Belajar deklarasikan array dalam array
let main = ['🙏', 1, {
    potato : function() {
    console.log('ini adalah fungsi potato') 
},
}, ['eating', 'drink'],
]
console.log(main[2].potato)
main[2].potato()


//Mapping data dan penggabungan data (nilai isi)
var arrayMe = ['fajar', 'sulaiman', 'agus']
var arrayYou = ['jomblo', 'duda', 'poliga']

var mergeArray = arrayMe.concat(arrayYou)
mergeArray.map((value, index) => console.log(index, value))


//Simulasi back end bermain dengan API
const datas = [
    {
        name : 'fajar',
        satck : 'python',
        age : 19,
    },
    {
        name : 'sulaiman',
        satck : 'java',
        age : 20,
    },
    {
        name : 'agus',
        satck : 'javascript',
        age : 21,
    }
]

//Disini hanya untuk mengurut kan function js SORT
datas.sort((d, c) => c.age - d.age).map((values) => 
    console.log(values)
)

//Kalau ini hanya mencari or memilih sesuai simbol diberikan
//Yang ini anda bisa buat analisis dan melatih nalar logika anda 
datas.filter((x) => x.age < 20).map((values) => 
    console.log(values))