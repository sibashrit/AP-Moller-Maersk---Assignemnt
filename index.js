(function() {
    const data = {
        numbers: [
            {number: 1, color: '#000000'},
            {number: 2, color: '#2B8EAD'},
            {number: 3, color: '#333333'},
            {number: 4, color: '#6F98A8'},
            {number: 5, color: '#FF0FFF'},
            {number: 6, color: '#BFBFBF'},
            {number: 7, color: '#EFEFEF'},
            {number: 8, color: '#2F454E'},
            {number: 9, color: '#72C3DC'},
        ],
    }
    Object.freeze(data);
    
    function randomizeArray() {
        const details = [...data.numbers];
        details.sort(() => 0.5 - Math.random());
        fillScreen(details);
    }

    function sortArray() {
        const details = [...data.numbers];
        details.sort((a,b) => a-b);
        fillScreen(details);
    }

    function fillScreen(details) {
        let htmlContent = '';
        for(let i=0; i<details.length; i++) {
            htmlContent += `
            <div class="content" style="background-color: ${details[i].color}; border-left: 10px solid ${details[i].color};">
                ${details[i].number}
            </div>`;
        }
        document.getElementById('root').innerHTML = htmlContent;
    }

    randomizeArray();

    document.getElementById('button-shuffle').addEventListener('click', randomizeArray);
    document.getElementById('button-sort').addEventListener('click', sortArray);
})();