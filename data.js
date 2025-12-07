// data.js - Toutes les données de l'application

// 80+ QUESTIONS POUR LE QUIZ
const allQuestions = [
    {q: 'Comment dit-on "Bonjour" ?', o: ['Bonswa', 'Bonjou', 'Salut', 'Orevwa'], c: 1},
    {q: 'Que signifie "Sa ou fè" ?', o: ['Où vas-tu', 'Comment ça va', 'Qui es-tu', 'Que fais-tu'], c: 1},
    {q: 'Particule du présent ?', o: ['té', 'kay', 'ka', 'pa'], c: 2},
    {q: 'Comment dit-on "Merci beaucoup" ?', o: ['Mèsi', 'Mèsi anlo', 'Souplé', 'Pa ni pwoblèm'], c: 1},
    {q: 'Que signifie "Man ka chèché" ?', o: ['Je cherche', 'Je mange', 'Je dors', 'Je parle'], c: 0},
    {q: 'Particule du passé ?', o: ['ka', 'té', 'kay', 'pa'], c: 1},
    {q: 'Comment dit-on "les enfants" ?', o: ['timoun', 'timoun-la', 'sé timoun', 'timoun-yo'], c: 2},
    {q: 'Que signifie "I bon" ?', o: ['Il est grand', 'C\'est bon', 'Il vient', 'C\'est cher'], c: 1},
    {q: 'Comment dit-on "Au revoir" ?', o: ['Bonjou', 'Mèsi', 'Orevwa', 'Souplé'], c: 2},
    {q: 'Que signifie "Mwen fen" ?', o: ['J\'ai faim', 'J\'ai soif', 'Je pars', 'Je viens'], c: 0},
    {q: 'Particule du futur ?', o: ['ka', 'té', 'kay', 'pa'], c: 2},
    {q: 'Comment dit-on "Oui" ?', o: ['Wi', 'Non', 'Pa', 'Wa'], c: 0},
    {q: 'Que signifie "Koté ou ka alé" ?', o: ['Qui es-tu', 'Où vas-tu', 'Comment vas-tu', 'Que fais-tu'], c: 1},
    {q: 'Comment dit-on "S\'il te plaît" ?', o: ['Mèsi', 'Souplé', 'Padon', 'Orevwa'], c: 1},
    {q: 'Que signifie "Konben sa kouté" ?', o: ['Qui est-ce', 'Où est-ce', 'C\'est combien', 'Comment'], c: 2},
    {q: 'Le pluriel se marque avec :', o: ['yo', 'la', 'sé', 'ka'], c: 2},
    {q: 'Comment dit-on "Je t\'aime" ?', o: ['Mwen enmen\'w', 'Mwen fen', 'Mwen bien', 'Mwen ka alé'], c: 0},
    {q: 'Où se place l\'adjectif généralement ?', o: ['Avant le nom', 'Après le nom', 'Les deux', 'Aucun'], c: 1},
    {q: 'Que signifie "An nou alé" ?', o: ['Allons-y', 'Au revoir', 'Bonjour', 'Merci'], c: 0},
    {q: 'Comment dit-on "Excuse-moi" ?', o: ['Mèsi', 'Padon', 'Eskizé mwen', 'Souplé'], c: 2},
    {q: 'Que signifie "Mwen swef" ?', o: ['J\'ai faim', 'J\'ai soif', 'Je suis fatigué', 'Je pars'], c: 1},
    {q: 'Comment dit-on "Maison" ?', o: ['Kay', 'Fanm', 'Nonm', 'Timoun'], c: 0},
    {q: 'Que signifie "Fanm" ?', o: ['Homme', 'Femme', 'Enfant', 'Maison'], c: 1},
    {q: 'Comment dit-on "Homme" ?', o: ['Fanm', 'Nonm', 'Timoun', 'Kay'], c: 1},
    {q: 'Que signifie "Ba mwen" ?', o: ['Donne-moi', 'Prends', 'Va', 'Viens'], c: 0},
    {q: 'Comment dit-on "Eau" ?', o: ['Dlo', 'Pen', 'Diri', 'Manjé'], c: 0},
    {q: 'Que signifie "Manjé" ?', o: ['Boire', 'Manger', 'Dormir', 'Parler'], c: 1},
    {q: 'Comment dit-on "Pain" ?', o: ['Dlo', 'Pen', 'Diri', 'Vyann'], c: 1},
    {q: 'Que signifie "Diri" ?', o: ['Riz', 'Pain', 'Eau', 'Viande'], c: 0},
    {q: 'Comment dit-on "Grand" ?', o: ['Ti', 'Gwo', 'Bèl', 'Vyé'], c: 1},
    {q: 'Que signifie "Ti" ?', o: ['Grand', 'Petit', 'Beau', 'Vieux'], c: 1},
    {q: 'Comment dit-on "Beau/Belle" ?', o: ['Bèl', 'Lèd', 'Gwo', 'Ti'], c: 0},
    {q: 'Que signifie "Vyé" ?', o: ['Jeune', 'Vieux', 'Nouveau', 'Ancien'], c: 1},
    {q: 'Comment dit-on "Nouveau" ?', o: ['Vyé', 'Nèf', 'Jenn', 'Gran'], c: 1},
    {q: 'Que signifie "Jenn" ?', o: ['Vieux', 'Jeune', 'Grand', 'Petit'], c: 1},
    {q: 'Comment dit-on "Nuit" ?', o: ['Jou', 'Nwit', 'Maten', 'Aswè'], c: 1},
    {q: 'Que signifie "Jou" ?', o: ['Nuit', 'Jour', 'Matin', 'Soir'], c: 1},
    {q: 'Comment dit-on "Matin" ?', o: ['Nwit', 'Aswè', 'Maten', 'Midi'], c: 2},
    {q: 'Que signifie "Aswè" ?', o: ['Matin', 'Midi', 'Soir', 'Nuit'], c: 2},
    {q: 'Comment dit-on "Aujourd\'hui" ?', o: ['Yè', 'Jòdi', 'Dèmen', 'Lontan'], c: 1},
    {q: 'Que signifie "Dèmen" ?', o: ['Hier', 'Aujourd\'hui', 'Demain', 'Maintenant'], c: 2},
    {q: 'Comment dit-on "Hier" ?', o: ['Jòdi', 'Dèmen', 'Yè', 'Lontan'], c: 2},
    {q: 'Que signifie "Lontan" ?', o: ['Bientôt', 'Longtemps', 'Maintenant', 'Jamais'], c: 1},
    {q: 'Comment dit-on "Maintenant" ?', o: ['Lontan', 'Kounnyé-a', 'Aprézan', 'Dèmen'], c: 1},
    {q: 'Que signifie "Vini" ?', o: ['Aller', 'Venir', 'Partir', 'Rester'], c: 1},
    {q: 'Comment dit-on "Aller" ?', o: ['Vini', 'Alé', 'Rété', 'Pati'], c: 1},
    {q: 'Que signifie "Rété" ?', o: ['Partir', 'Venir', 'Rester', 'Aller'], c: 2},
    {q: 'Comment dit-on "Partir" ?', o: ['Vini', 'Alé', 'Rété', 'Pati'], c: 3},
    {q: 'Que signifie "Palé" ?', o: ['Écouter', 'Parler', 'Voir', 'Entendre'], c: 1},
    {q: 'Comment dit-on "Écouter" ?', o: ['Palé', 'Tann', 'Wè', 'Konprann'], c: 1},
    {q: 'Que signifie "Wè" ?', o: ['Entendre', 'Voir', 'Parler', 'Comprendre'], c: 1},
    {q: 'Comment dit-on "Comprendre" ?', o: ['Palé', 'Tann', 'Wè', 'Konprann'], c: 3},
    {q: 'Que signifie "Sav" ?', o: ['Savoir', 'Pouvoir', 'Vouloir', 'Devoir'], c: 0},
    {q: 'Comment dit-on "Pouvoir" ?', o: ['Sav', 'Pé', 'Lé', 'Dwèt'], c: 1},
    {q: 'Que signifie "Lé" ?', o: ['Savoir', 'Pouvoir', 'Vouloir', 'Devoir'], c: 2},
    {q: 'Comment dit-on "Devoir" ?', o: ['Sav', 'Pé', 'Lé', 'Dwèt'], c: 3},
    {q: 'Que signifie "Bwè" ?', o: ['Manger', 'Boire', 'Dormir', 'Chanter'], c: 1},
    {q: 'Comment dit-on "Dormir" ?', o: ['Bwè', 'Dòmi', 'Manjé', 'Chanté'], c: 1},
    {q: 'Que signifie "Chanté" ?', o: ['Danser', 'Chanter', 'Jouer', 'Rire'], c: 1},
    {q: 'Comment dit-on "Danser" ?', o: ['Chanté', 'Dansé', 'Jwé', 'Ri'], c: 1},
    {q: 'Que signifie "Jwé" ?', o: ['Travailler', 'Jouer', 'Étudier', 'Dormir'], c: 1},
    {q: 'Comment dit-on "Travailler" ?', o: ['Jwé', 'Travay', 'Étidyé', 'Dòmi'], c: 1},
    {q: 'Que signifie "Kouri" ?', o: ['Marcher', 'Courir', 'Sauter', 'Voler'], c: 1},
    {q: 'Comment dit-on "Marcher" ?', o: ['Kouri', 'Maché', 'Soté', 'Volé'], c: 1},
    {q: 'Que signifie "Gadé" ?', o: ['Regarder', 'Écouter', 'Toucher', 'Sentir'], c: 0},
    {q: 'Comment dit-on "Chercher" ?', o: ['Gadé', 'Chèché', 'Jwenn', 'Pwan'], c: 1},
    {q: 'Que signifie "Jwenn" ?', o: ['Chercher', 'Trouver', 'Perdre', 'Donner'], c: 1},
    {q: 'Comment dit-on "Prendre" ?', o: ['Donné', 'Pwan', 'Jwenn', 'Chèché'], c: 1},
    {q: 'Que signifie "Bay" ?', o: ['Prendre', 'Donner', 'Garder', 'Perdre'], c: 1},
    {q: 'Comment dit-on "Garder" ?', o: ['Bay', 'Pwan', 'Gadé', 'Kité'], c: 2},
    {q: 'Que signifie "Kité" ?', o: ['Garder', 'Prendre', 'Laisser', 'Donner'], c: 2},
    {q: 'Comment dit-on "Aimer" ?', o: ['Rayi', 'Enmen', 'Vwè', 'Konnen'], c: 1},
    {q: 'Que signifie "Rayi" ?', o: ['Aimer', 'Détester', 'Vouloir', 'Savoir'], c: 1},
    {q: 'Comment dit-on "Chaud" ?', o: ['Frèt', 'Cho', 'Tyèd', 'Glase'], c: 1},
    {q: 'Que signifie "Frèt" ?', o: ['Chaud', 'Froid', 'Tiède', 'Glacé'], c: 1},
    {q: 'Comment dit-on "Rouge" ?', o: ['Vè', 'Ble', 'Rouj', 'Jòn'], c: 2},
    {q: 'Que signifie "Vè" ?', o: ['Rouge', 'Bleu', 'Vert', 'Jaune'], c: 2},
    {q: 'Comment dit-on "Bleu" ?', o: ['Vè', 'Ble', 'Rouj', 'Blan'], c: 1},
    {q: 'Que signifie "Blan" ?', o: ['Noir', 'Blanc', 'Gris', 'Brun'], c: 1},
    {q: 'Comment dit-on "Noir" ?', o: ['Blan', 'Nwè', 'Gri', 'Bren'], c: 1}
];

