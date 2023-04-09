let username = prompt("Enter your Name Please ");
let gender = prompt("Choose your gender Please","male or female");
let age = prompt("Enter your Age Please")

if( age <= 0){
     alert("Not allowed to enter because of your age")
}

let conf = confirm("do you want to skip the welcoming message ?")

if(conf == false){
     if(gender == "male"){

          alert(`hello Mr ${username} `)
     }
     else if(gender == "female"){
          alert(`hello Ms ${username} `)
     }
     else{
          alert(`hello ${username} `)

     }
}

