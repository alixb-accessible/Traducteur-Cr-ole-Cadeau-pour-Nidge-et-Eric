/**
 * Traducteur Français/Créole Antillais
 * Par Ti Racoon
 * Pour une France Inclusive
 */

const { useState, useEffect } = React;

// Composants d'icônes SVG inline
const ArrowLeftRight = ({ size = 24 }) => (
    React.createElement('svg', { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { d: "M8 3L4 7l4 4" }),
        React.createElement('path', { d: "M4 7h16" }),
        React.createElement('path', { d: "m16 21 4-4-4-4" }),
        React.createElement('path', { d: "M20 17H4" })
    )
);

const Book = ({ size = 24 }) => (
    React.createElement('svg', { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }),
        React.createElement('path', { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" })
    )
);

const Loader2 = ({ size = 24 }) => (
    React.createElement('svg', { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "spinner" },
        React.createElement('path', { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    )
);

const CreoleTranslator = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [direction, setDirection] = useState('fr-cr');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const expressions = [
        { fr: 'Bonjour, comment vas-tu ?', cr: 'Bonjou, sa ou fè ?' },
        { fr: 'Ça va ? Ça marche ?', cr: 'Sa ka maché ?' },
        { fr: 'Donne-moi un petit punch !', cr: 'Ba mwen an ti ponch !' },
        { fr: 'Où vas-tu ?', cr: 'Koté ou ka alé ?' },
        { fr: 'Qu\'est-ce que c\'est ?', cr: 'Ka sa yé ?' },
        { fr: 'Reste là, j\'arrive !', cr: 'Resté là an ka vini !' },
        { fr: 'C\'est mauvais', cr: 'I pa bon' },
        { fr: 'Allons-y !', cr: 'Annou ay !' },
        { fr: 'Guide-moi', cr: 'Gidé mwen' },
        { fr: 'C\'est très chaud', cr: 'Bagail la chô' },
        { fr: 'Je n\'ai pas un sous', cr: 'An pa tini pwen lajan' },
        { fr: 'Allons danser ce soir', cr: 'An nou zouké ô swé a' },
        { fr: 'Tiens bon !', cr: 'Tiembè raid, pa moli !' },
        { fr: 'J\'arrive !', cr: 'Man ka vini !' },
        { fr: 'C\'est bon ! Ça suffit !', cr: 'I bon !' },
        { fr: 'Je cherche un restaurant', cr: 'Man ka chèché an restoran' },
        { fr: 'J\'ai faim', cr: 'Mwen fen' },
        { fr: 'J\'ai soif', cr: 'Mwen swef' },
        { fr: 'C\'était délicieux', cr: 'I té bon menm' },
        { fr: 'L\'addition, s\'il vous plaît', cr: 'Konben man dwè\'w ?' },
        { fr: 'Sans épice', cr: 'San zépis' },
        { fr: 'C\'est combien ?', cr: 'Konben sa kouté ?' },
        { fr: 'Trop cher', cr: 'Tro ché' },
        { fr: 'Je ne fais que regarder', cr: 'Man ka gadé selman !' }
    ];

    const systemPrompt = direction === 'fr-cr' 
        ? `Tu es un expert en créole antillais (Guadeloupe et Martinique). Ta tâche est de traduire du français vers le créole antillais de manière authentique et grammaticalement correcte.

RÈGLES GRAMMATICALES IMPORTANTES :
- Utilise la particule "ka" pour le présent progressif/habituel : "man ka chèché" (je cherche), "ou ka rété" (tu habites)
- Utilise "té" pour le passé : "man té alé" (j'allais/je suis allé)
- Utilise "kay" pour le futur : "man kay alé" (j'irai)
- Les verbes sont invariables
- Pronoms : mwen (je/moi), ou (tu/toi), i/li (il/elle), nou (nous), zòt (vous), yo (ils/elles)
- "Man" s'utilise souvent à la place de "mwen" en début de phrase

EXEMPLES DE STRUCTURE :
- "Je cherche un restaurant" → "Man ka chèché an restoran"
- "Tu habites où ?" → "Koté ou ka rété ?"
- "Il est parti" → "I té pati"
- "Nous irons demain" → "Nou kay alé dèmen"
- "Donne-moi" → "Ba mwen"
- "Ça va ?" → "Sa ka maché ?"

Traduis UNIQUEMENT la phrase donnée, sans explications ni commentaires. Réponds avec la traduction créole seulement.`
        : `Tu es un expert en créole antillais (Guadeloupe et Martinique). Ta tâche est de traduire du créole antillais vers le français de manière naturelle.

Comprends bien les particules temporelles :
- "ka" = présent progressif/habituel
- "té" = passé
- "kay" = futur
- Les pronoms créoles et leur équivalent français

Traduis UNIQUEMENT la phrase donnée en français naturel, sans explications ni commentaires. Réponds avec la traduction française seulement.`;

    const translateWithClaude = async (text) => {
        setIsLoading(true);
        setError('');
        
        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    messages: [
                        {
                            role: 'user',
                            content: `${systemPrompt}\n\nPhrase à traduire : "${text}"`
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la traduction');
            }

            const data = await response.json();
            const translation = data.content
                .filter(item => item.type === 'text')
                .map(item => item.text)
                .join('')
                .trim();
            
            setOutputText(translation);
        } catch (err) {
            setError('Erreur de traduction. Réessayez.');
            console.error('Translation error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTranslate = () => {
        if (!inputText.trim()) {
            setOutputText('');
            return;
        }
        translateWithClaude(inputText);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleTranslate();
        }
    };

    const switchDirection = () => {
        setDirection(direction === 'fr-cr' ? 'cr-fr' : 'fr-cr');
        setInputText(outputText);
        setOutputText(inputText);
    };

    const useExpression = (expr) => {
        if (direction === 'fr-cr') {
            setInputText(expr.fr);
            setOutputText(expr.cr);
        } else {
            setInputText(expr.cr);
            setOutputText(expr.fr);
        }
    };

    return React.createElement('div', { className: 'app-container' },
        React.createElement('div', { className: 'max-w-4xl mx-auto pt-16' },
            // Card principale de traduction
            React.createElement('div', { className: 'card' },
                React.createElement('h1', { className: 'card-title' }, 'Traducteur Français/Créole Antillais'),
                React.createElement('p', { className: 'card-subtitle' }, 'Guadeloupe & Martinique - Traduction intelligente avec IA'),
                React.createElement('p', { className: 'card-description' }, 'Respecte la structure grammaticale authentique du créole antillais'),
                
                // Grille de traduction
                React.createElement('div', { className: 'translation-grid' },
                    React.createElement('div', null,
                        React.createElement('label', { htmlFor: 'input-text', className: 'input-label' },
                            direction === 'fr-cr' ? 'Français' : 'Créole Antillais'
                        ),
                        React.createElement('textarea', {
                            id: 'input-text',
                            value: inputText,
                            onChange: (e) => setInputText(e.target.value),
                            onKeyPress: handleKeyPress,
                            placeholder: 'Entrez votre texte ici...',
                            className: 'textarea-input',
                            disabled: isLoading,
                            'aria-describedby': 'input-help'
                        })
                    ),
                    React.createElement('div', null,
                        React.createElement('label', { htmlFor: 'output-text', className: 'input-label' },
                            direction === 'fr-cr' ? 'Créole Antillais' : 'Français'
                        ),
                        React.createElement('div', { className: 'relative' },
                            React.createElement('textarea', {
                                id: 'output-text',
                                value: outputText,
                                readOnly: true,
                                placeholder: 'La traduction apparaîtra ici...',
                                className: 'textarea-output',
                                'aria-live': 'polite'
                            }),
                            isLoading && React.createElement('div', { className: 'loader-container' },
                                React.createElement(Loader2, { size: 32 })
                            )
                        )
                    )
                ),
                
                // Message d'erreur
                error && React.createElement('div', { className: 'error-message', role: 'alert' }, error),
                
                // Boutons
                React.createElement('div', { className: 'btn-group' },
                    React.createElement('button', {
                        onClick: handleTranslate,
                        disabled: isLoading || !inputText.trim(),
                        className: 'btn btn-primary'
                    },
                        isLoading 
                            ? React.createElement(React.Fragment, null, React.createElement(Loader2, { size: 18 }), 'Traduction...')
                            : 'Traduire'
                    ),
                    React.createElement('button', {
                        onClick: switchDirection,
                        disabled: isLoading,
                        className: 'btn btn-secondary',
                        'aria-label': `Inverser la direction de traduction. Actuellement : ${direction === 'fr-cr' ? 'français vers créole' : 'créole vers français'}`
                    },
                        React.createElement(ArrowLeftRight, { size: 18 }),
                        'Inverser'
                    )
                ),
                
                React.createElement('p', { id: 'input-help', className: 'text-xs text-center mt-3' },
                    'Astuce : Appuyez sur Entrée pour traduire rapidement'
                )
            ),
            
            // Card expressions
            React.createElement('div', { className: 'card' },
                React.createElement('h2', { className: 'text-xl font-bold mb-4 flex items-center gap-2' },
                    React.createElement(Book, { size: 24, 'aria-hidden': 'true' }),
                    'Expressions courantes - Cliquez pour essayer'
                ),
                React.createElement('div', { className: 'expressions-grid', role: 'list' },
                    expressions.map((expr, index) => 
                        React.createElement('button', {
                            key: index,
                            onClick: () => useExpression(expr),
                            className: 'expression-card',
                            role: 'listitem'
                        },
                            React.createElement('div', { className: 'expression-fr' }, expr.fr),
                            React.createElement('div', { className: 'expression-cr' }, expr.cr)
                        )
                    )
                )
            ),
            
            // Card info
            React.createElement('div', { className: 'card info-box' },
                React.createElement('h3', { className: 'info-title' }, 'Comment ça marche ?'),
                React.createElement('p', { className: 'info-text' },
                    'Cette application utilise l\'intelligence artificielle Claude pour traduire en respectant la vraie grammaire créole antillaise :'
                ),
                React.createElement('ul', { className: 'info-list' },
                    React.createElement('li', null, '• ', React.createElement('span', { className: 'font-semibold' }, 'Particule "ka"'), ' pour les actions habituelles/en cours'),
                    React.createElement('li', null, '• ', React.createElement('span', { className: 'font-semibold' }, 'Particule "té"'), ' pour le passé'),
                    React.createElement('li', null, '• ', React.createElement('span', { className: 'font-semibold' }, 'Particule "kay"'), ' pour le futur'),
                    React.createElement('li', null, '• Structure authentique des phrases créoles'),
                    React.createElement('li', null, '• Adaptation au contexte de la conversation')
                ),
                React.createElement('p', { className: 'text-xs italic mt-3' },
                    'Vous pouvez écrire n\'importe quelle phrase, l\'IA s\'adapte !'
                )
            ),
            
            React.createElement('div', { className: 'footer' },
                React.createElement('p', null, 'Expressions authentiques issues de ressources martiniquaises et guadeloupéennes')
            ),
            
            // Signature
            React.createElement('div', { className: 'signature' },
                React.createElement('p', null, 
                    'Créé avec ',
                    React.createElement('strong', null, 'Par Ti Racoon'),
                    ' - Pour une France Inclusive'
                )
            )
        )
    );
};

// Render de l'application
ReactDOM.render(React.createElement(CreoleTranslator), document.getElementById('root'));
