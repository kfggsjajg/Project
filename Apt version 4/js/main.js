let param = 0;

function dropDown () {
    if (param == 0) {
        param = 1;

        document.getElementById('dropDown-section').style = "background:  #1f1f1f"
        document.getElementById('link1').style = "color: white"
        document.getElementById('link2').style = "color: white"
        document.getElementById('link3').style = "color: white"
        document.getElementById('link4').style = "color: white"
        document.getElementById('link5').style = "color: white"
    }
    else {
        param = 0

        document.getElementById('dropDown-section').style = "background:  transparent; border-color: transparent"
        document.getElementById('link1').style = "color: transparent"
        document.getElementById('link2').style = "color: transparent"
        document.getElementById('link3').style = "color: transparent"
        document.getElementById('link4').style = "color: transparent"
        document.getElementById('link5').style = "color: transparent"
    }
}






















