const inputTextArea = document.getElementById('input-textarea')
const characCount = document.getElementById('charac-count')
const wordCount = document.getElementById('word-count')

inputTextArea.addEventListener('input', ()=> {
    // Counts number of characters 
    characCount.textContent = inputTextArea.value.length
    // Remove whitespaces from both the sides of the string
    let txt = inputTextArea.value.trim()
    // Split text at spaces into array of substrings
    // Filter empty string 
    // Count length of this array
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length 
})