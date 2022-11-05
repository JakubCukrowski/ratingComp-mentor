const submitBtn = document.querySelector(".submit")
const mainView = document.querySelector(".first")
const ratingView = document.querySelector(".second")
const rateBtns = document.querySelectorAll(".buttons button")
const ratingText = document.querySelector(".rating")

const handleSubmit = () => {
    mainView.classList.add("hidden")
    ratingView.classList.remove("hidden")
    ratingText.textContent = `You selected ${document.querySelector(".active").textContent} out of 5`
}

const highlight = (e) => {
    e.target.classList.add("active")
    for (const btn of rateBtns) {
        if (btn !== e.target) {
            btn.classList.remove("active")
        }
    }

}

for (const btn of rateBtns) {
    btn.addEventListener("click", highlight)
}

submitBtn.addEventListener("click", handleSubmit)