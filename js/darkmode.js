var swtc = document.getElementById("forDark");
    

swtc.addEventListener('click', () =>  {
    document.body.classList.toggle("darkTheme");
    localStorage.setItem("theme", "dark")
});