// 60+ EXPRESSIONS COURANTES
const expressions = [
    { fr: 'Bonjour', cr: 'Bonjou' },
    { fr: 'Bonsoir', cr: 'Bonswa' },
    { fr: 'Bonne nuit', cr: 'Bon nwit' },
    { fr: 'Comment ça va ?', cr: 'Sa ou fè ?' },
    { fr: 'Ça va bien', cr: 'Sa ka maché' },
    { fr: 'Très bien merci', cr: 'Bien mèsi' },
    { fr: 'Merci', cr: 'Mèsi' },
    { fr: 'Merci beaucoup', cr: 'Mèsi anlo' },
    { fr: 'De rien', cr: 'Pa ni pwoblèm' },
    { fr: 'S\'il te plaît', cr: 'Souplé' },
    { fr: 'Excuse-moi', cr: 'Eskizé mwen' },
    { fr: 'Pardon', cr: 'Padon' },
    { fr: 'Au revoir', cr: 'Orevwa' },
    { fr: 'À bientôt', cr: 'A ta lè' },
    { fr: 'À plus tard', cr: 'A pli ta' },
    { fr: 'Oui', cr: 'Wi' },
    { fr: 'Non', cr: 'Non' },
    { fr: 'D\'accord', cr: 'Dakò' },
    { fr: 'Je ne sais pas', cr: 'Man pa sav' },
    { fr: 'Je ne comprends pas', cr: 'Man pa konprann' },
    { fr: 'Comment tu t\'appelles ?', cr: 'Ki jan ou rélé ?' },
    { fr: 'Je m\'appelle...', cr: 'Man rélé...' },
    { fr: 'Enchanté', cr: 'Anchonté' },
    { fr: 'Où vas-tu ?', cr: 'Koté ou ka alé ?' },
    { fr: 'Je vais bien', cr: 'Man bien' },
    { fr: 'J\'ai faim', cr: 'Mwen fen' },
    { fr: 'J\'ai soif', cr: 'Mwen swef' },
    { fr: 'C\'est délicieux', cr: 'I bon anlo' },
    { fr: 'C\'est bon', cr: 'I bon' },
    { fr: 'Combien ça coûte ?', cr: 'Konben sa kouté ?' },
    { fr: 'C\'est cher', cr: 'Sa chè' },
    { fr: 'C\'est pas cher', cr: 'Sa pa chè' },
    { fr: 'Je cherche...', cr: 'Man ka chèché...' },
    { fr: 'Je voudrais...', cr: 'Man té lé...' },
    { fr: 'Allons-y !', cr: 'An nou alé !' },
    { fr: 'Attends', cr: 'Tann' },
    { fr: 'Dépêche-toi', cr: 'Fè vit' },
    { fr: 'Pas de problème', cr: 'Pa ni pwoblèm' },
    { fr: 'Aucun souci', cr: 'Pon pwoblèm' },
    { fr: 'Je t\'aime', cr: 'Mwen enmen\'w' },
    { fr: 'Je t\'adore', cr: 'Mwen adò\'w' },
    { fr: 'Mon amour', cr: 'Doudou mwen' },
    { fr: 'Mon chéri / Ma chérie', cr: 'Chè mwen' },
    { fr: 'Quel est ton nom ?', cr: 'Ki non\'w ?' },
    { fr: 'D\'où viens-tu ?', cr: 'Koté ou sòti ?' },
    { fr: 'Je viens de France', cr: 'Mwen sòti Lafrans' },
    { fr: 'Quelle heure est-il ?', cr: 'Ki lè i yé ?' },
    { fr: 'Aujourd\'hui', cr: 'Jòdi' },
    { fr: 'Demain', cr: 'Dèmen' },
    { fr: 'Hier', cr: 'Yè' },
    { fr: 'Maintenant', cr: 'Kounnyé-a' },
    { fr: 'Plus tard', cr: 'Pli ta' },
    { fr: 'Toujours', cr: 'Toujou' },
    { fr: 'Jamais', cr: 'Jamé' },
    { fr: 'Peut-être', cr: 'Pétèt' },
    { fr: 'Bien sûr', cr: 'Byensir' },
    { fr: 'Évidemment', cr: 'Évidaman' },
    { fr: 'Attention !', cr: 'Atansyon !' },
    { fr: 'Au secours !', cr: 'Lèd mwen !' },
    { fr: 'Félicitations !', cr: 'Bravo !' },
    { fr: 'Bon courage', cr: 'Bon kouraj' },
    { fr: 'Bonne chance', cr: 'Bon chans' },
    { fr: 'Bon appétit', cr: 'Bon manj' },
    { fr: 'Santé ! (toast)', cr: 'Santé !' },
    { fr: 'Joyeux anniversaire', cr: 'Bon fèt' }
];

