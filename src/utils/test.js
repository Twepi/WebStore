const fun = () => {
  return "GO FUCKING KILL YOURSELF YOU RETARTED PIECE OF SHIT BRAINSLUT NONSENSE"
}

console.log("TEST 1 NOTHING LIKE YOU SHOULD BE HERE")

async function dying () {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fun())
    }, 3000);
  })
}

console.log('lallalallal')

dying().then(console.log)