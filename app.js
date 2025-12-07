// app.js - Logique principale de l'application

// ========================================
// VARIABLES GLOBALES
// ========================================
let direction = 'fr-cr'; // Direction de traduction
let currentQuizQuestions = [];
let currentQuestion = 0;
let quizScore = 0;
let quizAnswered = false;
let currentRiddle = 0;
let riddleRevealed = false;
let currentExercise = 0;
let sentenceWords = [];
let filteredDictionary = [...dictionary];

// ========================================
// GESTION DES ONGLETS
// ========================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Mise à jour de l'état actif des boutons
            tabButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            
            // Mise à jour de l'affichage des contenus
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const activeContent = document.getElementById(tabName);
            if (activeContent) {
                activeContent.classList.add('active');
            }
            
            // Initialisation spécifique selon l'onglet
            switch(tabName) {
                case 'quiz':
                    initQuiz();
                    break;
                case 'riddles':
                    renderRiddle();
                    break;
                case 'exercises':
                    renderExercise();
                    break;
                case 'phrases':
                    renderPhrases();
                    break;
                case 'dictionary':
                    renderDictionary();
                    break;
            }
        });
    });
}

// ========================================
// MOTEUR DE TRADUCTION INTELLIGENT
// ========================================
function intelligentTranslate(text, fromLang) {
    text = text.trim();
    
    if (fromLang === 'fr') {
        return frenchToCreole(text);
    } else {
        return creoleToFrench(text);
    }
}

function frenchToCreole(text) {
    const lowerText = text.toLowerCase();
    
    // 1. Chercher dans les expressions exactes
    for (let expr of expressions) {
        if (expr.fr.toLowerCase() === lowerText) {
            return expr.cr;
        }
    }
    
    // 2. Chercher dans les phrases par thème
    for (let theme in phrasesByTheme) {
        for (let phrase of phrasesByTheme[theme]) {
            if (phrase.fr.toLowerCase() === lowerText) {
                return phrase.cr;
            }
        }
    }
    
    // 3. Traduction mot à mot avec le dictionnaire
    let words = text.split(' ');
    let translatedWords = [];
    
    for (let word of words) {
        let cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
        let found = false;
        
        for (let entry of dictionary) {
            if (entry.fr.toLowerCase() === cleanWord) {
                translatedWords.push(entry.cr);
                found = true;
                break;
            }
        }
        
        if (!found) {
            translatedWords.push(word);
        }
    }
    
    return translatedWords.join(' ');
}

function creoleToFrench(text) {
    const lowerText = text.toLowerCase();
    
    // 1. Chercher dans les expressions exactes
    for (let expr of expressions) {
        if (expr.cr.toLowerCase() === lowerText) {
            return expr.fr;
        }
    }
    
    // 2. Chercher dans les phrases par thème
    for (let theme in phrasesByTheme) {
        for (let phrase of phrasesByTheme[theme]) {
            if (phrase.cr.toLowerCase() === lowerText) {
                return phrase.fr;
            }
        }
    }
    
    // 3. Traduction mot à mot avec le dictionnaire
    let words = text.split(' ');
    let translatedWords = [];
    
    for (let word of words) {
        let cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
        let found = false;
        
        for (let entry of dictionary) {
            if (entry.cr.toLowerCase() === cleanWord) {
                translatedWords.push(entry.fr);
                found = true;
                break;
            }
        }
        
        if (!found) {
            translatedWords.push(word);
        }
    }
    
    return translatedWords.join(' ');
}

