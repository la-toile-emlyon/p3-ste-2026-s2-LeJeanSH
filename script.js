/* Une fonction qui récupère la première lettre du prenom de l'utilisateur qui a laissé un avis et la transforme en PP. */

function premiereLettre(nom) {
    return nom[0].toUpperCase();
}

/* Une fonction pour swipper le contenu des fonctionnalités*/ 


const contenuSectionAides= `<div class="flex space-between align-center" id="sectionaides">
                
                <div class="w30">

                    <h3 class="mgb30">Trouvez les aides adaptées à <span class="clr-bleu">votre situation</span></h3>
                    <a href="" class="txt-none clr-dark pad-foncti br-9999 clr-btn-fonction">Aides</a>
                    <p class="mgt30">Ne passez plus à côté d'un dispositif qui pourrait vous aider.</p> 

                    <div class="mgt50 flex gap20">

                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-light-bleu"></i> <p>Accès rapide aux organismes concernés</p></div>
                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-light-bleu"></i> <p>Démarches guidées</p></div>
                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-light-bleu"></i> <p>Accès rapide aux organismes concernés</p></div>
                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-light-bleu"></i> <p>Accès rapide aux organismes concernés</p></div>

                    </div>
                </div>

                <div class="w60">
                    <img src="asset/ecran aides.png" alt="" class="w100">
                </div>
        </div>`;
        const contenuSectionActivites = `<div class="flex space-between align-center" id="sectionactivites">
                
                <div class="w30">

                    <h3 class="mgb30">Découvrez des activités <span class="clr-green">accessibles autour de vous</span></h3>
                    <a href="" class="txt-none clr-dark pad-foncti br-9999 bg-green">Activités</a>
                    <p class="mgt30">Sortir, apprendre et créer du lien sans se ruiner.</p> 

                    <div class="mgt50 flex gap20">

                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-green-fonction"></i> <p>Activités gratuites ou peu coûteuses</p></div>
                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-green-fonction"></i> <p>Événements locaux</p></div>
                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-green-fonction"></i> <p>Recherche par centres d'intérêt</p></div>
                        <div class="flex align-center gap20"><i class="ph-fill ph-check-circle clr-green-fonction"></i> <p>Opportunités mises à jour régulièrement</p></div>

                    </div>
                </div>

                <div class="w60">
                    <img src="asset/ecran activites.png" alt="" class="w100">
                </div>
        </div>`

const sectionFonctionnalités = document.getElementById("sectionfonctionnalites");



var swiper = new Swiper(".mySwiper", {
      rewind: true,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });




















