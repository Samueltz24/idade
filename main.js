let foto = document.getElementById('foto1')
let res = document.getElementById("res")

function imagem(){
  let anos = document.getElementById("anos")
  let ida = Number(anos.value)
  
  if(ida < 12){
    res.innerHTML ='voce é uma criança'
    foto.src ="img/c.png"
    res.style.background ='blue'
  }
  else if( ida < 18){
    res.innerHTML ="voce é um adolecente"
    foto.src = "img/adolecente.png"
    res.style.background ="#b3aa09"
  }
  else if(ida < 31){
    res.innerHTML = 'voce é um jovem'
    foto.src = "img/jovem.png"
    res.style.background = "#0a876a"
  }
  else if(ida < 59){
    res.innerHTML ='voce é um adulto'
    foto.src = 'img/adulto.png'
    res.style.background ='#870a0a'
  }
  else{
    res.innerHTML = "voce é um idoso"
    foto.src= 'img/idoso.png'
    res.style.background ='#870a87'
  }
 }