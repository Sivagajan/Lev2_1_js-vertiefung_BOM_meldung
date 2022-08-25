console.log('Siva')

let counter
let myInterval

let zeit = document.getElementById('count')
console.log(zeit)
let myDiv = document.getElementsByClassName('message')[0]

console.log(myDiv)

onload = () => {
    counter = 9
    myInterval = setInterval(hide,1000)
    // setinterval muss hier rein 
}

// funktion zum runterzählen und clear interval

const hide = () => {

    if(counter === 0){

        clearInterval(myInterval)
        myDiv.style.opacity = '0'
        zeit.innerHTML = counter
        
    }else if(counter <= 9){
        zeit.innerHTML = '0'+counter
        console.log(counter)
        counter -=1
    }
}