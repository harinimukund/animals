function start_classification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    sound_model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ieghFl-sB/.json", model_ready);
}

function model_ready() {
    sound_model.classify(get_results)
}

function get_results(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        sound_name = r[0].label;
        sound_accuracy = (r[0].confidence * 100).toFixed(2);

    
   
        document.getElementById("sound_name").innerHTML = "I can hear " + sound_name;
        document.getElementById("sound_accuracy").innerHTML = "Accuracy:" + sound_accuracy + "%";

        img1 = document.getElementById("hearing");
        

        if (sound_name == "bark") {
            img1.src = "dog.gif";
        } else if (sound_name == "meow") {
            img1.src="cat.gif";
        }
        else{
            img1.src= "hearing.gif"
        }


    }
}