function initTranslator() {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const translateBtn = document.getElementById('translate-btn');
    const switchBtn = document.getElementById('switch-btn');
    const inputLabel = document.getElementById('input-label');
    const outputLabel = document.getElementById('output-label');

    // Bouton de traduction
    translateBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        
        if (!text) {
            alert('Veuillez entrer du texte à traduire');
            return;
        }
        
        // Désactiver le bouton et afficher l'état de chargement
        translateBtn.disabled = true;
        translateBtn.textContent = 'Traduction en cours...';
        outputText.value = 'Traduction en cours...';
        
        // Simuler un délai pour l'UX
        setTimeout(() => {
            try {
                const fromLang = direction === 'fr-cr' ? 'fr' : 'cr';
                const translation = intelligentTranslate(text, fromLang);
                outputText.value = translation;
            } catch (error) {
                outputText.value = 'Erreur lors de la traduction. Veuillez réessayer.';
                console.error('Erreur:', error);
            } finally {
                // Réactiver le bouton
                translateBtn.disabled = false;
                translateBtn.textContent = 'Traduire';
            }
        }, 300);
    });

    // Bouton pour inverser les langues
    switchBtn.addEventListener('click', () => {
        direction = direction === 'fr-cr' ? 'cr-fr' : 'fr-cr';
        
        // Échanger les contenus
        const temp = inputText.value;
        inputText.value = outputText.value;
        outputText.value = temp;
        
        // Mettre à jour les labels
        if (direction === 'fr-cr') {
            inputLabel.textContent = 'Français';
            outputLabel.textContent = 'Créole Antillais';
        } else {
            inputLabel.textContent = 'Créole Antillais';
            outputLabel.textContent = 'Français';
        }
    });

    // Permettre la traduction avec la touche Entrée (Ctrl+Enter dans textarea)
    inputText.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            translateBtn.click();
        }
    });
}

// ========================================
// EXPRESSIONS COURANTES
// ========================================
function initExpressions() {
    const grid = document.getElementById('expressions-grid');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    
    grid.innerHTML = '';
    
    expressions.forEach((expr, index) => {
        const card = document.createElement('div');
        card.className = 'expression-card';
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <div class="expression-fr">${expr.fr}</div>
            <div class="expression-cr">${expr.cr}</div>
        `;
        
        const handleClick = () => {
            inputText.value = direction === 'fr-cr' ? expr.fr : expr.cr;
            outputText.value = direction === 'fr-cr' ? expr.cr : expr.fr;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        card.addEventListener('click', handleClick);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
            }
        });
        
        grid.appendChild(card);
    });
}

// ========================================
// PHRASES PAR THÈME
// ========================================
function renderPhrases() {
    const container = document.getElementById('phrases-container');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    
    container.innerHTML = '';
    
    Object.keys(phrasesByTheme).forEach(theme => {
        const section = document.createElement('div');
        section.className = 'theme-section';
        
        const title = document.createElement('div');
        title.className = 'theme-title';
        title.textContent = theme;
        section.appendChild(title);
        
        const phrasesGrid = document.createElement('div');
        phrasesGrid.className = 'expressions-grid';
        
        phrasesByTheme[theme].forEach(phrase => {
            const card = document.createElement('div');
            card.className = 'expression-card';
            card.setAttribute('tabindex', '0');
            card.innerHTML = `
                <div class="expression-fr">${phrase.fr}</div>
                <div class="expression-cr">${phrase.cr}</div>
            `;
            
            const handleClick = () => {
                inputText.value = phrase.fr;
                outputText.value = phrase.cr;
                document.querySelector('[data-tab="translator"]').click();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            
            card.addEventListener('click', handleClick);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            });
            
            phrasesGrid.appendChild(card);
        });
        
        section.appendChild(phrasesGrid);
        container.appendChild(section);
    });
}

// ========================================
// DICTIONNAIRE
// ========================================
function renderDictionary() {
    const dictGrid = document.getElementById('dictionary-grid');
    dictGrid.innerHTML = '';
    
    if (filteredDictionary.length === 0) {
        dictGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b7280; padding: 2rem;">Aucun mot trouvé.</p>';
        return;
    }
    
    filteredDictionary.forEach(word => {
        const card = document.createElement('div');
        card.className = 'dict-card';
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <div class="expression-fr">${word.fr}</div>
            <div class="expression-cr">${word.cr}</div>
            <div class="category-badge">${word.cat}</div>
        `;
        dictGrid.appendChild(card);
    });
}

function initDictionarySearch() {
    const searchInput = document.getElementById('dict-search');
    
    searchInput.addEventListener('input', (e) => {
        const search = e.target.value.toLowerCase().trim();
        
        if (search === '') {
            filteredDictionary = [...dictionary];
        } else {
            filteredDictionary = dictionary.filter(w => 
                w.fr.toLowerCase().includes(search) || 
                w.cr.toLowerCase().includes(search) ||
                w.cat.toLowerCase().includes(search)
            );
        }
        
        renderDictionary();
    });
}

