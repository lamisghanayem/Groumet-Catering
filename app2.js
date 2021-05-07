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

else (meal === 'dinner')
{
  var MealCount = prompt ('How many meals do you want to see?')
  for ( var x=1; x <= MealCount; x++)
  document.write('<img src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >')
}
 