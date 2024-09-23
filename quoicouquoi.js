function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Position aléatoire horizontale
    petal.style.left = Math.random() * window.innerWidth + 'px';
    
    // Taille aléatoire pour varier les pétales
    const size = Math.random() * 30 + 30;
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
