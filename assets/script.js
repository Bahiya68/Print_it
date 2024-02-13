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

// initialisation de la variable
let numero = 0;

console.log(slides);

// Action Click sur les fléches droite et gauche

document.querySelector(".arrow_right").addEventListener("click", () => {
  ChangeSlide(+1);
  console.log("fléche droite");
});

document.querySelector(".arrow_left").addEventListener("click", () => {
  ChangeSlide(-1);
  console.log("fléche gauche");
});

const dotsDiv = document.querySelector(".dots"); // Affichage du bullets

for (let i = 0; i < slides.length; i++) {
  const bullet = document.createElement("span");
  dotsDiv.appendChild(bullet);
  bullet.classList.add("dot"); // affiche les bullet inactif (vide)

  if (i === 0) {
    bullet.classList.add("dot_selected");
  }

  console.log(bullet);
}

// Image et text du carousel

function ChangeSlide(sens) {
  const dots = document.getElementsByClassName("dot");
  dots[numero].classList.remove("dot_selected");

  numero = numero + sens;

  if (numero > slides.length - 1) {
    numero = 0;
  }
  if (numero < 0) {
    numero = slides.length - 1;
  }

  // affiche les bulles selectionné

  dots[numero].classList.add("dot_selected"); // affichage des bullet actif
  console.log(dots);

  // pour récupérer les Images et texts

  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[numero]["image"];
  document.getElementById("text").innerHTML = slides[numero]["tagLine"];

  {
    console.log(sens);
  }
}
