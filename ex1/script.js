let num = document.querySelector(`input#fnum`)
let lista = document.querySelector(`select#flist`)
let res = document.querySelector(`div#res`)
let valores=[]

function isnumero(n){       
     /* numero >=0 e <=100  */
    if(Number(n) >= 1 &&  Number(n) <= 100){ 
        return true
    } else {
        return false
    }
}

function inlista(n, l){                
     /* caso retorne -1 false caso não verdadeira  */
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}


function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){  // <== numero igual ao na lista false / diferente do que esteja true
        valores.push(Number(num.value))
        let item= document.createElement(`option`) //criar elemento dinamicamente
        item.text = `valor ${num.value} foi adicionado.` //acrescenter string a lista
        lista.appendChild(item) //apresentar na lista o item que seria o texto acima
        res.innerHTML=``
    
    } else {
        window.alert(`valor invalido ou ja encontrado na lista!!`)
    
    }

    num.value = ``/*apagar da caixa de digitar o numero */
    num.focus()   /*apagar da caixa de digitar o numero */  

}

function finalizar(){
    //caso 0 keys cadastradas        
    if(valores.length == 0){     
        window.alert(`adicione valores antes de finalizar`)
    } else {
        //quantidade de keys cadastradas!!
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for(let pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/ tot
        res.innerHTML=``
        res.innerHTML +=`<p> ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores adicionados é igual a ${media}.</p>`
        res.innerHTML += `<p> <strong> :) Obrigado por Utilizar nosso analisador de numeros!! </strong></p>`
    }
}