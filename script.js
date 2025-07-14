// Usa quizSections e randomizeAnswers dal file questions.js
const quizSections = window.quizSections;
const randomizeAnswers = window.randomizeAnswers;

let currentSection = 0;
let currentQuestion = 0;
let score = 0;
let answered = false;
let correctAnswersPerSection = Array(quizSections.length).fill(0);

// Elementi delle barre di completamento
const progressSectionBar = document.getElementById('progress-section-bar');
const progressSectionLabel = document.getElementById('progress-section-label');
const progressTotalBar = document.getElementById('progress-total-bar');
const progressTotalLabel = document.getElementById('progress-total-label');

function updateProgressBars() {
    // Barra sezione
    const totDomandeSezione = quizSections[currentSection].questions.length;
    const completateSezione = currentQuestion;
    const percentSezione = Math.round((completateSezione / totDomandeSezione) * 100);
    progressSectionBar.style.width = percentSezione + '%';
    progressSectionLabel.textContent = `Sezione: ${completateSezione} / ${totDomandeSezione}`;

    // Barra totale
    let totDomande = 0;
    let totCompletate = 0;
    for (let i = 0; i < quizSections.length; i++) {
        totDomande += quizSections[i].questions.length;
        if (i < currentSection) {
            totCompletate += quizSections[i].questions.length;
        } else if (i === currentSection) {
            totCompletate += currentQuestion;
        }
    }
    const percentTotale = Math.round((totCompletate / totDomande) * 100);
    progressTotalBar.style.width = percentTotale + '%';
    progressTotalLabel.textContent = `Totale: ${totCompletate} / ${totDomande}`;
}

const sectionTitleEl = document.createElement('h2');
sectionTitleEl.id = 'section-title';
sectionTitleEl.style.textAlign = 'center';
sectionTitleEl.style.marginBottom = '1.5rem';
const mainEl = document.querySelector('main .quiz-container');

mainEl.prepend(sectionTitleEl);

// Pulsante per saltare alla sezione successiva
const skipSectionBtn = document.createElement('button');
skipSectionBtn.id = 'skip-section-btn';
skipSectionBtn.textContent = 'Salta alla sezione successiva';
skipSectionBtn.style.display = 'none';
skipSectionBtn.style.margin = '0 auto 1rem auto';
skipSectionBtn.style.display = 'block';
mainEl.appendChild(skipSectionBtn);

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function showSection(index) {
    currentSection = index;
    currentQuestion = 0;
    score = 0;
    sectionTitleEl.textContent = quizSections[currentSection].title;
    // Ora il pulsante "Salta" è sempre visibile
    skipSectionBtn.style.display = 'block';
    showQuestion(currentQuestion);
    updateProgressBars();
}

function showQuestion(index) {
    answered = false;
    const q = quizSections[currentSection].questions[index];
    questionEl.textContent = q.text;
    answersEl.innerHTML = '';
    resultEl.textContent = '';
    nextBtn.style.display = 'none';
    q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.textContent = ans;
        btn.onclick = () => selectAnswer(i);
        answersEl.appendChild(btn);
    });
    updateProgressBars();
}

function selectAnswer(selected) {
    if (answered) return;
    answered = true;
    const q = quizSections[currentSection].questions[currentQuestion];
    Array.from(answersEl.children).forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === q.correct) btn.classList.add('correct');
        if (i === selected && i !== q.correct) btn.classList.add('incorrect');
        if (i === selected) btn.classList.add('selected');
        btn.disabled = true;
    });
    if (selected === q.correct) {
        score++;
        correctAnswersPerSection[currentSection]++;
        resultEl.textContent = 'Risposta corretta!';
    } else {
        resultEl.textContent = `Risposta sbagliata! Quella giusta era: ${q.answers[q.correct]}`;
    }
    nextBtn.style.display = 'inline-block';
    if (currentQuestion === quizSections[currentSection].questions.length - 1) {
        nextBtn.textContent = currentSection < quizSections.length - 1 ? 'Vai alla sezione successiva' : 'Vedi il risultato';
    } else {
        nextBtn.textContent = 'Prossima domanda';
    }
}

nextBtn.onclick = () => {
    if (currentQuestion < quizSections[currentSection].questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else if (currentSection < quizSections.length - 1) {
        // Mostra il risultato della sezione prima di passare alla successiva
        showSectionResult(currentSection, () => showSection(currentSection + 1));
    } else {
        showResult();
    }
    updateProgressBars();
};

function showResult() {
    sectionTitleEl.textContent = 'Quiz completato!';
    questionEl.textContent = '';
    answersEl.innerHTML = '';
    nextBtn.style.display = 'none';
    skipSectionBtn.style.display = 'none';
    let resultText = '';
    for (let i = 0; i < quizSections.length; i++) {
        resultText += `Sezione "${quizSections[i].title}": <strong>${correctAnswersPerSection[i]}</strong> su ${quizSections[i].questions.length} risposte corrette.<br>`;
    }
    resultEl.innerHTML = resultText;
}

// Avvia il quiz dalla prima sezione
// Randomizza tutte le risposte delle domande in tutte le sezioni
quizSections.forEach(section => {
    if (typeof randomizeAnswers === 'function') {
        randomizeAnswers(section.questions);
    }
});
showSection(0);

// Gestione salto sezione
skipSectionBtn.onclick = () => {
    // Mostra il risultato della sezione corrente e poi chiama callback
    function showSectionResult(sectionIdx, callback, isLastSection = false) {
        sectionTitleEl.textContent = isLastSection ? 'Fine quiz!' : 'Fine sezione!';
        questionEl.textContent = '';
        answersEl.innerHTML = '';
        nextBtn.style.display = 'none';
        skipSectionBtn.style.display = 'none';
        resultEl.textContent = `Hai risposto correttamente a ${correctAnswersPerSection[sectionIdx]} su ${quizSections[sectionIdx].questions.length} domande nella sezione "${quizSections[sectionIdx].title}".`;

        // Crea pulsante conferma
        let confirmBtn = document.createElement('button');
        confirmBtn.textContent = isLastSection ? 'Vedi il risultato finale' : 'Procedi alla sezione successiva';
        confirmBtn.className = 'confirm-section-btn';
        resultEl.appendChild(confirmBtn);
        confirmBtn.onclick = () => {
            confirmBtn.remove();
            callback();
        };
    }

    if (currentSection < quizSections.length - 1) {
        // Mostra il risultato della sezione prima di passare alla successiva
        showSectionResult(currentSection, () => showSection(currentSection + 1));
    } else {
        // Ultima sezione: mostra il risultato della sezione e poi il risultato finale
        showSectionResult(currentSection, showResult, true);
    }
    updateProgressBars();
};
