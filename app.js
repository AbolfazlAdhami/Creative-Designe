document.querySelectorAll(".story-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
                btn.classList.toggle("change");
                btn.nextElementSibling.classList.toggle("change");
        });
});
