let countEl = document.getElementById('count-el')

let entryEl = document.getElementById('entry')

let count = 0

function increment(){
  count += 1
  countEl.textContent = count
}

function save(){
  entryEl.textContent = entryEl.textContent + count + " - "
  count = 0
  countEl.textContent = count
}
