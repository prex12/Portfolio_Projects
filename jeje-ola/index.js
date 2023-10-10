// var arr = $(".img-property");
// var arrLength = arr.length;
// for (var i = 0; i < arrLength; i++)

const menuButton = document.querySelectorAll(".set-invisible")
menuButton.addEventListener("click", dropDown)
function dropDown (){
    console.log("clicked");
    menuButton.innerHTML = "X"
    // this.createElement('div').classList.add("small-menu")
};



var images = document.querySelectorAll(".img-property").length;
    for (var i = 0; i < images; i++){
        document.querySelectorAll(".img-property")[i].addEventListener("click", ()=>{
            var buttonPressed = this;
            selectImage(buttonPressed);
        })
    }
        

    const selectImage= (welp)=>{
        switch (welp){
            case "one": 
                document.querySelector(".img-big").setAttribute("src", "./imgs/Jeje-ola interiors/3d-rendering-modern-dining-room-living-room-with-luxury-decor-green-sofa.jpg")
                break;

            case 'two': 
                document.querySelector(".img-big").setAttribute("src", "./imgs/Jeje-ola interiors/3d-rendering-white-wood-living-room-near-bedroom-upstair.jpg")
                break;

            case 'three': 
                document.querySelector(".img-big").setAttribute("src", "./imgs/Jeje-ola interiors/modern-luxury-bedroom-suite-bathroom.jpg")
                break;

            default:
                console.log("unexpected input");
        }
    }