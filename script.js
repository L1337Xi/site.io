
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink');
    const cameraFeed = document.getElementById('cameraFeed');

    if (aboutLink) {
        aboutLink.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent default link behavior
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (cameraFeed) {
                    cameraFeed.srcObject = stream;
                    cameraFeed.style.display = 'block';
                }
            } catch (err) {
                console.error("Error accessing camera: ", err);
                alert("Could not access the camera. Please make sure you have granted permission.");
            }
        });
    }
});