// ========================================
// QUIZ
// ========================================
function initQuiz() {
    // Mélanger et prendre 10 questions aléatoires
    currentQuizQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    
    currentQuestion = 0;
    quizScore = 0;
    quizAnswered = false;
    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    
    // Quiz terminé
    if (currentQuestion >= currentQuizQuestions.length) {
        const percentage = Math.round((quizScore / currentQuizQuestions.length) * 100);
        let message = '';
        
        if (percentage === 100) {
            message = 'Parfait ! Tu maîtrises le créole !';
        } else if (percentage >= 75) {
            message = 'Très bien ! Continue comme ça !';
        } else if (percentage >= 50) {
            message = 'Pas mal ! Encore un peu de pratique !';
        } else {
            message = 'Continue à apprendre, tu vas y arriver !';
        }
        
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Quiz terminé</h3>
                <div class="score-display">${quizScore} / ${currentQuizQuestions.length}</div>
                <div style="font-size: 1.125rem; color: #6b7280; margin: 1rem 0;">${percentage} pour cent</div>
                <p style="font-size: 1.25rem; margin: 1rem 0; color: #2563eb;">${message}</p>
                <button class="btn btn-primary" id="restart-quiz">Nouveau Quiz</button>
            </div>
        `;
        
        document.getElementById('restart-quiz').addEventListener('click', initQuiz);
        return;
    }

    const q = currentQuizQuestions[currentQuestion];
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <span class="progress-badge">
                Question ${currentQuestion + 1} sur ${currentQuizQuestions.length}
            </span>
        </div>
        <div class="quiz-question">
            <p style="font-size: 1.125rem; font-weight: 600; text-align: center;">${q.q}</p>
            <div class="quiz-options" id="quiz-options"></div>
        </div>
        <div style="text-align: center; margin-top: 1rem; color: #6b7280; font-size: 1.125rem;">
            Score : <strong style="color: #2563eb;">${quizScore}</strong>
        </div>
        <div class="btn-group hidden" id="next-btn-container">
            <button class="btn ${currentQuestion < currentQuizQuestions.length - 1 ? 'btn-primary' : 'btn-success'}" id="next-question-btn">
                ${currentQuestion < currentQuizQuestions.length - 1 ? 'Question suivante' : 'Voir le résultat'}
            </button>
        </div>
    `;

    const optionsContainer = document.getElementById('quiz-options');
    q.o.forEach((opt, i) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = opt;
        button.addEventListener('click', () => answerQuiz(i, q.c));
        optionsContainer.appendChild(button);
    });
}

function answerQuiz(selected, correct) {
    if (quizAnswered) return;
    
    quizAnswered = true;
    const opts = document.querySelectorAll('.quiz-option');
    
    opts.forEach((opt, i) => {
        opt.classList.add('answered');
        opt.disabled = true;
        
        if (i === correct) {
            opt.classList.add('correct');
            opt.textContent += ' ✓';
        } else if (i === selected) {
            opt.classList.add('incorrect');
            opt.textContent += ' ✗';
        }
    });
    
    if (selected === correct) {
        quizScore++;
    }
    
    const nextBtnContainer = document.getElementById('next-btn-container');
    nextBtnContainer.classList.remove('hidden');
    
    const nextBtn = document.getElementById('next-question-btn');
    nextBtn.addEventListener('click', nextQuestion);
}

function nextQuestion() {
    currentQuestion++;
    quizAnswered = false;
    renderQuiz();
}

