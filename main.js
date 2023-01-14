function starttesting(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eyLjv-whE/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var red=Math.floor(Math.random()*255)+1;
        var green=Math.floor(Math.random()*255)+1;
        var blue=Math.floor(Math.random()*255)+1;

        document.getElementById("earpurpose").innerHTML="i can hear-"+results[0].label;
        document.getElementById("smartness").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("earpurpose").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("smartness").style.color="rgb("+red+","+green+","+blue+")";

        img1=document.getElementById("guy1")
        img2=document.getElementById("guy2")
        img3=document.getElementById("guy3")
        img4=document.getElementById("guy4")

        if(results[0].label=="clap"){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(results[0].label=="change"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(results[0].label=="yell"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
        else{
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
}

