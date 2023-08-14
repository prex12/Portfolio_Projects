// var arr = $(".img-property");
// var arrLength = arr.length;
// for (var i = 0; i < arrLength; i++)
    $(".img-property").on("click", ()=>{
        var buttonPressed = $(".img-property").attr("id");
        selectImage(buttonPressed);
    })

    const selectImage= (welp)=>{
        switch (welp){
            case 'one': $(".img-big").attr("src", "./imgs/Jeje-ola interiors/3d-rendering-modern-dining-room-living-room-with-luxury-decor-green-sofa.jpg")
            break;

            case 'two': $(".img-big").attr("src", "./imgs/Jeje-ola interiors/3d-rendering-white-wood-living-room-near-bedroom-upstair.jpg")
            break;

            case 'three': $(".img-big").attr("src", "./imgs/Jeje-ola interiors/modern-luxury-bedroom-suite-bathroom.jpg")
            break;

            default:
                console.log("unexpected input");
        }
    }