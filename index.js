function scuberGreetingForFeet(Distance){
  // Write your code here!
  if (Distance <= 400) {
    return 'This one is on me!'
  }
  else if (Distance > 2000 && Distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (Distance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (city !== 'NYC') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return 'Thank you so much.'
  }
  else if (tip === 'not as generous') {
    return 'Thank you.'
  }
  else if (tip = 'anything else') {
    return 'Bye.'
  }
}