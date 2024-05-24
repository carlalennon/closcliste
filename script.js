const poemDisplay = document.getElementById('poem');
const poemInput = document.getElementById('poem-type');

poemInput.addEventListener('input', () => {
    const arrayPoem = poemDisplay.querySelectorAll('span');
    const arrayValue = poemInput.value.split('');

    arrayPoem.forEach((characterSpan, index) => {
        const arrayPoem = poemDisplay.querySelectorAll('span');
        const arrayValue = poemInput.value.split('');
        arrayPoem.forEach((characterSpan, index) => {
            const character = arrayValue[index];
            if (character == null) {
                characterSpan.classList.remove('correct');
                characterSpan.classList.remove('incorrect');
            } else if (character == characterSpan.innerText) {
                characterSpan.classList.add('correct');
                characterSpan.classList.remove('incorrect');
            } else {
                characterSpan.classList.remove('correct');
                characterSpan.classList.add('incorrect');
            }
        });
    });
});

function getPoem() {
    return fetch('poems.json')
        .then(response => response.json())
        .then(data => data.danta["2"].poem)
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayPoem(poem) {
    poemDisplay.innerHTML = ''; // Clear the poemDisplay
    poem.split("").forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character === '\n' ? '\n' : character; // Replace newline characters with a space
        poemDisplay.appendChild(characterSpan);
    });
}

getPoem().then(poem => displayPoem(poem));