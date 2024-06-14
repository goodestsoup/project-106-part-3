var cat = 0;
var dog = 0;
var lion = 0;
var elepant = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xSBZYK81n/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;

      document.getElementById("animal_detected").innerHTML = 'I can hear - '+results[0].label;
      document.getElementById("animal").innerHTML = 'detected dog - '+dog+'detected cat -'+cat+'detected elephant -'+elepant+'detected lion - '+lion;
      document.getElementById("animal_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      img = document.getElementById('animal_img');

      if (results[0].label == "Dog barking"){
        img.src = 'dog.jpg';
        dog = dog+1;
      }
      else if (results[0].label == "Cats meowing"){
        img.src = 'cat.png';
        cat = cat+1;
      }
      else if (results[0].label == "Lions roaring"){
        img.src = 'lion.jpg';
        lion = lion+1;
      }
      else if (results[0].label == "Elephants trumpeting"){
        img.src = 'elephant.jpg';
        elepant = elepant+1;
      }
      else{
        img.src = 'listen.gif';
      }
    }
  }
