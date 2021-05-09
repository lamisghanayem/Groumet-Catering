alert('Welcome to our food factory!')
// first function using the first method of declaration
function getFoodKind (){
var foodKind = prompt('To check if your kind of food is available, add your kind of food')

if (foodKind === 'chinese') { alert('Chinese food is available') }
else if (foodKind === 'indian') { alert('Indian food is available') }
else if (foodKind === 'italian') { alert('Italian food is available') }
else { alert('Not available') }


var answer = prompt('Do you have a VIP card?')
var code
if (answer === 'yes') {
  code = prompt('Enter your VIP code')
  while(code !== '1234' && code !== '0000') {
    code = prompt('Wrong code, Try again.')
  }
}
else { alert('Join us!') }

}

getFoodKind()




alert('Welcome to our food factory!')

function getImage (){

var meal
var image = ' '
meal = prompt (' What meals do you want to see? Breakfast, Lunch, Dinner? ')

if (meal === 'breakfast') {
var MealCount = prompt ('How many meals do you want to see?')

for ( var x=1; x <= MealCount; x++)
document.write('<img src="https://images.pexels.com/photos/4109384/pexels-photo-4109384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')
}

else if (meal === 'lunch'){
var MealCount = prompt ('How many meals do you want to see?')

for ( var x=1; x <= MealCount; x++)
document.write('<img src="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')
}

else if (meal === 'dinner')
{
  var MealCount = prompt ('How many meals do you want to see?')
 
  for ( var x=1; x <= MealCount; x++)  
  document.write('<img src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')
}

else 
 alert ('Please indicate the name of the meal right')
 
}

getImage()

alert('Welcome to our food factory!')
var meal
var image = ' '

meal = prompt (' What meals do you want to see? Breakfast, Lunch, Dinner? ')


if (meal === 'breakfast')

  {
  var MealCount = prompt ('How many meals do you want to see?')

  for ( var x=1; x <= MealCount; x++)
  document.write('<img src="https://images.pexels.com/photos/4109384/pexels-photo-4109384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')
}

else if (meal === 'lunch'){

  var MealCount = prompt ('How many meals do you want to see?')
  for ( var x=1; x <= MealCount; x++)
document.write('<img src="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')
}

else if (meal === 'dinner')
{
  var MealCount = prompt ('How many meals do you want to see?')
 
  for ( var x=1; x <= MealCount; x++)  
  document.write('<img src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')

}
 


git 