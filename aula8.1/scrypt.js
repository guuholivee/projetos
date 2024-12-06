function verificar(){
    var data =new Date()
    var ano =data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res =document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO!!!] VERIFIQUE OS DADOS E TENTE NOVAMENTE!`)
    } else{
        var fsex =document.getElementsByName(`sex`)
        var idade = ano - Number(fano.value)
        var genero=``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked){
            genero= `Homen`
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute(`src`,`criança-H.jpg`)
            } else if (idade < 21){
                //jovem
                img.setAttribute(`src`,`jovem-H.jpg`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`,`adulto-H.jpg`)
            }else{
                //idoso
                img.setAttribute(`src`,`idoso-H.jpg`)
            }
        } else if (fsex[1].checked){
            genero=`Mulher`
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute(`src`,`criança-M.jpg`)
            } else if (idade < 21){
                //jovem
                img.setAttribute(`src`,`jovem.M.jpg`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`,`adulto-M.jpg`)
            }else{
                //idoso
                img.setAttribute(`src`,`idosa-M.jpg`)
            }
        }
        res.style.textalign =`center`
        res.innerHTML=`detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }

}