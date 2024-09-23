
           var visited = localStorage.getItem('visited');
if (!visited) {
    alert('Pour profiter pleinement du site, veuillez autoriser la lecture automatique');
  localStorage.setItem('visited', true);
} 

     // Sélection des éléments
     const myButton = document.getElementById('myButton');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');
        const bisousBtn = document.getElementById('bisousBtn');
        const aubergineBtn = document.getElementById('aubergineBtn');
        const argentBtn = document.getElementById('argentBtn');

        // Ouvrir le popup au clic sur "Continuer"
        myButton.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });

        // Fermer le popup après un clic sur "Bisous"
        bisousBtn.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
            window.location.href = "unlockedhp.html"; // Lien vers la page suivante
        });

        // Afficher une alerte au clic sur "Aubergine"
        aubergineBtn.addEventListener('click', () => {
            alert("Tu m\'as prise pour ta pute ou kwa ?! Try again");
        });

        // Rediriger vers PayPal au clic sur "Argent"
        argentBtn.addEventListener('click', () => {
            window.open("https://paypal.me/julietteaugem?country.x=FR&locale.x=fr_FR", "_blank"); // Lien vers PayPal
            window.location.href = "unlockedhp.html"; // Redirige la page actuelle vers unlockedhp.html
});


        // Fermer le popup et l'overlay si on clique à l'extérieur
        overlay.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });