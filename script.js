document.addEventListener("DOMContentLoaded", function() {
    // Exemple d'animation : changer la couleur du texte au survol
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.backgroundColor = "#ddd";
        });
        card.addEventListener("mouseout", () => {
            card.style.backgroundColor = "#fff";
        });
    });
});
