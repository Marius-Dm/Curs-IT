`use strict`

const bunel = a =>{
    const salut = "Salut din bunel";
    console.log(salut);
    const parinte = b =>{
        const salut2 = "Salut din parinte";
        console.log(salut2);
        const copil = c =>{
            const salut3 = "Salut din copil";
            console.log(salut3);
            const nepot = d =>{
                console.log(d);
            }
            nepot(c)
        }
        copil(b);
    }
    parinte(a);
}

bunel("Salut, cine n-ai fi");

const blog = (postari,tipStatut = "utilizator") =>{
    if(tipStatut === 'utilizator'){
        console.log(postari);
    }

    const admin = (post, statut) =>{
        if(tipStatut === "admin"){
            console.log(`Acest admin poate edita si sterge din ${postari}`);
        }
        const manager = (postare, statut) =>{
            if (tipStatut === "manager") {
                console.log(`Acest manager poate adauga ${postare}`);   
            }
        }
        manager(post, statut);
    }
    admin(postari,tipStatut);
}
const postari = ['postare1 postare2 postare3']
blog(postari, "manager")

const unu = (callBack) =>{
    setTimeout(() =>{
        console.log(1);
        callBack();
    }, 2000)
}

// unu();

const doi = () =>{
    console.log(2);
}

// doi();

// unu(doi);




//  ====================== Obiecte ======================

// Obiect literal

const  caine = {
    porecla: "Gromopeotr",
    rasa: "Corghi"
}

// Apelarea obiectului

console.log(caine.porecla);
console.log(caine["rasa"]);
caine.porecla = "Tuzik";
console.log(caine);

const student = {
    nume: 'Dumitras',
    prenume:'Marius',
    casatorit: false,
    virsta: 21,
    hobby: () => {
        console.log('Imi place sa ascut muzica')
    },
    talente:{
        skillsIT: 'C/C++, Python, C#, HTML, JavaScript, CSS, Php, Java',
        social: 'introvert, extrovert, just chill guy'
    }
}

// console.log(student.talente.social);
for (const studentKey in student){
    // console.log(studentKey);
    console.log(student[studentKey])
}

student.hobby();
student.patronimic = "Monty";
console.log(student);
for (const studentKey in student){
    console.log(student[studentKey]);
}

for (const studentKey in student) {
    console.log(`${studentKey} = ${student[studentKey]}`);
    }
