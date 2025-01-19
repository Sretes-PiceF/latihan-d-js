//Disclaimer ini saya belajar dasar tentang DOM (Data Object Model) di javascript. Yang saya pelajari di commit hari ini adalah 1. Data selector, 2. Styling selector, 3. Querry Selector
// 4. ById and ByClassname, 5. Event props, 6. Event trigger, 7. Evenet Combination, 8. Mouse Event, 9. Event Combination 2 


document.title = 'fajar'
const body = document.body
// Temukan perbedaan antara 3 function js ini:
// Ini sekedar Materi dan Praktek sederhana
const h1 = document.createElement('h1')
h1.textContent = '<marquee>halo bro</marquee>'

body.append(h1)


let namaIm = document.createElement('b')
namaIm.innerText = '<marquee>selamat datang</marquee>'

body.append(namaIm)

let namaYou = document.createElement('p')
namaYou.innerHTML = '<marquee>selamat sore</marquee>'

body.append(namaYou)


// Full quiz to channel Dea Afrizal CS
const button1 = document.querySelector('.id')
const button2 = document.getElementById('class')

const bawaanText = 'halo hai'
button2.textContent = bawaanText

button1.style.border = 'none'  
button1.style.color = 'blue'



function getWarna(){
    button2.style.color = 'red'
}
function gantiText(){
    // console.log(button2)
    button2.textContent = 'haa apa??'
    button2.style.color = 'grey'
    const text = document.createElement('h5')
    text.textContent = 'ini text baru'
    body.append(text)

}
function gantiText2(){
    // console.log(button2)
    button2.textContent = bawaanText
    button2.style.color = 'black'
    const text = document.createElement('h5')
    text.textContent = 'ini text baru'
    text.style.color = 'purple'
    body.append(text)

}
button2.style.border = '1px solid blue'