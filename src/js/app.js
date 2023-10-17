export function character(character) {
  for (let i = 0; i < character.length; i++) {
    if (character[i].health > 50) {
      return 'healthy'
    } else if (character[i].health > 15 && character[i].health <= 50) {
      return 'wounded'
    } else {
      return 'critical'
    }
  }
}