const $climate=document.getElementById("climate");
const $consumption=document.getElementById("consumption");
const $resource=document.getElementById("resource");
const $people=document.getElementById("people");

$climate.onclick=()=> {
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')"
    document.body.style.backgroundSize="100% 100%"
}
$consumption.onclick=()=> {
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')"
    document.body.style.backgroundSize="100% 100%"
}
$resource.onclick=()=> {
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')"
    document.body.style.backgroundSize="100% 100%"
}
$people.onclick=()=> {
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')"
    document.body.style.backgroundSize="100% 100%"
}