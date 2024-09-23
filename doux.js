const poems = {
    1: [
        "Ce lundi passe tranquillement,",
        "Et me rappelle nos premiers sentiments.",
        "Je t'aime, toi mon rayon de lumière,",
        "Qui éclaire mes lundis ordinaires."
    ],
    2: [
        "Ton amour est une douce caresse,",
        "Qui balaie mes doutes avec tendresse.",
        "Comme chaque mardi, je pense à toi, ",
        "À tes petites fesses et à la chaleur de ta voix"
    ],
    3: [
        "En plein cœur de la semaine agitée,", 
        "Je trouve un réconfort mérité,", 
        "Ici et partout où je vais,", 
        "Car je t'ai toi, dans mes pensées."         
    ],
    4: [
        "Tes baisers, comme un souffle sur ma peau,",
        "Rendent mes jeudi intenses et nouveaux.",
        "À tes côtés, le temps ralentit,",
        "Chaque instant devient une douce alchimie."
    ],
    5: [
        "Le vendredi s'habille de promesses légères,",
        "Et nos rire chassent les pensées involontaires.",
        "Ce jour murmure que le repos est proche,",
        "Et mon cœur, toujours plus, s'accroche."
    ],
    6: [
        "Dans les rayons de ce jour si doux,",
        "C'est toi que je veux près de moi, partout.",
        "Ton sourire est mon plus beau trésor,",
        "Qui éclaire mes jours encore et encore."
    ],
    7: [
        "Le dimanche s'étale, calme et suspendu,",
        "Entre tes bras, je trouve un espace inconnu.",
        "Rien ne presse, rien ne nous éloigne,",
        "C'est dans ces moments que mon cœur témoigne."
    ]
};

// Fonction pour obtenir le jour de la semaine
function getDayOfWeek() {
    const today = new Date();
    return today.getDay() || 7; // getDay() retourne 0 pour dimanche, donc on retourne 7 pour dimanche
}

// Fonction pour afficher le poème vers par vers
function displayPoem() {
    const day = getDayOfWeek();
    const poem = poems[day];
    const poemContainer = document.getElementById('poem-container');

    let currentVerse = 0;

    function showNextVerse() {
        if (currentVerse < poem.length) {
            const verseElement = document.createElement('div');
            verseElement.innerText = poem[currentVerse];
            verseElement.style.opacity = 0;
            poemContainer.appendChild(verseElement);

            // Animation d'apparition du texte
            setTimeout(() => {
                verseElement.style.opacity = 1;
                verseElement.style.transition = "opacity 1s ease-in-out";
            }, 100);

            // Passe au vers suivant après un délai
            currentVerse++;
            setTimeout(showNextVerse, 2000); // Délai de 2 secondes entre chaque vers
        }
    }

    showNextVerse();
}

// Appel de la fonction lorsque la page est chargée
window.onload = displayPoem;

// Pétales //

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Position aléatoire horizontale
    petal.style.left = Math.random() * window.innerWidth + 'px';
    
    // Taille aléatoire pour varier les pétales
    const size = Math.random() * 10 + 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Vitesse aléatoire
    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = duration + 's';
    
    // Ajoute les pétales à la page
    document.querySelector('.petals-container').appendChild(petal);

    // Retire les pétales après leur chute
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Génère un nouveau pétale toutes les 300ms
setInterval(createPetal, 300);