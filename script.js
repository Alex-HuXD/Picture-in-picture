const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream,pass to vedio element,then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        // Catch error here
        console.log('selectMediaStrem error',  error)
    }
}

button.addEventListener('click',async () => {
    //Disable button
    button.disabled = true;
    //Start p in p
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});




//On load
selectMediaStream();