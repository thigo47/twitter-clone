let botao = document.getElementById("botao")
let container = document.getElementById("conteiner")
let cabeça = document.getElementById("cabeça")
let tweetescrito = document.getElementById("tweetescrito")
let containertweet = document.getElementById("containertweet")
let likes = document.getElementById("likes")
let alike = []

botao.addEventListener("click" , function(){
   
    if (tweetescrito.value.length == 0) {
        window.alert("escreva primeiro")
    } else {
          

           let filhott = document.createElement("div")
           filhott.id = "filhott"

           containertweet.appendChild(filhott)

            filhott.innerHTML = tweetescrito.value

            filhott.append(likes)
    }

})

let tema = document.getElementById("tema")

tema.addEventListener("click", function () {

    if (document.body.style.backgroundColor =="rgb(21, 21, 21)") {

        document.body.style.backgroundColor="white"
        cabeça.style.backgroundColor="#023E8A"
        
        
    } else {
        document.body.style.backgroundColor="rgb(21, 21, 21)"
        cabeça.style.backgroundColor="#03045E"
    }
   
})

containertweet.addEventListener("click", function(){
    for (let c in alike) {
        alike.push[1]
    likes.innerHTML = "likes" + alike[c]
    }
})