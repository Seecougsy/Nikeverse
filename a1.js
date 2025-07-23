$(document).ready(function () {
  // All of your code goes here
  gsap.registerPlugin(InertiaPlugin, EasePack);

// Register the plugin
  
  console.log("hello world");

  // *** 👟 SHOE OBJECTS *** //
  // ℹ️ This is where the shoe info goes

  var shoes = [
    {
      shoeName: "Nike Moon Shoe",
      year: 1974,
      shoeHistory:
        "The first Nike shoe was nicknamed <i>The Moon Shoe</i> and was made in Bowerman’s waffle iron. This waffle sole design came into fruition after Bill Bowerman was eating breakfast and wondering if the grooves in his waffle would work for additional traction when playing sports. After a few test runs of the waffle iron, the Waffle Trainer was eventually born and found almost immediate success due to its grippy and performance-driven design. This first prototype model was  technically the first Nike shoe and sold at Sotheby’s for almost $450,000.",
      shoeCat: ["runner", "sports", 1974],
      title: "It Began With Waffles...",
      image: "IMG/Shoes/1.jpg",
    },
    {
      shoeName: "Nike Air Force 1",
      year: 1982,
      shoeHistory:
        "The Nike Air Force 1 debut in 1982, and even though the shoe is made for basketball, it is more of a shoe for style. In 1982 when Nike Air Force 1 first released, the Nike Air Force 1 was the first model to have Nike Air technology. In the 1980’s the Nike AF1 was popular like they are till this day. Nike Air Force 1 was named after the Air Force One plane that the President of the United States flys in. In the early 1990’s the Nike Air Force 1 lost some popularity, but in the later 1990’s and 2000’s the AF1 made a come back.",
      shoeCat: ["basketball", "style", "fashion", "sports", 1982],
      title: "A Shoe For Style...",
      image: "IMG/Shoes/2.jpg",
    },

    {
      shoeName: "Nike Air Jordan 1",
      year: 1984,
      shoeHistory:
        "The original Air Jordan 1 sneakers were designed exclusively for Michael Jordan in late 1984 and would eventually go on general sale in April of 1985. The shoe itself featured a high-top construction, the famous Nike Swoosh and a black/red “Bred” colourway.",
      shoeCat: [
        "basketball",
        "sports",
        "michael jordan",
        "michael",
        "jordan",
        1984,
      ],
      title: "Sports Star Exclusive...",
      image: "IMG/Shoes/3.jpg",
    },
    {
      shoeName: "Nike SB (Skate Boarding)",
      year: 2002,
      shoeHistory:
        "With the Skateboarding market growing at rapid speeds, Nike launched their SB line March 2002. To attract skaters, Nike advertised in magazines like Transworld Skateboarding magazine and Thrasher magazine. After a while, Nike SB (Skateboarding) started to hand out catalogs to some of the hardcore skate shops.",
      shoeCat: ["skate boarding", "fashion", "skate", 2002],
      title: "From Courts To Concrete...",
      image: "IMG/Shoes/4.jpg",
    },
    {
      shoeName: "Nike Air Zoom Generation Lebron",
      year: 2003,
      shoeHistory:
        "A young player (at the time 18 years old) in the NBA, Lebron James starting his career out needed a good sneaker. As we know Nike signed the very talented athlete. Lebron’s first shoe was the Nike Air Zoom Generation, also known as the LBJ I released right before the 2003-2004 NBA Season",
      shoeCat: ["basketball", "lebron james", "lebron", "james"],
      title: "A <i>'Shoe-in'</i>...",
      image: "IMG/Shoes/5.jpg",
    },
  ];

  // *** 📂 FOLDER FUNCTIONS *** //
  // ℹ️ This code opens the folder the user clicks on
  // ℹ️ variables to use in the function  //
  var icon = $(".icon img");
  var iconImg = $(".icon img").attr("src");
  var popUp = $(".PopUp_container");
  var clicked = $(this).attr("data-year");
  var opened = $(this).attr({
    src: "IMG/Desktop_icons/folder_open_icon.png",
  });

  // *** Opens folder
  icon.on("click", function () {
    //<--- when an icon is clicked

    // *** Call some variables to help
    var clicked = $(this);
    var clickedParent = clicked.parent();
    var clickedYear = clickedParent.attr("data-year");
    var title = "";
    var description = "";
    var heading = "";

    //*** Reset all icons to OG state
    $(".icon img").attr({
      //<--- reset all the img attr to..
      src: iconImg, //<--- this
    });
    console.log("found");

    //*** Change clicked icon
    $(this).attr({
      // <--- then change the one the user clicked...
      src: "IMG/Desktop_icons/folder_open_icon.png", //<--- to this
    });

    //*** Open the pop-up window
    $(".PopUp_container").addClass("PopUp_container_on");

    //*** This part of the code populates the info in the popup window ✨ dynamically ✨

    for (i = 0; i < shoes.length; i++) {
      console.log(shoes[i].year, "Dynamic year");
      console.log(clickedYear, "Clicked Year");

      if (clickedYear == shoes[i].year) {
        console.log("We have a match");

        heading = shoes[i].title; // <--- Sets new variable to use later
        $(".title-text").text(`${shoes[i].shoeName} — ${shoes[i].year}`); // <--- Create popup title from object
        $(".description").html("<p>" + shoes[i].shoeHistory + "<p>"); // <--- Created description from object
        $(".description").prepend("<h3>" + heading + "</h3>"); // <--- Creates heading from local new variable
        $("#shoe-image img").attr({
          src: shoes[i].image,
        });
      }
    }

    console.log(title);
    console.log(heading);
    console.log(description);
  });

  // *** This code triggers all windows close when user clicks off screen
  // *** I saw this on the internet. It doesnt seem "proper" but right now it works lol //

  $("#close-popup").on("click", function (event) {
    if ($(event.target).closest(".icon").length == 0) {
      // <---
      $(".PopUp_container_on").removeClass("PopUp_container_on");
      $(".icon img").attr({
        //<--- reset all the img attr to..
        src: iconImg, //<--- this
      });
    }
  });

  function Clippyshow() {
    "main.css";

    setTimeout(distort, 14000);
    console.log("Glitch-on");
  }
  //

  // ***** ✨ ANIMATION OF POP UP WINDOWS ✨ ***** //

  var tl1 = new TimelineMax();

  tl1
    .set(
      ".PopUp_container",
      {
        scaleX: 0,
        scaleY: 0,
      },
      0
    )
    .to(
      ".PopUp_container",
      {
        duration: 0.4,
        scaleX: 0.9,
        scaleY: 1,
        ease: "steps(4)",
      },
      0
    )
    .to(
      ".PopUp_container",
      {
        duration: 0.4,
        scaleX: 1,
        scaleY: 1,
        ease: "steps(4)",
      },
      0
    )
    .from(
      ".title",
      {
        duration: 0,
        opacity: 0,
        ease: "steps(10)",
      },
      0.1
    )
    .from(
      "#shoe-image",
      {
        duration: 0.1,
        opacity: 0,
        ease: "steps(10)",
      },
      0.5
    )
    .from(
      ".description",
      {
        duration: 0.2,
        opacity: 0,
        ease: "steps(3)",
      },
      0.9
    );

  $(".icon").on("click", function () {
    tl1.play(0);
    console.log("play");
  });

  var clippytl = gsap.timeline();
  clippytl
    .pause()
    .from(".clippy_box", {
      scale: 0,
      duration: 0.2,
      opacity: 0,
      ease: "steps(3)",
    })

    .from(
      ".speech_bubble",
      {
        duration: 0.5,
        scaleX: 0.5,
        scaleY: 0,
        ease: "Power1",
      },
      1
    )
    .to(
      ".speech_bubble",
      {
        duration: 0.3,
        scaleX: 1,
        scaleY: 1,
        ease: "Power1",
      },
      1
    );

  function Clippyshow() {
    clippytl.play(0);

    console.log("clippy is in the house");
  }

  setTimeout(Clippyshow, 10000); // <---- after this time has passed

  // 🛻 🚀 animation //

  // 🚩🚩🚩 is this where i should use a callback function????
  var nikeversechildren = $("[data-name='nikeverse']").children().not("h2");
  var flames = $('[data-name="nikeverse"] img:first-child');
  var shopchildren = $("[data-name='shop'] img"); //.children().not("h2");
  var nike_icon =$("[data-name='nike_general'] img");
  
  gsap.set(shopchildren, {
    transformOrigin: "25% 95%",
  });


  // ===== NIKE VERSE ANIMATION GSAP START=======

  var nikeverse = gsap.timeline({
    paused: true,
    reversed: true,
    yoyo: true,
    repeat: 0,
    onStart: () => nv.css("pointer-events", ""),
    onComplete() {
      gsap.to(nikeversechildren, {
        y: 0,
        rotation: 0,
        ease: "power2.in",
        duration: 0.2,
      });
      gsap.set(flames, { visibility: "hidden" });
    },
    onReverseComplete: () => {
      // remove GSAP's inline transform so your CSS transform can take effect
      gsap.set(nikeversechildren, { clearProps: "transform" });
    },
  });

  nikeverse
    .to(
      flames,
      {
        visibility: "visible",
        scaleY: 0.95,   
        scaleX: 1.05, 
        
      },
      0
    )
    .to(
      nikeversechildren,
      {
        y: "+=10",
        scaleY: 0.95,   
        scaleX: 1.1, 
        duration: 0.08,
        ease: "power1.out",
      },
      0
    )
      .to(nikeversechildren,
      {
        scaleY: 1,   
        scaleX: 1, 
        duration: 0.2,
        ease: "power2.out" ,
      },
      .2
    )

  

    .to(
      nikeversechildren,
      {
        y: "-=10",
        rotation: -6,
        duration: 0.2,
        ease: "power4.out",
      },
      0
    )

    .to(
      flames,
      {
        visibility: "hidden",
      },
      0.1
    )

    .to(
      flames,
      {
        visibility: "visible",
      },
      0.2
    )

    .to(
      nikeversechildren,
      {
        inertia: {
          y: {
            velocity: -300,
            resistance: 50,
            end: -5,
          },
        },
      },
      0.2
    )

    .to(
      nikeversechildren,
      {
        rotation: 2,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)",
      },
      0.1
    )
    .pause();


  
var shop = gsap.timeline({ paused: true});

// NIKE_ICON ANIMATION

var nike_icon_hover = gsap.timeline({paused: true});

nike_icon_hover
    // build up (squash a little)
    .to(nike_icon, {
      y: 5,          
      scaleY: 0.95,   
      scaleX: 1.05,   
      duration: 0.08, 
      ease: "power1.out"
    })
     // up 
    .to(nike_icon, {
      y: -30,         
      rotation: 5,    
      scaleY: 1,      
      scaleX: 1,      
      duration: 0.2,  
      ease: "power2.out" 
    })

  // down
  .to(nike_icon, {
    y: 5,           
    rotation: -5,   
    duration: 0.15, 
    ease: "power2.in" 
  })

  // 4bounce
  .to(nike_icon, {
    y: 0,           
    rotation: 0,    
    scaleY: 1,      
    scaleX: 1,      
    duration: 0.1,  
    ease: "elastic.out(1, 0.5)" 
  });




// SHOP HOVER ANIMATION // 

shop
  // build up (squash a little)
  .to(shopchildren, {
    y: 5,          
    scaleY: 0.95,   
    scaleX: 1.05,   
    duration: 0.08, 
    ease: "power1.out"
  })

  // up 
  .to(shopchildren, {
    y: -30,         
    rotation: 5,    
    scaleY: 1,      
    scaleX: 1,      
    duration: 0.2,  
    ease: "power2.out" 
  })

  // down
  .to(shopchildren, {
    y: 5,           
    rotation: -5,   
    duration: 0.15, 
    ease: "power2.in" 
  })

  // 4bounce
  .to(shopchildren, {
    y: 0,           
    rotation: 0,    
    scaleY: 1,      
    scaleX: 1,      
    duration: 0.1,  
    ease: "elastic.out(1, 0.5)" 
  });

  $("[data-name='shop']").on("mouseenter", function () {
    shop.play(0);
    console.log("shop");
  });



  shop.pause();

  const nv = $(".icon_special[data-name='nikeverse']");

  //  EvENT HANDLERS
  nv.on("mouseenter", function () {
    if (!nikeverse.isActive()) {
      nikeverse.restart();
      console.log("nikeverse");
    }
  });

  // nv.on("mouseleave", function () {
  //   if (!nikeverse.reversed()){
  //     nikeverse.reverse();
  //     console.log("nikeverse");
  //   }

  // });

  $("[data-name='nike_general']").on("mouseenter", function () {
      nike_icon_hover.play(0);
      console.log("nike_general_animation_play")
  });

 


  // MAIN Nike progress bar logo animation 🚀🚀

  // TURN ON, INITIAL ANIMATION ###############

  fetch("nike-animation.json")
    .then((res) => res.json())
    .then((animationData) => {
      lottie.loadAnimation({
        container: document.getElementById("lottie"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData,
      });
    })
    .catch(console.error);

  //  Opening animation //
  var openinganimation = gsap.timeline({});

  openinganimation
    .from(
      ".icon",
      {
        opacity: 0,
        stagger: 0.3,
        ease: "steps(1)",
        duration: 3.6,
      },
      0
    )

    // This is to animate all icons EXCEPT the Nike-Verse icon
    .from(
      "[data-name='nike_general']",
      {
        opacity: 0,
        stagger: 0.5,
        ease: "steps(1)",
        duration: 2,
      },
      "-=2"
    )
    .from(
      "[data-name='shop']",
      {
        opacity: 0,
        stagger: 0.5,
        ease: "steps(1)",
        duration: 2,
      },
      "-=1.5"
    )
    .from(
      "[data-name='nikeverse']",
      {
        opacity: 0,
        stagger: 0.5,
        ease: "steps(1)",
        duration: 2,
      },
      "-=1.5"
    ) // <--- load the icon name only of this one, the image is hidden down below.

    // Nikeverse specific
    .set(
      flames,
      {
        visibility: "visible",
      },
      0
    ) // <--- Make this visible via CSS

    .set(
      nikeversechildren,
      {
        opacity: 0, // <--- Hide the image tho, until I'm ready
      },
      0
    )

    .from(
      nikeversechildren,
      {
        duration: 2,
        rotation: "8_short",
        y: -25,
        x: -46,
        ease: "steps(10)",
        Opacity: 1,
      },
      "+=2"
    ) // <--- 2 seconds after, bring the space man in... he's late!

    .set(flames, {
      visibility: "hidden",
    }); // <--- After complete, hide this



  // Drop down menu cotnrols
  const startbutton = document.getElementsByClassName("start-bar")[0];
  const menu = document.getElementsByClassName("dropdown-menu")[0];
  const menuwrapper = document.getElementsByClassName(
    "start-menu-container"
  )[0];

  function closeMenu() {
    menu.classList.remove("active");
    startbutton.classList.remove("active");
  }

  startbutton.addEventListener("click", () => {
    menu.classList.toggle("active");
    startbutton.classList.toggle("active");
  });

  menuwrapper.addEventListener("mouseleave", (e) => {
    const mouseInsideMenu = menuwrapper.contains(e.relatedTarget);

    if (!mouseInsideMenu) {
      closeMenu();
    }
  });

  const tmplt = document.getElementById("adware_tmplt").content;

  function spawnAdware({ title, gif, top, left }) {
    const clone = tmplt.cloneNode(true);
    const container = clone.querySelector(".adware_container");

    container.querySelector(".title_left_adware").textContent = title;
    container.querySelector(".window_gif").src = gif;
    container.style.top = top;
    container.style.left = left;

    container
      .querySelector('button[aria-label="close"]')
      .addEventListener("click", () => container.remove());

    document.body.appendChild(clone);
    container.classList.add("active");
  }

  const viewport = window.matchMedia("(min-width: 800px)");

  function handleViewportChange(e) {
    if (!e.matches) {
      clearInterval(adInterval);
    } else {
    }
  }

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        spawnAdware({
          title: `Ad #${Date.now()}`,
          gif: `assets/gifs/P${i}.gif`,
          top: `${Math.random() * 70 + 10}%`,
          left: `${Math.random() * 85 + 10}%`,
        });
      }, i * 1500);
    }
  }, 30000);

  interact(".adware_container").draggable({
    inertia: false,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
    listeners: {
      move(event) {
        const el = event.target;

        const x = (el.dataset.x | 0) + event.dx;
        const y = (el.dataset.y | 0) + event.dy;
        el.style.transform = `translate(${x}px, ${y}px)`;
        el.dataset.x = x;
        el.dataset.y = y;
      },
    },
  });
});
