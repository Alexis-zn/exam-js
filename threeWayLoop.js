const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for(let i = 0; i < tab.length; i++) {
  // console.log(`${tab[i]}, length: ${tab[i].length}`)
} 


let i = 0
for(elem of tab) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
  i++
}


tab.forEach((elem) => {
  // console.log(`${tab[i]}, length: ${tab[i].length}`)
})