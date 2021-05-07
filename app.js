alert('Welcome to our food factory!')

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





