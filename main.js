let foto = document.getElementById('foto1')
let res = document.getElementById("res")
let dados = document.getElementsByName("masculino")


function ima(){
  let anos = document.getElementById("anos")
  let ida = Number(anos.value)
  
  if(dados[0].checked){
    if(ida < 12){
      res.innerHTML = ` voce é um menino de ${ida}` 
      foto.src ="img/c.png"
      res.style.background ='#2A3C24'
    }
    else if( ida < 18){
      res.innerHTML =` voce é um adolecente de ${ida}` 
      foto.src = "img/adolecente.png"
      res.style.background ="#b3aa09"
    }
    else if(ida < 31){
      res.innerHTML = ` voce é um jovem de ${ida}` 
      foto.src = "img/jovem.png"
      res.style.background = "#0a876a"
    }
    else if(ida < 59){
      res.innerHTML =` voce é um adulto de ${ida}` 
      foto.src = 'img/adulto.png'
      res.style.background ='#870a0a'
    }
    else if(ida < 121){
      res.innerHTML = ` voce é um idoso de ${ida}` 
      foto.src= 'img/idoso.png'
      res.style.background ='#870a87'
    }
    else{
      foto.src ='img/boneco.png'
      res.innerHTML = `parabéns voce tem ${ida} anos sabe menti bem 😂🤣`
      res.style.background = 'blue'
    }
  }
  else if(dados[1].checked){
    if(ida < 12){
      res.innerHTML =` voce é uma menina de ${ida}`
      foto.src ="imgf/menina.png"
      res.style.background ='blue'
    }
    else if( ida < 18){
      res.innerHTML =`voce é uma adolecente de ${ida}`
      foto.src = "imgf/adolecentem.png"
      res.style.background ="#b3aa09"
    }
    else if(ida < 31){
      res.innerHTML = `voce é uma jovem de ${ida}`
      foto.src = "imgf/jovemf.png"
      res.style.background = "#0a876a"
    }
    else if(ida < 59){
      res.innerHTML =`voce é uma adulta ${ida}`
      foto.src = 'imgf/adulta.png'
      res.style.background ='#870a0a'
    }
    else if(ida < 121){
      res.innerHTML = ` voce é um idosa de ${ida}` 
      foto.src= 'imgf/idosa.png'
      res.style.background ='#870a87'
    }
    else{
      foto.src ='img/boneco.png'
      res.innerHTML = `parabéns voce tem ${ida} anos sabe menti bem 😂🤣`
      res.style.background = 'blue'
    }
  }
  
 }
