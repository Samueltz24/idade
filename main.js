let foto = document.getElementById('foto1')
let res = document.getElementById("res")
let dados = document.getElementsByName("masculino")


function ima(){
  let anos = document.getElementById("anos")
  let ida = Number(anos.value)
  
  if(dados[0].checked){
    if(ida < 12){
      res.innerHTML ='voce é um menino'
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
  else if(dados[1].checked){
    if(ida < 12){
      res.innerHTML ='voce é uma criança'
      foto.src ="imgf/menina.png"
      res.style.background ='blue'
    }
    else if( ida < 18){
      res.innerHTML ="voce é uma adolecente"
      foto.src = "imgf/adolecentem.png"
      res.style.background ="#b3aa09"
    }
    else if(ida < 31){
      res.innerHTML = 'voce é uma jovem'
      foto.src = "imgf/jovemf.png"
      res.style.background = "#0a876a"
    }
    else if(ida < 59){
      res.innerHTML ='voce é uma adulta'
      foto.src = 'imgf/adulta.png'
      res.style.background ='#870a0a'
    }
    else{
      res.innerHTML = "voce é uma idosa"
      foto.src= 'imgf/idosa.png'
      res.style.background ='#870a87'
    }
  }
  
 }
