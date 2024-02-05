
document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        "background/bg1.jpg" ,
        "background/bg2.jpg" ,
        "background/bg3.jpg" ,
        "background/bg4.jpg" ,
        "background/bg5.jpg" ,
        "background/bg6.jpg" ,
        "background/bg7.jpg" 
    ];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function changeBackground() {
        const randomIndex = getRandomIndex(backgrounds.length);
        const randomImage = backgrounds[randomIndex];
        const imageUrl = `url(${randomImage})`;
        //console.log(imageUrl)

        document.body.style.backgroundImage = imageUrl;
    }
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});
