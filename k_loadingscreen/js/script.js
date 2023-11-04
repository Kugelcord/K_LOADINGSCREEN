document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");

 
    if (logo) {
  
        gsap.fromTo(
            logo,
            {
                scale: 1,
            },
            {
                scale: 1.1,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            }
        );
    }
});
