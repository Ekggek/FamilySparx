const questions = {
    fun: [
        "If you could have any superpower, what would it be and why?",
        "What’s the funniest thing that happened to you this week?",
        "If you could trade places with any celebrity for a day, who would it be?",
        "If your pet could talk, what would they say?",
        "What’s the most bizarre food you’ve ever eaten?",
        "If you could have an unlimited supply of one thing, what would it be?",
        "What’s the weirdest dream you’ve ever had?",
        "If you could create a new emoji, what would it be?",
        "What’s your favorite joke?",
        "If you had to live in a video game world, which one would you pick?"
    ],
    self_reflection: [
        "What’s a belief you’ve changed in the last year?",
        "What are you most proud of about yourself?",
        "What’s something about yourself that you’re working on improving?",
        "What’s one lesson you’ve learned the hard way?",
        "If you could master any skill instantly, what would it be?",
        "What’s a goal you have for the next year?",
        "What’s your biggest strength?",
        "How do you handle stress?",
        "What motivates you the most?",
        "If you could give advice to your younger self, what would it be?"
    ]
};

// Save to Favorites
function saveFavoriteQuestion() {
    let currentQuestion = document.getElementById("question").textContent;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(currentQuestion)) {
        favorites.push(currentQuestion);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Saved to favorites!");
    }
}

// View Favorites
function viewFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let list = document.getElementById("favorites-list");
    list.innerHTML = favorites.length ? favorites.map(q => `<li>${q}</li>`).join('') : "<li>No favorites yet.</li>";
    document.getElementById("favorites-box").style.display = "block";
}

// Clear Favorites
function clearFavorites() {
    localStorage.removeItem("favorites");
    document.getElementById("favorites-list").innerHTML = "<li>No favorites yet.</li>";
}

// Show Random Question
function showRandomQuestion() {
    let category = document.getElementById("category").value;
    let randomQuestion = questions[category][Math.floor(Math.random() * questions[category].length)];
    document.getElementById("question").textContent = randomQuestion;
}