// PHRASES PAR THÈME
const phrasesByTheme = {
    'À la maison': [
        { fr: 'Je suis à la maison', cr: 'Man ka kay' },
        { fr: 'Viens chez moi', cr: 'Vini kay mwen' },
        { fr: 'Où habites-tu ?', cr: 'Koté ou ka rété ?' },
        { fr: 'J\'habite en ville', cr: 'Man ka rété an vil' },
        { fr: 'C\'est ma chambre', cr: 'Sa sé chanm mwen' },
        { fr: 'Ferme la porte', cr: 'Fèmen pòt-la' },
        { fr: 'Ouvre la fenêtre', cr: 'Ouvè fennet-la' }
    ],
    'Au restaurant': [
        { fr: 'Je voudrais commander', cr: 'Man lé kòmandé' },
        { fr: 'L\'addition s\'il vous plaît', cr: 'Lajisyon souplé' },
        { fr: 'C\'est très bon', cr: 'I bon anlo' },
        { fr: 'Je suis végétarien', cr: 'Man pa manjé vyann' },
        { fr: 'Qu\'est-ce que c\'est ?', cr: 'Sa ki sa ?' },
        { fr: 'Je prends ça', cr: 'Man pwan sa' }
    ],
    'Transports': [
        { fr: 'Où est l\'arrêt de bus ?', cr: 'Koté lariyet bis-la ?' },
        { fr: 'Je cherche un taxi', cr: 'Man ka chèché an taksi' },
        { fr: 'Combien coûte le ticket ?', cr: 'Konben tiké-a kouté ?' },
        { fr: 'Je vais à la plage', cr: 'Man ka alé praj' },
        { fr: 'C\'est loin ?', cr: 'Sa lwen ?' },
        { fr: 'C\'est proche', cr: 'Sa pré' }
    ],
    'Faire du shopping': [
        { fr: 'Je cherche...', cr: 'Man ka chèché...' },
        { fr: 'Vous avez ça en bleu ?', cr: 'Zot ni sa an ble ?' },
        { fr: 'C\'est trop cher', cr: 'Sa twò chè' },
        { fr: 'Je peux essayer ?', cr: 'Man pé éséyé ?' },
        { fr: 'Quelle taille ?', cr: 'Ki grandè ?' },
        { fr: 'Je le prends', cr: 'Man pwan\'y' }
    ],
    'Météo et nature': [
        { fr: 'Il fait beau', cr: 'I fè bèl tan' },
        { fr: 'Il fait chaud', cr: 'I fè cho' },
        { fr: 'Il pleut', cr: 'Lapli ka tombé' },
        { fr: 'Il y a du soleil', cr: 'Soley-la doubo' },
        { fr: 'Il y a du vent', cr: 'I ni van' },
        { fr: 'La mer est belle', cr: 'Lanmè bèl' },
        { fr: 'J\'aime la plage', cr: 'Mwen enmen praj' }
    ],
    'Urgences': [
        { fr: 'J\'ai besoin d\'aide', cr: 'Mwen bizwen lèd' },
        { fr: 'Appelez un médecin', cr: 'Aplé an médsen' },
        { fr: 'Où est l\'hôpital ?', cr: 'Koté lopital ?' },
        { fr: 'Je suis malade', cr: 'Man malad' },
        { fr: 'J\'ai mal', cr: 'Mwen ni doulè' },
        { fr: 'C\'est urgent', cr: 'Sa présan' }
    ]
};


