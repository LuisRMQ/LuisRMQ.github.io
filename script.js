const pantalla1 = document.getElementById("pantalla1")
const pantalla2 = document.getElementById("pantalla2")
const pantalla3 = document.getElementById("pantalla3")

const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")

const botonContinuar = document.getElementById("continuar")
const musica = document.getElementById("musica")

document.body.addEventListener("click", ()=>{

musica.play()

},{ once: true })

function escribirTexto(elemento, texto, velocidad, callback){

let i = 0

function escribir(){

if(i < texto.length){

elemento.innerHTML += texto.charAt(i)
i++

setTimeout(escribir, velocidad)

}else{

if(callback) callback()

}

}

escribir()

}


escribirTexto(texto1,"🎉 Adivina quién cumple años hoy? 🎉",50,()=>{

setTimeout(()=>{

escribirTexto(texto2,"Su nombre empieza con Yazmin y termina en TU!!!",50,()=>{

botonContinuar.classList.remove("oculto")

})

},500)

})


botonContinuar.onclick = ()=>{

pantalla1.classList.remove("activa")
pantalla2.classList.add("activa")

}

document.getElementById("regalo").onclick = ()=>{

pantalla2.classList.remove("activa")
pantalla3.classList.add("activa")

iniciarFuegos()

}


const canvas = document.getElementById("fireworks")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let fireworks = []

function crearFuego(){

let x = Math.random()*canvas.width
let y = Math.random()*canvas.height/2

for(let i=0;i<50;i++){

fireworks.push({

x:x,
y:y,
dx:(Math.random()-0.5)*6,
dy:(Math.random()-0.5)*6,
life:100

})

}

}

let numeros = []

function crearNumero(){

let x = Math.random()*canvas.width
let y = Math.random()*canvas.height

numeros.push({
  x:x,
  y:y,
  dx:(Math.random()-0.5)*3,
  dy:(Math.random()-0.5)*3,
  life:150,
  size: Math.random()*40 + 40 
})

}


function iniciarFuegos(){

setInterval(crearFuego,800)
setInterval(crearNumero,600)
animar()

}




function animar(){
    numeros.forEach((n,i)=>{

n.x += n.dx
n.y += n.dy
n.life--

ctx.font = n.size + "px Arial"
ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`
ctx.fillText("29", n.x, n.y)

if(n.life <= 0){
numeros.splice(i,1)
}

})

requestAnimationFrame(animar)

ctx.fillStyle="rgba(0,0,0,0.2)"
ctx.fillRect(0,0,canvas.width,canvas.height)

fireworks.forEach((p,i)=>{

p.x+=p.dx
p.y+=p.dy
p.life--

ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`
ctx.beginPath()
ctx.arc(p.x,p.y,3,0,Math.PI*2)
ctx.fill()

if(p.life<=0){

fireworks.splice(i,1)

}

})

}
