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

 // lab 6 

let q1 = prompt('do you have a job' , 'Yes Or No')
let q3 = prompt('are you married ', 'Yes Or No')
let q2 = prompt('do you have children', 'Yes Or No')

let answerArray = []


function checkAnswer(answer){

     if (answer  === ''){
          answer = 'invalid'
     }

     answerArray.push(answer)
     return answerArray
}

checkAnswer(username)
checkAnswer(gender)
checkAnswer(username)
checkAnswer(q1)
checkAnswer(q2)
checkAnswer(q3)

console.log( answerArray)
