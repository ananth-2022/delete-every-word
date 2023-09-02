const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, span, li, td')
for (let i = 0; i <text.length; i++) {
    text[i].innerText = text[i].innerText.replace(/l/gi, " ")
}