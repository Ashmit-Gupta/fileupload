gsap.from('.nav h1,#btn1,#btn2',{
    y:-50,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger: 0.8,
})
gsap.from('.nav1 h3',{
    y:-50,
    opacity:0,
    delay:0.6,
    duration:0.5,
    stagger: 0.8,
})
let tl=gsap.timeline();
tl.from('#content ,#content1',{
     y:50,
     delay:2,
     opacity:0,
     duration:1,
     ease: "back(5)",
     stagger:0.2,
})
tl.from('#bar h4',{
    x:-100,
    opacity:0,
    stagger:0.8,
    duration:2,
    ease:'elastic',
})
    window.onload = function () {
        // Define the animation timeline
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        // Set up the animation
        tl.to("#icon", { duration: 1.5, y: -15, ease: "power2.inOut" })
          .to("#icon", { duration: 1.5, y: 5, ease: "power1.inOut" });

        // Alternatively, you can use a shorthand method for yoyo effect
        // tl.to("#icon", { duration: 1, y: -20, ease: "power1.inOut", yoyo: true, repeat: -1 });
    };
    const items = document.querySelectorAll('.item');
    const wrapperWidth = document.querySelector('.wrapper').offsetWidth;

    // Create a timeline
    tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite loop with a repeat delay of 1 second

    // Define the animation
    tl.to(items, {
        x: `-=${wrapperWidth}`, // Move items to the left by the width of the wrapper
        duration: 4, // Adjust duration to make it slower
        ease: "linear", // Linear easing for constant speed
        stagger: {
            each: 0 // Stagger animation for each item
        },
        immediateRender: false // Prevent elements from immediately returning to their original positions
    });

    // Start the animation
    tl.play();