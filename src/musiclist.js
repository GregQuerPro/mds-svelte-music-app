import {writable} from "svelte/store";

export const musicList = writable(
    [
        {
            image: "All_Thats_Left.jpg",
            audio: "All_Thats_Left.mp3",
            name: "All Thats Left",
            artist: "James Primate"
        },
        {
            image: "Black_Moonlight.png",
            audio: "Black_Moonlight.mp3",
            name: "Black Moonlight",
            artist: "Marc Therrien "
        },
        {
            image: "Kayava.jpg",
            audio: "Kayava.mp3",
            name: "Kayava",
            artist: "Lydia Esrig"
        },
    ]
);

/*
localStorage.getItem(key) => retourne la valeur associée sous forme de string
localStorage.setItem(key, value) => ajoute à l'objet LocalStorage 
localStorage.key(index) => retourne la clé correspondant à l'index
localStorage.clear() => vide tous les items qui auront pu être ajouté à l'objet localStorage


Cette boucle for permet d'accéder à toutes les clés ainsi que les valeurs contenu dans l'objet localStorage

for (let key of Object.keys(localStorage)) {
    console.log(key, localStorage.getItem(key))
}


L'évènement Storage se déclenche à chaque fois que l'objet localStorage reçoit une modification. Toutefois cet évènement ne s'exécutera que dans une page autre de celle d'où s'est réalisé la modification de l'object localStorage

Cet évènement comprend plusieurs propriétés relatives par exemple à la clé de l'item ajouté, à son ancienne valeur, à sa nouvelle valeur, à l'url d'où provient la modification ainsi qu'à l'ensemble des items contenus dans l'objet localStorage sous la forme de couple clé/valeur

window.onstorage = (event) => {
    console.log(event)
}

window.addEventListener('storage', function(event){
    console.log(event)
})


Utilité :
- sauvegarde des valeurs écrites par l'utilisateur dans un formulaire pour que si il quitte la page et revienne dessus, tout ce qu'il avait déjà écrit soit toujours présent (meilleur taux de conversion)
- possibilité d'enregistré les valeurs du dark mode si on ne veut pas qu'ils soient enregistrés dans la base de donnée pour des raisons de performance
- Pour sessionStorage on peut enregistrer la position que l'utilisateur avait sur la page avant qu'il continue où il en était sur cette page lors d'un rafrachissement ou d'un retour à cette page 

*/