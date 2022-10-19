const textareaEl = document.getElementById("textarea")
const TotalCounterEl = document.getElementById("Total-counter")
const RemainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    TotalCounterEl.innerText = textareaEl.value.length
    RemainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}