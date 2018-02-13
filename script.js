function traveltoVenice(){
    document.getElementById("homepage").setAttribute("visible", "false");
    document.getElementById("elephantvideo").setAttribute("muted", "false");
    document.getElementById("scene2").setAttribute("visible", "true");
}

function traveltoHomepage(){
    document.getElementById("homepage").setAttribute("visible", "true");
    document.getElementById("elephantvideo").setAttribute("muted", "false");
    document.getElementById("scene2").setAttribute("visible", "false");
    document.getElementById("backbuttons").setAttribute("visible", "false")
}

