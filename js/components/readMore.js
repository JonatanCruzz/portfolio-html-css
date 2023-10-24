function readMore() {
    const readMoreButton = document.querySelector(".read-more");
    const moreText = document.querySelector(".more-text");
    let isExpanded = false;
    let originalPosition = document.querySelector(".short-paragraph");

    readMoreButton.addEventListener("click", function (e) {
        e.preventDefault();
        isExpanded = !isExpanded;
        if (isExpanded) {
            moreText.style.display = "block";
            readMoreButton.textContent = "Leer menos";
            moreText.appendChild(readMoreButton);
        } else {
            moreText.style.display = "none";
            readMoreButton.textContent = "Leer más";
            originalPosition.querySelector("p").appendChild(readMoreButton);
        }
    });
}

export default readMore;