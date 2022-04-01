console.log('connecté');
let buttons = document.querySelectorAll('button'); //je declare les variables
let afficheur = document.getElementById('afficher');

for(let element of buttons){
element.addEventListener('click',function(){//je donne l'action lors du click
    manageClic(this)});
    console.log('bouton cliqué');
};

function manageClic(el){
    switch(el.innerText){//le switch est comme un if 
        case "C"://je cible la touche
        afficheur.innerText = "";//fonction du C est effacer
        break;//sort de mon switch
        case "<-":
            //afficheur.innerText = "";
            afficheur.innerHTML = afficheur.innerText.slice (0, -1)
            break;
        case "=":
            result = eval(afficheur.innerText);
            afficheur.innerText += "="+result //je concatene 
            //(le + sert à concatener lorsqu'il est entre deux caracteres autre que des chiffres)-concatener c'est comme si j'ajouter nom+prenom=patronyme
            break;
        default:
            afficheur.innerHTML += el.innerText;//les chiffres apparaissent dans l'afficheur en effacant le chiffre d'avant
        
    } 
}