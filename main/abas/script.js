let userChoice = ""; 

function setVariable(choice) {
    localStorage.setItem('userChoice', choice); 
    window.location.href = "../../noticias/noticiasPrincipal.html"; 
}


