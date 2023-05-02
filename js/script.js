const result = document.querySelector("h3");
const numbers = Array.from( document.querySelectorAll("span"));
const arr = document.querySelector(".fa-arrow-left")

numbers.map(num=>{
    num.addEventListener("click", (e)=>{
        switch (e.target.innerText) {
            case "C":
                result.innerText = ''
                break;
            case "Back":
                result.innerText = result.innerText.slice(0,-1)
                break;
            case "=":
                result.innerHTML = eval(result.innerHTML)
                break;
            default:
                result.innerHTML += e.target.innerText 
                break;
        }
})
})