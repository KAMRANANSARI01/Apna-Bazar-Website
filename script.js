
// for making responsive navbar
const mobile_nav = document.querySelector(".nav-btn")
const mobile_header = document.querySelector(".header");

const toggleNav = ()=>{
    mobile_header.classList.toggle("active")
}
mobile_nav.addEventListener("click",()=> toggleNav())

// for replacing small-img to main img in sproduct.html 

    // Get the main image element
    const mainImg = document.getElementById("mainImage")
    const smallImg = document.getElementsByClassName("smallImage")
    
    smallImg[0].onclick = function(){
        mainImg.src = smallImg[0].src
    }
    smallImg[1].onclick = function(){
        mainImg.src =smallImg[1].src
    }
    smallImg[2].onclick = function(){
        mainImg.src =smallImg[2].src
    }
    smallImg[3].onclick = function(){
        mainImg.src =smallImg[3].src
    }


