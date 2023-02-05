// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function  destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
   const newCatArray = [...cats, name]
   return newCatArray
}

function prependCat(name) {
   const newCatArray = [name, ...cats]
   return newCatArray
}

function removeLastCat() {
   const copyCats = cats.slice(0, -1)
    return copyCats
}

function removeFirstCat() {
const copyCats = cats.slice(1)
return copyCats
}