const poemDisplay = document.getElementById('poem');

function generatePoem() {
    fetch('poems.json')
        .then(response => response.json())
        .then(data => {
            const poemBody = data.danta["1"].poem;
            poemDisplay.innerHTML = poemBody.replace(/\n/g, '<br>'); // replace newline characters with HTML line breaks for proper display
            console.log(poemBody);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

generatePoem();