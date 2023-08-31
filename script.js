var nameElement = document.getElementById("typed-name");
var name = "Renata Carvalho";
var charIndex = 0;
var typingSpeed = 100; // Velocidade de digitação (em milissegundos)

function typeNextChar() {
    if (charIndex < name.length) {
        nameElement.innerHTML += name.charAt(charIndex);
        charIndex++;
        setTimeout(typeNextChar, typingSpeed);
    }
}

typeNextChar();