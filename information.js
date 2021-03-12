let prenom = 'Jean'
let nom = 'Bob'
let age = 30
const information = (prenom, nom, age) => {
  if( age > 18 ) {
    return (`prenom: ${prenom}\n nom: ${nom}\n age: ${age}\n vous êtes majeur depuis ${age % 18}ans `)
  } else {
    return (`prenom: ${prenom}\n nom: ${nom}\n age: ${age}\n Vous serez majeur dans ${18 % age} ans` )
  }
}
console.log(information(prenom, nom, age))