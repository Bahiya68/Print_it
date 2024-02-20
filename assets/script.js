// Ajout des slides

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// initialisation de la variable numero du slide
let numero = 0;

// Etape 1 Ajout d'écouteur d'évènements sur le Click sur des fléches droite et gauche

document.querySelector(".arrow_right").addEventListener("click", () => {
  ChangeSlide(+1);
  console.log("J'ai cliqué sur fléche droite");
});

document.querySelector(".arrow_left").addEventListener("click", () => {
  ChangeSlide(-1);
  console.log("J'ai cliqué sur fléche gauche");
});

// On défini et on fait appel à la classes "dots"
const dotsDiv = document.querySelector(".dots");

// Affichage des bullets
for (let i = 0; i < slides.length; i++) {
  const bullet = document.createElement("span"); // création de l'élément "span" qui vont contenir les bullets
  bullet.classList.add("dot"); // on ajoute la classe "dot" dans les "span" crée
  dotsDiv.appendChild(bullet); // on insére "bullet" à la classe parent "dotsDiv"

  if (i === 0) {
    bullet.classList.add("dot_selected");
  }
}

// Fonction pour faire défiler les Images du carousel
// fonction qui gére les bullets
function ChangeSlide(sens) {
  const dots = document.getElementsByClassName("dot"); // On apelle la classe "dot"
  dots[numero].classList.remove("dot_selected"); //supprime le bullet de la 1ere slide lorsqu'elle n'est plus active

  numero = numero + sens; //nouvelle valeur de la variable numero (on lui affecte le parametre "sens")

  if (numero > slides.length - 1) {
    numero = 0;
  } // si n > au nbre de slides ds le tbleau alors on reviens à la premiere slide
  if (numero < 0) {
    numero = slides.length - 1;
  } // si n < à la 1ere slide alors on reviens à la derniere slide

  dots[numero].classList.add("dot_selected"); // affichage des bullet actif sur le slide actif

  // pour récupérer les Images
  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[numero]["image"];

  // pour récupérer les textes
  document.getElementById("text").innerHTML = slides[numero]["tagLine"];
}