// MINI-DICTIONNAIRE (150+ mots)
const dictionary = [
    { fr: 'Enfant', cr: 'Timoun', cat: 'Famille' },
    { fr: 'Homme', cr: 'Nonm', cat: 'Famille' },
    { fr: 'Femme', cr: 'Fanm', cat: 'Famille' },
    { fr: 'Père', cr: 'Papa', cat: 'Famille' },
    { fr: 'Mère', cr: 'Manman', cat: 'Famille' },
    { fr: 'Frère', cr: 'Frè', cat: 'Famille' },
    { fr: 'Sœur', cr: 'Sè', cat: 'Famille' },
    { fr: 'Grand-mère', cr: 'Granmoun', cat: 'Famille' },
    { fr: 'Grand-père', cr: 'Granpapa', cat: 'Famille' },
    { fr: 'Ami', cr: 'Zanmi', cat: 'Famille' },
    { fr: 'Maison', cr: 'Kay', cat: 'Lieux' },
    { fr: 'École', cr: 'Lékòl', cat: 'Lieux' },
    { fr: 'Marché', cr: 'Maché', cat: 'Lieux' },
    { fr: 'Plage', cr: 'Praj', cat: 'Lieux' },
    { fr: 'Mer', cr: 'Lanmè', cat: 'Lieux' },
    { fr: 'Montagne', cr: 'Mòn', cat: 'Lieux' },
    { fr: 'Ville', cr: 'Vil', cat: 'Lieux' },
    { fr: 'Jardin', cr: 'Jaden', cat: 'Lieux' },
    { fr: 'Rue', cr: 'Lari', cat: 'Lieux' },
    { fr: 'Pain', cr: 'Pen', cat: 'Nourriture' },
    { fr: 'Eau', cr: 'Dlo', cat: 'Nourriture' },
    { fr: 'Riz', cr: 'Diri', cat: 'Nourriture' },
    { fr: 'Viande', cr: 'Vyann', cat: 'Nourriture' },
    { fr: 'Poisson', cr: 'Pwason', cat: 'Nourriture' },
    { fr: 'Fruit', cr: 'Fwi', cat: 'Nourriture' },
    { fr: 'Légume', cr: 'Legim', cat: 'Nourriture' },
    { fr: 'Banane', cr: 'Fig', cat: 'Nourriture' },
    { fr: 'Mangue', cr: 'Mango', cat: 'Nourriture' },
    { fr: 'Coco', cr: 'Koko', cat: 'Nourriture' },
    { fr: 'Café', cr: 'Kfé', cat: 'Nourriture' },
    { fr: 'Lait', cr: 'Lèt', cat: 'Nourriture' },
    { fr: 'Manger', cr: 'Manjé', cat: 'Verbes' },
    { fr: 'Boire', cr: 'Bwè', cat: 'Verbes' },
    { fr: 'Dormir', cr: 'Dòmi', cat: 'Verbes' },
    { fr: 'Parler', cr: 'Palé', cat: 'Verbes' },
    { fr: 'Écouter', cr: 'Tann', cat: 'Verbes' },
    { fr: 'Voir', cr: 'Wè', cat: 'Verbes' },
    { fr: 'Regarder', cr: 'Gadé', cat: 'Verbes' },
    { fr: 'Comprendre', cr: 'Konprann', cat: 'Verbes' },
    { fr: 'Savoir', cr: 'Sav', cat: 'Verbes' },
    { fr: 'Pouvoir', cr: 'Pé', cat: 'Verbes' },
    { fr: 'Vouloir', cr: 'Lé', cat: 'Verbes' },
    { fr: 'Devoir', cr: 'Dwèt', cat: 'Verbes' },
    { fr: 'Aller', cr: 'Alé', cat: 'Verbes' },
    { fr: 'Venir', cr: 'Vini', cat: 'Verbes' },
    { fr: 'Partir', cr: 'Pati', cat: 'Verbes' },
    { fr: 'Rester', cr: 'Rété', cat: 'Verbes' },
    { fr: 'Chercher', cr: 'Chèché', cat: 'Verbes' },
    { fr: 'Trouver', cr: 'Jwenn', cat: 'Verbes' },
    { fr: 'Prendre', cr: 'Pwan', cat: 'Verbes' },
    { fr: 'Donner', cr: 'Bay', cat: 'Verbes' },
    { fr: 'Aimer', cr: 'Enmen', cat: 'Verbes' },
    { fr: 'Détester', cr: 'Rayi', cat: 'Verbes' },
    { fr: 'Travailler', cr: 'Travay', cat: 'Verbes' },
    { fr: 'Jouer', cr: 'Jwé', cat: 'Verbes' },
    { fr: 'Danser', cr: 'Dansé', cat: 'Verbes' },
    { fr: 'Chanter', cr: 'Chanté', cat: 'Verbes' },
    { fr: 'Marcher', cr: 'Maché', cat: 'Verbes' },
    { fr: 'Courir', cr: 'Kouri', cat: 'Verbes' },
    { fr: 'Grand', cr: 'Gwo', cat: 'Adjectifs' },
    { fr: 'Petit', cr: 'Ti', cat: 'Adjectifs' },
    { fr: 'Beau/Belle', cr: 'Bèl', cat: 'Adjectifs' },
    { fr: 'Laid', cr: 'Lèd', cat: 'Adjectifs' },
    { fr: 'Vieux', cr: 'Vyé', cat: 'Adjectifs' },
    { fr: 'Jeune', cr: 'Jenn', cat: 'Adjectifs' },
    { fr: 'Nouveau', cr: 'Nèf', cat: 'Adjectifs' },
    { fr: 'Bon', cr: 'Bon', cat: 'Adjectifs' },
    { fr: 'Mauvais', cr: 'Move', cat: 'Adjectifs' },
    { fr: 'Chaud', cr: 'Cho', cat: 'Adjectifs' },
    { fr: 'Froid', cr: 'Frèt', cat: 'Adjectifs' },
    { fr: 'Content', cr: 'Kontan', cat: 'Adjectifs' },
    { fr: 'Triste', cr: 'Tris', cat: 'Adjectifs' },
    { fr: 'Fatigué', cr: 'Las', cat: 'Adjectifs' },
    { fr: 'Malade', cr: 'Malad', cat: 'Adjectifs' },
    { fr: 'Fort', cr: 'Fò', cat: 'Adjectifs' },
    { fr: 'Faible', cr: 'Fèb', cat: 'Adjectifs' },
    { fr: 'Rapide', cr: 'Vit', cat: 'Adjectifs' },
    { fr: 'Lent', cr: 'Dousman', cat: 'Adjectifs' },
    { fr: 'Rouge', cr: 'Rouj', cat: 'Couleurs' },
    { fr: 'Bleu', cr: 'Ble', cat: 'Couleurs' },
    { fr: 'Vert', cr: 'Vè', cat: 'Couleurs' },
    { fr: 'Jaune', cr: 'Jòn', cat: 'Couleurs' },
    { fr: 'Blanc', cr: 'Blan', cat: 'Couleurs' },
    { fr: 'Noir', cr: 'Nwè', cat: 'Couleurs' },
    { fr: 'Jour', cr: 'Jou', cat: 'Temps' },
    { fr: 'Nuit', cr: 'Nwit', cat: 'Temps' },
    { fr: 'Matin', cr: 'Maten', cat: 'Temps' },
    { fr: 'Soir', cr: 'Aswè', cat: 'Temps' },
    { fr: 'Aujourd\'hui', cr: 'Jòdi', cat: 'Temps' },
    { fr: 'Demain', cr: 'Dèmen', cat: 'Temps' },
    { fr: 'Hier', cr: 'Yè', cat: 'Temps' },
    { fr: 'Maintenant', cr: 'Kounnyé-a', cat: 'Temps' },
    { fr: 'Toujours', cr: 'Toujou', cat: 'Temps' },
    { fr: 'Jamais', cr: 'Jamé', cat: 'Temps' },
    { fr: 'Souvent', cr: 'Souvan', cat: 'Temps' },
    { fr: 'Parfois', cr: 'Parfwa', cat: 'Temps' }
];

