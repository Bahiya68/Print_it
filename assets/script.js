const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Affichage des fléches 

document.querySelector(".arrow_right").addEventListener("click", () => {
    console.log("tu as cliqué sur la fléche droite")

 })

document.querySelector(".arrow_left").addEventListener("click", () => {
    console.log("tu as cliqué sur la fléche gauche")

 })

 // Affichage du bullets

const dotsDiv = document.querySelector(".dots");

    for (let i = 0; i < slides.length; i++) {
        const bullet = document.createElement('span');
        dotsDiv.appendChild(bullet);
        bullet.classList.add("dot");
        bullet.classList.add("dot_selected");
    }

