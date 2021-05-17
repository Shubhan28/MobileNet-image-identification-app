function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function echo(message)
{
  console.log(message);
}
function modelLoaded()
{
    echo("Model Loaded!!");
}
function draw()
{
  image(video, 0, 0, 300, 300);
  classifier.classify(video, got_results);
}
function got_results(error , results)
{
  if(error)
  {
    echo("Could not recognise the image!!");
  }else{
    echo(results);
    document.getElementById("result_object").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}




