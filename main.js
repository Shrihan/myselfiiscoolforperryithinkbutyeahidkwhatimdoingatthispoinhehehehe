var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie");
    {
       speak();
 setTimeout(() => {
    takesnapshot()
    save()
 }, 1849);
    }
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
})
function speak(){
var synth=synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").value;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfieimage").src=data_uri
    })
}
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfieimage")
    link.href=image
    link.click()
}