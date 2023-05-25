function showScores() {
    let scores = JSON.parse(localStorage.getItem("scores"));

    if (scores) {
        scores.sort((a, b) => {
            return b.score - a.score;
        });

        scores.forEach(score => {
            let li = document.createElement("li");
            li.textContent = `${score.name} - ${score.score}`;
            document.getElementById("score-list").appendChild(li);
        });
    }

    document.getElementById("clear").addEventListener("click", () => {

        localStorage.removeItem("scores");
        location.reload();
    }
    );
}

showScores()