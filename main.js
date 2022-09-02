SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();

function start()
{
    document.getElementById("start").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("selfie").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
};

function speak()
{
    synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 second";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
takesnapshot();
save();
    },5000);
}

Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
    })
}

function save()
{
    link=document.getElementByIdI("link");
    img=document.getElementById("selfie").src;
     link.href=img;
     link.click();
}