// 20+ DEVINETTES CRÉOLES
const riddles = [
    { 
        expr: 'Chapo fey', 
        hint: 'Expression pour dire qu\'il pleut fort', 
        answer: 'Il pleut des cordes', 
        explain: 'Littéralement "chapeau de feuille" - car on se couvre la tête avec des feuilles quand il pleut fort.' 
    },
    { 
        expr: 'Lapli ka tombé, sé pa lapli, sé pis bèf', 
        hint: 'Quand il pleut vraiment très fort', 
        answer: 'Il pleut des vaches', 
        explain: 'Expression imagée pour dire qu\'il pleut énormément - encore plus fort que "chapo fey".' 
    },
    { 
        expr: 'Pòté chapò ba mwen', 
        hint: 'Expression de respect', 
        answer: 'Chapeau / Bravo', 
        explain: 'Littéralement "porter un chapeau pour moi" - signe de grand respect et admiration.' 
    },
    { 
        expr: 'Bat briyé', 
        hint: 'Être très intelligent', 
        answer: 'Avoir l\'esprit vif', 
        explain: 'Littéralement "battre brûlé" - avoir l\'esprit qui bat vite, être très éveillé.' 
    },
    { 
        expr: 'Chaché krab', 
        hint: 'Chercher des ennuis', 
        answer: 'Chercher la bagarre', 
        explain: 'Littéralement "chercher des crabes" - aller chercher quelque chose de difficile et potentiellement dangereux.' 
    },
    { 
        expr: 'Manjé fwomaj', 
        hint: 'Être embarrassé', 
        answer: 'Être gêné', 
        explain: 'Manger du fromage = sentiment de gêne, expression de malaise.' 
    },
    { 
        expr: 'Fè do won', 
        hint: 'Faire la tête', 
        answer: 'Bouder', 
        explain: 'Littéralement "faire le dos rond" comme un chat fâché.' 
    },
    { 
        expr: 'Kò a kò', 
        hint: 'Face à face', 
        answer: 'En tête-à-tête', 
        explain: 'Littéralement "corps à corps" - être ensemble en privé.' 
    },
    { 
        expr: 'Bay kou ba', 
        hint: 'Donner un coup de main', 
        answer: 'Aider', 
        explain: 'Littéralement "donner un coup bas" mais signifie aider, donner un coup de main.' 
    },
    { 
        expr: 'Koupé tèt', 
        hint: 'Prendre une décision rapide', 
        answer: 'Trancher', 
        explain: 'Littéralement "couper la tête" - prendre une décision claire et rapide.' 
    },
    { 
        expr: 'Fè yich', 
        hint: 'Faire des caprices', 
        answer: 'Faire des manières', 
        explain: 'Expression pour quelqu\'un qui fait le difficile ou des histoires.' 
    },
    { 
        expr: 'Mété dlo an bouch', 
        hint: 'Faire saliver', 
        answer: 'Mettre l\'eau à la bouche', 
        explain: 'Quand quelque chose a l\'air délicieux.' 
    },
    { 
        expr: 'Pwan van', 
        hint: 'Prendre la fuite', 
        answer: 'S\'enfuir rapidement', 
        explain: 'Littéralement "prendre le vent" - partir très vite.' 
    },
    { 
        expr: 'Tchenbé rèd', 
        hint: 'Tenir bon', 
        answer: 'Résister, persévérer', 
        explain: 'Littéralement "tenir raide" - ne pas lâcher, continuer malgré les difficultés.' 
    },
    { 
        expr: 'Bay lang', 
        hint: 'Raconter des ragots', 
        answer: 'Bavarder, médire', 
        explain: 'Littéralement "donner la langue" - parler des autres, faire des commérages.' 
    },
    { 
        expr: 'Fè kongo', 
        hint: 'Faire semblant', 
        answer: 'Faire l\'innocent', 
        explain: 'Faire comme si on ne sait rien, jouer la comédie.' 
    },
    { 
        expr: 'Pran kou divan', 
        hint: 'Être surpris', 
        answer: 'Être choqué', 
        explain: 'Recevoir un choc, être pris de court.' 
    },
    { 
        expr: 'Pété fèy', 
        hint: 'Partir rapidement', 
        answer: 'Déguerpir', 
        explain: 'Littéralement "péter les feuilles" - s\'en aller très vite.' 
    },
    { 
        expr: 'Fè zepòl', 
        hint: 'Ignorer volontairement', 
        answer: 'Hausser les épaules', 
        explain: 'Montrer son indifférence ou son désintérêt.' 
    },
    { 
        expr: 'Mété tèt ansanm', 
        hint: 'Travailler ensemble', 
        answer: 'Collaborer', 
        explain: 'Littéralement "mettre les têtes ensemble" - réfléchir ensemble pour trouver une solution.' 
    }
];

