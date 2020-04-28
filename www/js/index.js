(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady(){
        //Handle the Cordova/PhonGap pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        /* Cordova Camera configs require for us to appl the following code:
            navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);

            cameraError and cameraOptions were set to null
        */
        document.getElementById("btnTakePhoto").onclick = function() {
            navigator.camera.getPicture(function(imageUri){
                var lastPhotoContainer = document.getElementById("lastPhoto");

                alert("Looking good!");

                lastPhotoContainer.innerHTML = "<img src='"+ imageUri +"' style='width: 75%;' />";

            }, null, null);
            console.log(navigator.camera);
        }
    };

    function onPause() {
        //TODO: This application has been suspended. Save application state here
    };

    function onResume() {
        // TODO: This aplication has been reactivated. Restore application state here.
    };


}) ();