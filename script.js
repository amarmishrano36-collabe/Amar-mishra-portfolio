let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML.split("").map((char, i) =>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

ScrollReveal({
    distance: "100px",
    duration: 4000,
    delay: 400,
});