// 15+ EXERCICES VARIÉS
const exercises = [
    {
        type: 'fill',
        question: 'Complétez avec la bonne particule : Man ___ manjé pen (Je mange du pain)',
        options: ['ka', 'té', 'kay'],
        correct: 0
    },
    {
        type: 'fill',
        question: 'Complétez : Man ___ alé (Je suis allé)',
        options: ['ka', 'té', 'kay'],
        correct: 1
    },
    {
        type: 'fill',
        question: 'Complétez : Man ___ alé dèmen (J\'irai demain)',
        options: ['ka', 'té', 'kay'],
        correct: 2
    },
    {
        type: 'fill',
        question: 'Comment dit-on "les enfants" ?',
        options: ['timoun', 'sé timoun', 'timoun-la'],
        correct: 1
    },
    {
        type: 'fill',
        question: 'Quel pronom pour "Je" ?',
        options: ['Ou', 'Man', 'I', 'Nou'],
        correct: 1
    },
    {
        type: 'fill',
        question: 'Comment dire "Je ne sais pas" ?',
        options: ['Man sav', 'Man pa sav', 'Man té sav', 'Man kay sav'],
        correct: 1
    },
    {
        type: 'order',
        question: 'Remettez les mots dans l\'ordre : "Je cherche un restaurant"',
        words: ['Man', 'ka', 'chèché', 'an', 'restoran'],
        correct: 'Man ka chèché an restoran'
    },
    {
        type: 'order',
        question: 'Remettez les mots dans l\'ordre : "Les enfants jouent"',
        words: ['Sé', 'timoun', 'ka', 'jwé'],
        correct: 'Sé timoun ka jwé'
    },
    {
        type: 'order',
        question: 'Remettez les mots dans l\'ordre : "Où vas-tu ?"',
        words: ['Koté', 'ou', 'ka', 'alé'],
        correct: 'Koté ou ka alé'
    },
    {
        type: 'order',
        question: 'Remettez les mots dans l\'ordre : "Je t\'aime beaucoup"',
        words: ['Mwen', 'enmen', 'w', 'anlo'],
        correct: 'Mwen enmen w anlo'
    },
    {
        type: 'fill',
        question: 'Quelle particule pour le futur ?',
        options: ['ka', 'té', 'kay', 'pa'],
        correct: 2
    },
    {
        type: 'fill',
        question: 'Comment dire "une belle maison" ?',
        options: ['an bèl kay', 'an kay bèl', 'bèl an kay', 'kay an bèl'],
        correct: 1
    },
    {
        type: 'order',
        question: 'Remettez les mots dans l\'ordre : "J\'ai très faim"',
        words: ['Mwen', 'fen', 'anlo'],
        correct: 'Mwen fen anlo'
    },
    {
        type: 'fill',
        question: 'Comment dire "Merci beaucoup" ?',
        options: ['Mèsi', 'Mèsi anlo', 'Anlo mèsi', 'Mèsi bien'],
        correct: 1
    },
    {
        type: 'order',
        question: 'Remettez les mots dans l\'ordre : "Il fait beau aujourd\'hui"',
        words: ['I', 'fè', 'bèl', 'tan', 'jòdi'],
        correct: 'I fè bèl tan jòdi'
    }
];
