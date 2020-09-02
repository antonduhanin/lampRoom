function enterRoom() {
    document.getElementById("room").setAttribute("disabled","disabled");
    document.getElementById("state").style.visibility = "visible";
    sendRequst();
}

function sendRequst() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if(JSON.parse(this.responseText) === true){
                document.getElementById("image").innerHTML = '<image' +
                    ' id="turnOn" src="/./images/turnOn.JPG"></image>';
            }else {
                document.getElementById("image").innerHTML = '<image' +
                    ' id="turnOn" src="/./images/turnOff.JPG"></image>';
            }
            setTimeout(function(){
                sendRequst();
            }, 5000);

        }
    };
    xhttp.open("GET", "lamp", true);
    xhttp.send();
}

function changeState() {
    document.getElementById("state").setAttribute("disabled","disabled");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            if(JSON.parse(this.responseText) === true){
                document.getElementById("image").innerHTML = '<image' +
                    ' id="turnOn" src="/./images/turnOn.JPG"></image>';
            }else {
                document.getElementById("image").innerHTML = '<image' +
                    ' id="turnOn" src="/./images/turnOff.JPG"></image>';
            }
            document.getElementById('state').removeAttribute("disabled");
        }
    };

    xhr.open("POST", 'lamp', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    checkState(xhr);
}

function checkState(xhr) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var state = JSON.parse(this.responseText);
            var sendObj  = state ? {"value":false} : {"value":true};
            xhr.send(JSON.stringify(sendObj));
        }
    };
    xhttp.open("GET", "lamp", true);
    xhttp.send();
}