// ========================================
// DEVINETTES
// ========================================
function renderRiddle() {
    const container = document.getElementById('riddles-container');
    
    // Toutes les devinettes terminées
    if (currentRiddle >= riddles.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Toutes les devinettes terminées</h3>
                <p style="margin-bottom: 1.5rem; color: #6b7280;">Tu connais maintenant les expressions créoles imagées.</p>
                <button class="btn btn-primary" id="restart-riddles">Recommencer</button>
            </div>
        `;
        
        document.getElementById('restart-riddles').addEventListener('click', () => {
            currentRiddle = 0;
            riddleRevealed = false;
            renderRiddle();
        });
        return;
    }

    const r = riddles[currentRiddle];
    
    container.innerHTML = `
        <div class="riddle-card" style="max-width: 700px; margin: 0 auto; cursor: default; padding: 2rem;">
            <div style="text-align: center; margin-bottom: 1rem;">
                <span class="progress-badge">
                    Devinette ${currentRiddle + 1} sur ${riddles.length}
                </span>
            </div>
            <h3 style="font-size: 1.75rem; color: #2563eb; margin-bottom: 1.5rem; text-align: center;">"${r.expr}"</h3>
            <p style="color: #6b7280; margin-bottom: 1rem; font-size: 1.125rem; text-align: center;">
                <strong>Indice :</strong> ${r.hint}
            </p>
            <div id="riddle-answer" class="${riddleRevealed ? '' : 'hidden'}" style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; margin-top: 1.5rem; border: 2px solid #22c55e;">
                <p style="font-weight: bold; color: #22c55e; margin-bottom: 0.75rem; font-size: 1.25rem;">Réponse : ${r.answer}</p>
                <p style="color: #4b5563; line-height: 1.6;">${r.explain}</p>
            </div>
        </div>
        <div class="btn-group" style="margin-top: 2rem;">
            <button class="btn ${riddleRevealed ? 'btn-secondary' : 'btn-warning'}" id="reveal-riddle-btn" ${riddleRevealed ? 'disabled' : ''}>
                ${riddleRevealed ? 'Réponse affichée' : 'Voir la réponse'}
            </button>
            ${riddleRevealed ? '<button class="btn btn-primary" id="next-riddle-btn">Devinette suivante</button>' : ''}
        </div>
    `;
    
    if (!riddleRevealed) {
        document.getElementById('reveal-riddle-btn').addEventListener('click', () => {
            riddleRevealed = true;
            renderRiddle();
        });
    } else {
        document.getElementById('next-riddle-btn').addEventListener('click', () => {
            currentRiddle++;
            riddleRevealed = false;
            renderRiddle();
        });
    }
}

// ========================================
// EXERCICES
// ========================================
function renderExercise() {
    const container = document.getElementById('exercises-container');
    
    // Tous les exercices terminés
    if (currentExercise >= exercises.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Tous les exercices terminés</h3>
                <p style="margin-bottom: 1.5rem; color: #6b7280;">Bravo ! Tu progresses en créole.</p>
                <button class="btn btn-primary" id="restart-exercises">Recommencer</button>
            </div>
        `;
        
        document.getElementById('restart-exercises').addEventListener('click', () => {
            currentExercise = 0;
            renderExercise();
        });
        return;
    }

    const ex = exercises[currentExercise];
    
    if (ex.type === 'fill') {
        renderFillExercise(ex);
    } else if (ex.type === 'order') {
        renderOrderExercise(ex);
    }
}

function renderFillExercise(ex) {
    const container = document.getElementById('exercises-container');
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <span class="progress-badge">
                Exercice ${currentExercise + 1} sur ${exercises.length}
            </span>
        </div>
        <div class="exercise-box">
            <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem; text-align: center;">${ex.question}</h3>
            <div class="quiz-options" id="ex-options"></div>
        </div>
        <div class="btn-group hidden" id="ex-next-container">
            <button class="btn btn-primary" id="ex-next-btn">Exercice suivant</button>
        </div>
    `;
    
    const optionsContainer = document.getElementById('ex-options');
    ex.options.forEach((opt, i) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = opt;
        button.addEventListener('click', () => checkFillExercise(i, ex.correct));
        optionsContainer.appendChild(button);
    });
}

function checkFillExercise(selected, correct) {
    const opts = document.querySelectorAll('.quiz-option');
    
    opts.forEach((opt, i) => {
        opt.classList.add('answered');
        opt.disabled = true;
        
        if (i === correct) {
            opt.classList.add('correct');
            opt.textContent += ' ✓';
        } else if (i === selected) {
            opt.classList.add('incorrect');
            opt.textContent += ' ✗';
        }
    });
    
    const nextContainer = document.getElementById('ex-next-container');
    nextContainer.classList.remove('hidden');
    
    document.getElementById('ex-next-btn').addEventListener('click', () => {
        currentExercise++;
        renderExercise();
    });
}

function renderOrderExercise(ex) {
    const container = document.getElementById('exercises-container');
    sentenceWords = [];
    
    // MÉLANGER LES MOTS ALÉATOIREMENT
    const shuffledWords = [...ex.words].sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <span class="progress-badge">
                Exercice ${currentExercise + 1} sur ${exercises.length}
            </span>
        </div>
        <div class="exercise-box">
            <h3 style="margin-bottom: 1rem; font-size: 1.25rem; text-align: center;">${ex.question}</h3>
            <p style="color: #6b7280; margin-bottom: 1rem; text-align: center;">Cliquez sur les mots dans le bon ordre :</p>
            <div class="sentence-builder" id="sentence-builder">
                <span style="color: #9ca3af;">Cliquez sur les mots ci-dessous...</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.5rem; margin-top: 1rem;" id="word-buttons"></div>
        </div>
        <div class="btn-group">
            <button class="btn btn-warning" id="check-sentence-btn">Vérifier</button>
            <button class="btn btn-secondary" id="reset-sentence-btn">Réinitialiser</button>
        </div>
        <div id="sentence-result"></div>
    `;
    
    const wordsContainer = document.getElementById('word-buttons');
    shuffledWords.forEach((word, i) => {
        const button = document.createElement('button');
        button.className = 'word-button';
        button.textContent = word;
        button.dataset.index = i;
        button.dataset.word = word;
        button.addEventListener('click', () => addWord(word, button));
        wordsContainer.appendChild(button);
    });
    
    document.getElementById('check-sentence-btn').addEventListener('click', () => {
        checkSentence(ex.correct);
    });
    
    document.getElementById('reset-sentence-btn').addEventListener('click', resetSentence);
}

