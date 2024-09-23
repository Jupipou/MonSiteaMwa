//<!-- le script du countdown de mon anniv -->//

            var countDownDate = new Date("Sep 10 2025").getTime();
        
            var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("timer1").innerHTML = days + " jours " + "avou m'in anniverchaire !!";
        
            }, 1000);

//<!-- le script du countdown de l'anniv de Mehdi -->//

            var countDownDateM = new Date("Sep 11 2025").getTime();
        
            var xM = setInterval(function() {
            var now = new Date().getTime();
            var distanceM = countDownDateM - now;
            var days = Math.floor(distanceM / (1000 * 60 * 60 * 24));
        
            document.getElementById("timer2").innerHTML = days + " jours " + "avou t'in anniverchaire !!!";
        
            }, 1000);

            
