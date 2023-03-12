var sections = document.querySelectorAll(".section");

function setActiveSection() {
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

document.addEventListener("scroll", function () {
    setActiveSection();
});
