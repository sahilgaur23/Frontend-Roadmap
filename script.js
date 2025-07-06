function toggleContent(element) {
    const arrow = element.querySelector(".arrow");
    const content = element.nextElementSibling;

    if (content && content.style.display === "none") {
        content.style.display = "block";
        if (arrow) arrow.classList.add("down");
    } else if (content) {
        content.style.display = "none";
        if (arrow) arrow.classList.remove("down");
    }
}
