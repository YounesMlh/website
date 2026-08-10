let selectedCharacter = null;

const characterCards = document.querySelectorAll(".character-card");
const okButton = document.querySelector(".character-ok");

characterCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove selection from all cards
        characterCards.forEach(c => {
            c.classList.remove("selected");
        });

        // Select this card
        card.classList.add("selected");

        // Remember the choice
        selectedCharacter = {
            title: card.querySelector("h3").textContent,
            quote: card.querySelector("p").textContent,
            icon: card.querySelector(".character-icon").textContent
        };

    });

});


okButton.addEventListener("click", () => {

    // Nothing selected
    if (!selectedCharacter) {
        alert("Choose a character first!");
        return;
    }

    // Hide the choices
    document.querySelector(".character-grid").style.display = "none";
    okButton.style.display = "none";

    // Change the heading
    document.querySelector(".character-header h2").textContent =
        "YOU ARE...";

    document.querySelector(".character-header p").textContent =
        selectedCharacter.title;

    // Create result
    const result = document.createElement("div");

    result.className = "character-result";

    result.innerHTML = `
        <div class="result-icon">${selectedCharacter.icon}</div>
        <h2>${selectedCharacter.title}</h2>
        <p>${selectedCharacter.quote}</p>
    `;

    document.querySelector(".character-header")
        .after(result);

});