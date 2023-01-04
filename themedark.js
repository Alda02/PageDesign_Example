
// Funcion para cambiar el fondo light/Dark
function switchTheme() {
    const theme = document.getElementById("theme").value;
    document.getElementsByTagName("meta")[3].content = theme;
}