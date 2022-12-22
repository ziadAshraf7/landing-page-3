




    console.log(window.pageYOffset)
    window.addEventListener("scroll" , function(){
        if(window.pageYOffset >= 500){
            document.querySelector(".section2").classList.add("animation")
        }

       if(window.pageYOffset >= 1454){
        document.querySelector(".section3").classList.add("animation")
       }
    })

// responsive navbar

let btn = document.querySelector(".navbar-btn")
let nav = document.querySelector(".resbonsive-navbar")

btn.addEventListener("click" , function(){
    nav.classList.toggle("change")
    this.classList.toggle("change")
})


let navitems = document.querySelectorAll(".section1 .section1-wrapper .navbar nav ul a li")
let responnavitems = document.querySelector(".resbonsive-navbar nav ul")

function navbar(){
    for(let item of navitems){
        responnavitems.insertAdjacentHTML("beforeend" , `<a href=#${item.innerHTML}><li>${item.innerHTML}</li> </a>`)
    }
}

navbar()

// end 

// block management

let buttonwrap = document.querySelector(".section4 .section4-wrapper .buttons-wrapper")

let images = Array.from(document.querySelectorAll(".section4 .section4-wrapper .blocks-wrapper .img"))

let blockswrapper = document.querySelector(".section4 .section4-wrapper .blocks-wrapper")


    function active(){
        for(let img of images){
            img.classList.remove("disable")
        }
    }

    window.onload = function(){
        buttonwrap.querySelector(".all").addEventListener("click" , active())
        
    }

    buttonwrap.querySelector(".all").addEventListener("click" , function(){
        return active()
    })


   buttonwrap.addEventListener("click" , function(e){
    if(!e.target.classList.contains("all")){
        blockswrapper.style.gridTemplateRows = "repeat(1,1fr)"
    }

    buttonwrap.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")


     if(e.target.classList.contains("website")){
         images.forEach((item) =>{
             if(!item.classList.contains("website")){
                 item.classList.add("disable")
             }
             if(item.classList.contains("website")){
                item.classList.remove("disable")
            }
         })
     }   

     if(e.target.classList.contains("web-design")){
        images.forEach((item) =>{
            if(!item.classList.contains("web-design")){
                item.classList.add("disable")
            }
            if(item.classList.contains("web-design")){
                item.classList.remove("disable")
            }
        })
    }   

    if(e.target.classList.contains("apps")){
        images.forEach((item) =>{
            if(!item.classList.contains("apps")){
                item.classList.add("disable")
            }
            if(item.classList.contains("apps")){
                item.classList.remove("disable")
            }
        })
    }   

    if(e.target.classList.contains("graphic")){
        images.forEach((item) =>{
            if(!item.classList.contains("graphic")){
                item.classList.add("disable")
            }
            if(item.classList.contains("graphic")){
                item.classList.remove("disable")
            }
        })
    }   

    if(e.target.classList.contains("responsive")){
        images.forEach((item) =>{
            if(!item.classList.contains("responsive")){
                item.classList.add("disable")
            }
            if(item.classList.contains("responsive")){
                item.classList.remove("disable")
            }
        })
    }   

   })



// end of block




// counter
let numbersCounter = document.querySelectorAll(".section5 .section5-wrapper .counter-wrapper .number span")
let num1 = numbersCounter[0],
 num2 = numbersCounter[1],
 num3 = numbersCounter[2],
 num4 = numbersCounter[3];
ee = true



function counter(){
    if(ee){
      let count =  setInterval(() => {
            num1.innerHTML =  +num1.innerHTML + 250
            num2.innerHTML =  +num2.innerHTML + 30
            num3.innerHTML =  +num3.innerHTML + 2
            num4.innerHTML =  +num4.innerHTML + 40
    

        if(num1.innerHTML > 6600 & num2.innerHTML > 800 & num3.innerHTML > 50 & num4.innerHTML > 1100 ){
            clearInterval(count)
            num1.innerHTML = 6600
            num2.innerHTML = 800
            num3.innerHTML = 50
            num4.innerHTML = 1100
        }
    
},70)
    }
    }

window.onscroll = function(){
    if(window.pageYOffset >= 4100){
         counter()
        ee = false
    }
}

// end of counter



