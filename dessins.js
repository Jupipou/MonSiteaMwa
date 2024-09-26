const carouselSlide = document.getElementById('carouselSlide');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselTitle = document.getElementById('carouselTitle');

let counter = 0;
const titles = ["OG Breakdancing Cat", "Chat n°2", "Chat n°3", "Pk vivre 7 vies", "Chat touille (hihihi)", "Chat-rmeur","Insomiaou","Chat-larmant", "Chat-grin", "Chat-nniversaire", "Chat-mical", "Chat-rtiste (c moi XD)", "Chat-ponais (bon'dourhun)","Chat-llahu Akbar ?","Chat-peau de fête -_-", "Chat-man", "Chiemposteur !", "\u2661", "Mehdi n°1", "Mehdi n°2", "Mehdi n°3", "Mehdi n°4", "Mehdi n°5"]; // Titles for each image
const size = carouselItems[0].clientWidth;

        // Mettre à jour le titre
        function updateTitle() {
            carouselTitle.textContent = titles[counter];
        }

        // Bouton suivant
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (counter >= carouselItems.length - 1) return; // Empêcher de dépasser la dernière image
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';
            updateTitle(); // Mettre à jour le titre
        });

        // Bouton précédent
        document.getElementById('prevBtn').addEventListener('click', () => {
            if (counter <= 0) return; // Empêcher de dépasser la première image
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';
            updateTitle(); // Mettre à jour le titre
        });

        // Ajuster le carrousel si la fenêtre est redimensionnée
        window.addEventListener('resize', () => {
            carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';
        });
