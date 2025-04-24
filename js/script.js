document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.imageInput');
    const images = document.querySelectorAll('.game');

    // Add event listeners to existing inputs
    inputs.forEach((input, index) => {
        input.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    images[index].src = e.target.result;
                    input.style.display = 'none'; // Hide the file input
                };
                reader.readAsDataURL(file);
            }
        });
    });

    const twoplayersSection = document.querySelector('#twoplayers');
    const addBoxButton = document.querySelector('#addBoxButton');

    addBoxButton.addEventListener('click', () => {
        // Create a new .box element
        const newBox = document.createElement('div');
        newBox.classList.add('box');

        // Add the file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.classList.add('imageInput');
        fileInput.accept = 'image/*';

        // Add the image preview
        const img = document.createElement('img');
        img.classList.add('game');
        img.alt = 'Preview will appear here';

        // Add the text inputs
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.classList.add('gameinfo');
        nameInput.placeholder = 'Nom du jeu';

        const playersInput = document.createElement('input');
        playersInput.type = 'text';
        playersInput.classList.add('gameinfo');
        playersInput.placeholder = 'Nombre de joueurs';

        const ageInput = document.createElement('input');
        ageInput.type = 'text';
        ageInput.classList.add('gameinfo');
        ageInput.placeholder = 'Age';

        // Append all elements to the new .box
        newBox.appendChild(fileInput);
        newBox.appendChild(img);
        newBox.appendChild(nameInput);
        newBox.appendChild(playersInput);
        newBox.appendChild(ageInput);

        // Append the new .box to the #twoplayers section
        twoplayersSection.appendChild(newBox);

        // Add event listener for the new file input
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                    fileInput.style.display = 'none'; // Hide the file input
                };
                reader.readAsDataURL(file);
            }
        });
    });

    const screenshotButton = document.querySelector('#screenshotButton');

    screenshotButton.addEventListener('click', () => {
        html2canvas(document.body).then((canvas) => {
            // Convert the canvas to an image
            const screenshot = canvas.toDataURL('image/png');

            // Create a link to download the screenshot
            const downloadLink = document.createElement('a');
            downloadLink.href = screenshot;
            downloadLink.download = 'screenshot.png';
            downloadLink.click();
        });
    });
});