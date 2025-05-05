// Load questions from questions.json
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        const quiz = document.getElementById('quiz');
        data.questions.forEach((q, index) => {
            quiz.innerHTML += `
                <div class="question">
                    <h3>${index + 1}. ${q.question}</h3>
                    <div class="options">
                        ${q.options.map((opt, i) => `
                            <label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>
                        `).join('')}
                    </div>
                </div>
            `;
        });
    });

// Score calculation
document.getElementById('submit').addEventListener('click', () => {
    // Add scoring logic here
    alert("Scoreboard will be added after Firebase setup!");
});