function addWord(word, button) {
    if (button.classList.contains('used')) return;
    
    button.classList.add('used');
    sentenceWords.push(word);
    updateSentenceBuilder();
}

function removeWord(index) {
    const word = sentenceWords[index];
    sentenceWords.splice(index, 1);
    
    // Réactiver le bouton correspondant
    const buttons = document.querySelectorAll('.word-button');
    buttons.forEach(btn => {
        if (btn.dataset.word === word && btn.classList.contains('used')) {
            btn.classList.remove('used');
            return;
        }
    });
    
    updateSentenceBuilder();
}

function updateSentenceBuilder() {
    const builder = document.getElementById('sentence-builder');
    
    if (sentenceWords.length === 0) {
        builder.innerHTML = '<span style="color: #9ca3af;">Cliquez sur les mots ci-dessous...</span>';
    } else {
        builder.innerHTML = '';
        sentenceWords.forEach((word, i) => {
            const span = document.createElement('span');
            span.className = 'sentence-word';
            span.textContent = word;
            span.setAttribute('tabindex', '0');
            span.addEventListener('click', () => removeWord(i));
            span.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    removeWord(i);
                }
            });
            builder.appendChild(span);
        });
    }
}

function resetSentence() {
    sentenceWords = [];
    document.querySelectorAll('.word-button').forEach(btn => {
        btn.classList.remove('used');
    });
    updateSentenceBuilder();
    document.getElementById('sentence-result').innerHTML = '';
}

function checkSentence(correct) {
    const answer = sentenceWords.join(' ');
    const resultDiv = document.getElementById('sentence-result');
    
    if (answer === correct) {
        resultDiv.innerHTML = `
            <div class="result-success">
                Bravo ! C'est correct.
            </div>
            <div class="btn-group" style="margin-top: 1rem;">
                <button class="btn btn-primary" id="next-exercise-btn">Exercice suivant</button>
            </div>
        `;
        
        document.getElementById('next-exercise-btn').addEventListener('click', () => {
            currentExercise++;
            renderExercise();
        });
    } else {
        resultDiv.innerHTML = `
            <div class="result-error">
                <strong>Pas tout à fait...</strong><br>
                <span style="color: #6b7280;">Réponse attendue :</span> <strong style="color: #2563eb;">${correct}</strong>
            </div>
        `;
    }
}

// ========================================
// INITIALISATION GLOBALE
// ========================================
function init() {
    console.log('Initialisation de l\'application créole...');
    
    // Initialiser les onglets
    initTabs();
    
    // Initialiser le traducteur
    initTranslator();
    
    // Initialiser les expressions courantes
    initExpressions();
    
    // Initialiser la recherche du dictionnaire
    initDictionarySearch();
    
    // Initialiser le quiz par défaut
    initQuiz();
    
    console.log('Application créole initialisée avec succès !');
    console.log(`Contenu : ${allQuestions.length} questions, ${expressions.length} expressions, ${riddles.length} devinettes, ${exercises.length} exercices, ${dictionary.length} mots au dictionnaire`);
}

// Lancer l'initialisation quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
