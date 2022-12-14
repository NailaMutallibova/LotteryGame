var area=document.querySelector('.area')
var div=document.querySelector('.div')
var allNumbers=[]

function sendNumber(){
    var number=Math.floor(Math.random()*100);
    if(allNumbers.indexOf(number)==-1){
        allNumbers.push(number)
        var numbers=document.createElement('div')
        $(numbers).css({
            borderRadius:'50%',
            border:'1px solid blue',
            backgroundColor:'purple',
            width:'45px',
            height:'35px',
            textAlign:'center',
            paddingTop:'10px'

        })
        numbers.innerText=number
        area.append(numbers)

    }
    else if(allNumbers.length==100){
        resetGame()

    }
    
    

}

setInterval(sendNumber,2000)
function resetGame(){
    div.style.color='red',
    div.style.fontSize='xx-large',
    div.style.textAlign='center',
    div.style.fontWeight='1000',
    div.innerText='Game Over',
    clearInterval()

}