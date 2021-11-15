let age = document.getElementById('age');

for (let i = 0 ; i < 60 ; i++){
    age.innerHTML += "Le capitaine a " + i + "ans";
    if(i < 18){
        age.innerHTML += ", le capitaine est jeune";
    }
    else if(i < 50 ) {
        age.innerHTML += ", le capitaine n'est pas très vieux";
    }
    else {
        age.innerHTML += ", Le capitaine est vieux"
    }
}

