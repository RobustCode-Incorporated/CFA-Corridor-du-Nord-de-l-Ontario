// Sélectionner l'élément de la liste d'événements
const eventList = document.querySelector('.event-list');

// Fonction pour arrêter l'animation de défilement
function stopScrolling() {
    eventList.style.animationPlayState = 'paused'; // Pause l'animation
}

// Fonction pour reprendre l'animation de défilement
function resumeScrolling() {
    eventList.style.animationPlayState = 'running'; // Reprend l'animation
}

// Ajouter les événements de survol sur chaque carte
const eventCards = document.querySelectorAll('.event-card');

eventCards.forEach(card => {
    card.addEventListener('mouseenter', stopScrolling); // Pause au survol
    card.addEventListener('mouseleave', resumeScrolling); // Reprend lorsque le survol disparaît
});
