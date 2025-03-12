// Liste des mots à afficher en boucle
const words = ["-l'accueil", "-l'intégration", "-l'enracinement"];
let index = 0;

// Fonction pour changer le mot avec effet d'apparition
function changeWord() {
    const wordElement = document.getElementById("animated-word");
    const staticTextElement = document.getElementById("static-text");

    // Effacer l'ancien mot (animation de disparition)
    wordElement.style.opacity = 0;
    wordElement.style.transform = "translateY(30px)"; // Sortir du bas

    // Réinitialiser le texte animé et le texte statique
    wordElement.textContent = "";
    staticTextElement.style.opacity = 0;
    staticTextElement.style.transform = "translateY(-30px)"; // Sortir du haut

    // Ajouter un délai avant de commencer à afficher les mots
    setTimeout(() => {
        // Ajouter la phrase statique avec animation
        staticTextElement.style.opacity = 1;
        staticTextElement.style.transform = "translateY(0)"; // Remonter le texte statique

        // Ajouter le mot animé suivant
        wordElement.textContent = words[index]; // Ajouter le mot suivant
        wordElement.style.opacity = 1; // Rendre le mot visible
        wordElement.style.transform = "translateY(0)"; // Remonter le mot animé

        // Passer au mot suivant après que l'animation soit terminée
        index = (index + 1) % words.length; // Passer au mot suivant
    }, 1000); // Délai avant de commencer la nouvelle animation
}

// Initialiser le premier mot
changeWord();

// Changer le mot toutes les 4 secondes (3 secondes de temps pour afficher chaque mot, 1 seconde de délai)
setInterval(changeWord, 4000);
