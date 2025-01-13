$(document).ready(function() {

  // All of your code goes here


  console.log("hello world");




  // *** 👟 SHOE OBJECTS *** //
  // ℹ️ This is where the shoe info goes

  var shoes = [{
      shoeName: "Nike Moon Shoe",
      year: 1974,
      shoeHistory: "The first Nike shoe was nicknamed the Moon Shoe and was made in Bowerman’s waffle iron. This waffle sole design came into fruition after Bill Bowerman was eating breakfast and wondering if the grooves in his waffle would work for additional traction when playing sports. After a few test runs of the waffle iron, the Waffle Trainer was eventually born and found almost immediate success due to its grippy and performance-driven design. This first prototype model was  technically the first Nike shoe and sold at Sotheby’s for almost $450,000.",
      shoeCat: [
        "runner",
        "sports",
        1974
      ],
      title: "It began with Waffles",
      image: 'IMG/Shoes/1.jpg',

    },
    {
      shoeName: "Nike Air Force 1",
      year: 1982,
      shoeHistory: "The Nike Air Force 1 debut in 1982, and even though the shoe is made for basketball, it is more of a shoe for style. In 1982 when Nike Air Force 1 first released, the Nike Air Force 1 was the first model to have Nike Air technology. In the 1980’s the Nike AF1 was popular like they are till this day. Nike Air Force 1 was named after the Air Force One plane that the President of the United States flys in. In the early 1990’s the Nike Air Force 1 lost some popularity, but in the later 1990’s and 2000’s the AF1 made a come back.",
      shoeCat: [
        "basketball",
        "style",
        "fashion",
        "sports",
        1982
      ],
      title: "A shoe for Style",
      image: 'IMG/Shoes/2.jpg',

    },

    {
      shoeName: "Nike Air Jordan 1",
      year: 1984,
      shoeHistory: "The original Air Jordan 1 sneakers were designed exclusively for Michael Jordan in late 1984 and would eventually go on general sale in April of 1985. The shoe itself featured a high-top construction, the famous Nike Swoosh and a black/red “Bred” colourway.",
      shoeCat: [
        "basketball",
        "sports",
        "michael jordan",
        "michael",
        "jordan",
        1984,
      ],
      title: "Sports Star Exclusive",
      image: 'IMG/Shoes/3.jpg',

    },
    {
      shoeName: "Nike SB (Skate Boarding)",
      year: 2002,
      shoeHistory: "With the Skateboarding market growing at rapid speeds, Nike launched their SB line March 2002. To attract skaters, Nike advertised in magazines like Transworld Skateboarding magazine and Thrasher magazine. After a while, Nike SB (Skateboarding) started to hand out catalogs to some of the hardcore skate shops.",
      shoeCat: [
        "skate boarding",
        "fashion",
        "skate",
        2002
      ],
      title: "From Courts to Concrete",
      image: 'IMG/Shoes/4.jpg',

    },
    {
      shoeName: "Nike Air Zoom Generation Lebron",
      year: 2003,
      shoeHistory: "A young player (at the time 18 years old) in the NBA, Lebron James starting his career out needed a good sneaker. As we know Nike signed the very talented athlete. Lebron’s first shoe was the Nike Air Zoom Generation, also known as the LBJ I released right before the 2003-2004 NBA Season",
      shoeCat: [
        "basketball",
        "lebron james",
        "lebron",
        "james"
      ],
      title: "A 'shoe-in'",
      image: 'IMG/Shoes/5.jpg',


    }

  ]


  // *** 📂 FOLDER FUNCTIONS *** //
  // ℹ️ This code opens the folder the user clicks on
  // ℹ️ variables to use in the function  //
  var icon = $(".icon img");
  var iconImg = $(".icon img").attr("src");
  var popUp = $(".PopUp_container");
  var clicked = $(this).attr("data-year");
  var opened = $(this).attr({
    src: "IMG/Desktop_icons/folder_open_icon.png"
  })


  // *** Opens folder
  icon.on("click", function() { //<--- when an icon is clicked


    // *** Call some variables to help
    var clicked = $(this)
    var clickedParent = clicked.parent();
    var clickedYear = clickedParent.attr("data-year");
    var title = "";
    var description = "";
    var heading = "";


    //*** Reset all icons to OG state
    $(".icon img").attr({ //<--- reset all the img attr to..
      src: iconImg //<--- this
    })
    console.log("found");


    //*** Change clicked icon
    $(this).attr({ // <--- then change the one the user clicked...
      src: "IMG/Desktop_icons/folder_open_icon.png" //<--- to this
    })

    //*** Open the pop-up window
    $(".PopUp_container").addClass('PopUp_container_on');



    //*** This part of the code populates the info in the popup window ✨ dynamically ✨

    for (i = 0; i < shoes.length; i++) {
      console.log(shoes[i].year, "Dynamic year");
      console.log(clickedYear, "Clicked Year");

      if (clickedYear == shoes[i].year) {
        console.log("We have a match");


        heading = shoes[i].title // <--- Sets new variable to use later
        $(".title").html(`<h1>${shoes[i].shoeName} — ${shoes[i].year}\n</h1>`); // <--- Create popup title from object
        $(".description").html("<p>" + shoes[i].shoeHistory + "<p>"); // <--- Created description from object
        $(".description").prepend("<h3>" + heading + "</h3>"); // <--- Creates heading from local new variable
        $("#shoe-image img").attr({
          "src": (shoes[i].image)
        });

      }


    }


    console.log(title);
    console.log(heading);
    console.log(description);
  });



  // *** This code triggers all windows close when user clicks off screen
  // *** I saw this on the internet. It doesnt seem "proper" but right now it works lol //

  $(document).on("click", function(event) {
    if ($(event.target).closest('.icon').length == 0) // <---
    {
      $(".PopUp_container_on").removeClass('PopUp_container_on');
      $(".icon img").attr({ //<--- reset all the img attr to..
        src: iconImg //<--- this
      })
    }

  });




  //  *** 🚀 DISTORT FUNCTION ANIMATION *** //

  var backgroundOrig = $("body").css("background-image") // <---- I'll use this variable in the function to reset the Image back, "dynamically" hehe
  console.log(backgroundOrig); // <---- testing it

  function distort() {

    // Reset animation states //
    $(".desktop_icons").removeClass("distorttext")
    $(".title").removeClass("distorttext");
    $(".description").removeClass("distorttext");
    $("body").css("background-image", backgroundOrig)

    // Add animation //
    $(".description").addClass("distorttext");
    $(".title").addClass("distorttext");
    $(".desktop_icons").addClass("distorttext");
    $("body").css("background-image", "url(IMG/desktop1-glitch.jpg)")

    setTimeout(distort, 14000); // <---- after this time has passed
    console.log("Glitch-on");
  }



  // This turns it off... because I don't wanna crash your computer lol//
  function distortremove() {
    $(".title").removeClass("distorttext");
    $(".description").removeClass("distorttext")
    $(".desktop_icons").removeClass("distorttext")
    $("body").css("background-image", backgroundOrig)
    setTimeout(distortremove, 9000); //<---- after this time has passed
    console.log("Glitch-off");
  }


  distort(); // <---- calling the function
  distortremove(); // <---- calling the function



    function Clippyshow() {
  'main.css'


         setTimeout(distort, 14000);
         console.log("Glitch-on");
     }
//
})









// ***** ✨ ANIMATION OF POP UP WINDOWS ✨ ***** //

var tl1 = new TimelineMax();

tl1.set(".PopUp_container", {
    scaleX: 0,
    scaleY: 0,
  }, 0)
  .to(".PopUp_container", {
    duration: .4,
    scaleX: .9,
    scaleY: 1,
    Ease: "steps(4)"
  }, 0)
  .to(".PopUp_container", {
    duration: .4,
    scaleX: 1,
    scaleY: 1,
      Ease: "steps(4)"
  }, 0)
  .from(".title", {
    duration: 0,
    opacity: 0,
      Ease: "steps(10)"
  }, .1)
  .from("#shoe-image", {
    duration: .1,
    opacity: 0,
    Ease: "steps(10)"
  }, .5)
  .from(".description", {
    duration: .2,
    opacity: 0,
      Ease: "steps(3)"
  }, .9);


$(".icon").on("click", function() {
  tl1.play(0)
  console.log("play");

})





var clippytl = gsap.timeline();
clippytl.pause()
  .from(".clippy_box", {
    scale: 0,
    duration: .2,
    opacity: 0,
    Ease: "step(3)"
  })

  .from(".speech_bubble", {
    duration: .5,
    scaleX: .5,
    scaleY: 0,
    Ease: "Power1"
  }, 1)
  .to(".speech_bubble", {
    duration: .3,
    scaleX: 1,
    scaleY: 1,
    Ease: "Power1"
  }, 1)


function Clippyshow() {
  clippytl.play(0);




  console.log("clippy is in the house");
}

setTimeout(Clippyshow, 10000); // <---- after this time has passed



// 🛻 🚀 animation //



// 🚩🚩🚩 is this where i should use a callback function????
var nikeversechildren = $("[data-name='nikeverse']").children().not("h2")
var flames = $('[data-name="nikeverse"] img:first-child');
var shopchildren = $("[data-name='shop']").children().not("h2");

var nikeverse = gsap.timeline({
  yoyo: true,
});


nikeverse.to(flames, {
    visibility: "visible"
  }, 0)

  .to(nikeversechildren, {
    duration: 1,
    rotation: "8_short",
    y: -25,
    x: 3,
    ease: "steps(2)"
  }, 0)

  .to(nikeversechildren, {
    duration: 1,
    ease: "steps(2)",
    y: -22,
    x: -10,
    rotation: "-2_short",
  })
  .to(nikeversechildren, {
    duration: 1,
    rotation: "8_short",
    y: -25,
    x: 3,
    ease: "steps(2)",
  })

  .to(nikeversechildren, {
    duration: 1,
    ease: "steps(2)",
    y: -27,
    x: -3,
    rotation: "-9_short",
  })

  .to(nikeversechildren, {
    duration: .5,
    ease: "steps(2)",
    y: -8,
    x: -2,
    rotation: "-3_short"
  })

nikeverse.to(flames, {
  visibility: "hidden"
})
nikeverse.pause();


// 🚩🚩 TO DOOOOOO
var shop = gsap.timeline({yoyo: true});
shop.to(shopchildren, {
    duration: .8,
    rotation: "23_short",
    y: -12,
    x: 30,
    ease: "steps(2)",
  }, 0)

  .to(shopchildren, {
    duration: .5,
    rotation: "22_short",
    y: -12,
    x: 5,
    ease: "steps(2)",
  })
  .to(shopchildren, {
    duration: .8,
    rotation: "21_short",
    y: -12,
    x: 20,
    ease: "steps(2)",
  })
  .to(shopchildren, {
    duration: 1,
    rotation: "25_short",
    y: -12,
    x: -6,
    ease: "steps(2)",
})
  // shop.reverse();


shop.pause();


 //  EvENT HANDLERS
$("[data-name='nikeverse']").on("mouseenter", function() {
  nikeverse.play(0);
  console.log("nikeverse");
})

$("[data-name='nikeverse']").on("mouseleave", function() {

  nikeverse.reverse();
  console.log("nikeverse");
})

$("[data-name='shop']").on("mouseenter", function() {
  shop.play(0);
  console.log("shop");
})

$("[data-name='shop']").on("mouseleave", function() {
  shop.reverse();
  console.log("shop");
})


$("[data-name='nike_general']").on("mouseenter", function() {
  iconAnim.setDirection(1);
  iconAnim.play();

  console.log("go");


})


$("[data-name='nike_general']").on("mouseleave", function() {
  iconAnim.setDirection(-1);
  iconAnim.play();
  console.log("reverse");


})




// // ✨✨✨✨ POP-UPCODE ADS ✨✨✨//
//
// var totalboxes = 3;
// var desktop = $(".desktop_icons").html;
// console.log(desktop);
//
// function GenerateNewDivs() {
//   for (var i = 0; i < totalboxes; i++) {
//     var randomX = (Math.random() * 100) + "vh"; // Random X value (up to 350px)
//     var randomY = (Math.random() * 100) + "vh"; // Random Y value (up to 250px)
//
//     $(".main").append(`<div class= popup${i}>
//         <img src='IMG/Animations/P${i}.gif'
// alt=""></div>`);
//
// // Wrap a div around
// var newPopupAd = $(".popup" + `${i}`);
//
//
//   $(".popup" + `${i}`).css({
//     "top": `${randomY}`,
//     "left":`${randomX}`,
//
//   });
//
//
//   }
//
// }
// GenerateNewDivs()


// MAIN Nike progress bar logo animation 🚀🚀

  var animationData = {
    "v": "5.9.6",
    "fr": 29.9700012207031,
    "ip": 0,
    "op": 192.00000782032,
    "w": 500,
    "h": 500,
    "nm": "Comp 1",
    "ddd": 0,
    "assets": [{
      "id": "image_0",
      "w": 600,
      "h": 463,
      "u": "",
      "p": "data:image/png;base64,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",
      "e": 1
    }, {
      "id": "image_1",
      "w": 2301,
      "h": 1294,
      "u": "",
      "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACP0AAAUOCAYAAAAMyNSpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAiNxJREFUeNrswQEBAAAAgJD+r+4ICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/98eHJAAAAAACPr/uh+hAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwFyuE08eT8pZ2AAAAAElFTkSuQmCC",
      "e": 1
    }, {
      "id": "comp_0",
      "nm": "nike tick load 2",
      "fr": 29.9700012207031,
      "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "outer shape Outlines",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [273.166, 707.753, 0],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [289, 492.5, 0],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [100, 100, 100],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [{
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-137.965, 275.934],
                  [-133.296, -115.12],
                  [-110.08, 44.031],
                  [0, 0],
                  [14.677, -3.671],
                  [0, 0]
                ],
                "o": [
                  [-159.983, 187.873],
                  [129.161, 111.547],
                  [110.079, -44.035],
                  [11.745, -5.873],
                  [-5.926, 1.477],
                  [-167.318, 46.963]
                ],
                "v": [
                  [-625.39, -316.664],
                  [-802.986, 236.306],
                  [-402.295, 237.774],
                  [924.537, -334.644],
                  [919.403, -344.182],
                  [-405.232, 14.679]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "st",
            "c": {
              "a": 0,
              "k": [0.701960784314, 0.701960784314, 0.701960784314, 1],
              "ix": 3
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 4
            },
            "w": {
              "a": 0,
              "k": 0.25,
              "ix": 5
            },
            "lc": 1,
            "lj": 1,
            "ml": 10,
            "bm": 0,
            "nm": "Stroke 1",
            "mn": "ADBE Vector Graphic - Stroke",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [936.907, 348.478],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transform"
          }],
          "nm": "Group 1",
          "np": 2,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }],
        "ip": 0,
        "op": 900.000036657751,
        "st": 0,
        "ct": 1,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 2,
        "ty": 4,
        "nm": "inner grey Outlines",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [952.926, 540.376, 0],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [912.5, 331, 0],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [100, 100, 100],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ef": [{
          "ty": 25,
          "nm": "Drop Shadow",
          "np": 8,
          "mn": "ADBE Drop Shadow",
          "ix": 1,
          "en": 1,
          "ef": [{
            "ty": 2,
            "nm": "Shadow Color",
            "mn": "ADBE Drop Shadow-0001",
            "ix": 1,
            "v": {
              "a": 0,
              "k": [0, 0, 0, 1],
              "ix": 1
            }
          }, {
            "ty": 0,
            "nm": "Opacity",
            "mn": "ADBE Drop Shadow-0002",
            "ix": 2,
            "v": {
              "a": 0,
              "k": 127.5,
              "ix": 2
            }
          }, {
            "ty": 0,
            "nm": "Direction",
            "mn": "ADBE Drop Shadow-0003",
            "ix": 3,
            "v": {
              "a": 0,
              "k": 150,
              "ix": 3
            }
          }, {
            "ty": 0,
            "nm": "Distance",
            "mn": "ADBE Drop Shadow-0004",
            "ix": 4,
            "v": {
              "a": 0,
              "k": 12,
              "ix": 4
            }
          }, {
            "ty": 0,
            "nm": "Softness",
            "mn": "ADBE Drop Shadow-0005",
            "ix": 5,
            "v": {
              "a": 0,
              "k": 0,
              "ix": 5
            }
          }, {
            "ty": 7,
            "nm": "Shadow Only",
            "mn": "ADBE Drop Shadow-0006",
            "ix": 6,
            "v": {
              "a": 0,
              "k": 0,
              "ix": 6
            }
          }]
        }],
        "shapes": [{
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-32.88, 0],
                  [-27.075, 7.6],
                  [0, 0],
                  [-137.523, 37.218],
                  [96.743, -38.701],
                  [0, 0],
                  [68.463, -7.526],
                  [11.757, 0],
                  [46.134, 39.842],
                  [-44.689, 109.231],
                  [-30.802, 47.827],
                  [-31.963, 40.259],
                  [-2.236, -38.46],
                  [-22.674, -27.45],
                  [-27.94, -11.531]
                ],
                "o": [
                  [26.677, 0],
                  [0, 0],
                  [668.05, -181.044],
                  [-218.216, 94.714],
                  [0, 0],
                  [-54.043, 21.622],
                  [-12.479, 1.37],
                  [-63.032, 0],
                  [-57.115, -49.326],
                  [16.956, -41.444],
                  [24.302, -37.736],
                  [-16.904, 46.676],
                  [2.318, 39.874],
                  [17.63, 21.344],
                  [27.479, 11.342]
                ],
                "v": [
                  [-515.362, 58.655],
                  [-434.357, 47.201],
                  [-403.828, 38.928],
                  [842.624, -298.785],
                  [-437.141, 253.205],
                  [-440.064, 254.375],
                  [-629.823, 310.43],
                  [-666.348, 312.494],
                  [-828.58, 253.285],
                  [-847.307, 14.333],
                  [-775.334, -120.203],
                  [-690.564, -237.711],
                  [-712.666, -109.442],
                  [-675.002, -7.981],
                  [-606.326, 41.563]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 1,
            "ty": "sh",
            "ix": 2,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [9.994, 0],
                  [3.313, -0.827],
                  [305.713, -82.851],
                  [0, 0],
                  [25.082, 0],
                  [25.054, 10.24],
                  [15.901, 19.251],
                  [-57.08, 114.163],
                  [3.802, 2.515],
                  [1.775, 0],
                  [1.718, -2.018],
                  [46.23, -112.994],
                  [-63.634, -54.957],
                  [-30.671, -10.464],
                  [-31.58, 0],
                  [-45.904, 13.442],
                  [-32.41, 12.967],
                  [0, 0],
                  [-49.754, 21.602],
                  [0, 0],
                  [-0.141, 0.069],
                  [0.991, 2.678]
                ],
                "o": [
                  [-2.704, 0],
                  [-5.252, 1.307],
                  [0, 0],
                  [-25.599, 7.187],
                  [-30.195, 0],
                  [-25.431, -10.394],
                  [-49.165, -59.523],
                  [2.038, -4.077],
                  [-1.481, -0.981],
                  [-2.651, -0.001],
                  [-65.841, 77.32],
                  [-47.95, 117.203],
                  [25.791, 22.274],
                  [27.399, 9.348],
                  [37.747, -0.002],
                  [39.6, -11.596],
                  [0, 0],
                  [106.479, -42.595],
                  [0, 0],
                  [0.148, -0.064],
                  [14.889, -7.449],
                  [-0.91, -2.459]
                ],
                "v": [
                  [894.795, -330.374],
                  [885.727, -329.128],
                  [-423.118, 25.453],
                  [-439.157, 29.799],
                  [-515.532, 40.629],
                  [-598.795, 25.197],
                  [-661.084, -19.478],
                  [-648.81, -288.817],
                  [-651.903, -300.381],
                  [-656.88, -301.881],
                  [-663.755, -298.706],
                  [-864.015, 7.496],
                  [-840.379, 266.948],
                  [-755.289, 316.286],
                  [-666.405, 330.374],
                  [-542.103, 310.394],
                  [-433.359, 271.134],
                  [-430.436, 269.965],
                  [895.768, -302.174],
                  [896.64, -302.554],
                  [897.076, -302.756],
                  [908.896, -322.198]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 2",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 2,
            "ty": "sh",
            "ix": 3,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [26.131, 0],
                  [35.565, 43.058],
                  [-36.091, 96.757],
                  [37.03, -90.509],
                  [-57.387, -49.561],
                  [-63.121, 0],
                  [-12.551, 1.377],
                  [-54.083, 21.638],
                  [0, 0],
                  [-205.599, 89.244],
                  [11.863, -3.214]
                ],
                "o": [
                  [-65.292, 0],
                  [-45.449, -55.022],
                  [-57.925, 72.571],
                  [-44.823, 109.561],
                  [46.102, 39.814],
                  [11.858, 0],
                  [68.567, -7.538],
                  [0, 0],
                  [97.807, -39.127],
                  [-214.505, 58.039],
                  [-27.406, 7.693]
                ],
                "v": [
                  [-515.362, 57.905],
                  [-674.423, -8.459],
                  [-688.257, -241.814],
                  [-848.002, 14.049],
                  [-829.07, 253.853],
                  [-666.348, 313.244],
                  [-629.741, 311.176],
                  [-439.785, 255.071],
                  [-436.862, 253.902],
                  [852.379, -302.202],
                  [-434.56, 46.479]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 3",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 3,
            "ty": "sh",
            "ix": 4,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-2.491, 0],
                  [-0.968, -2.614],
                  [14.324, -7.166],
                  [0.135, -0.059],
                  [108.931, -43.575],
                  [0, 0],
                  [84.804, -0.005],
                  [0, 0],
                  [54.263, 46.864],
                  [-47.815, 116.872],
                  [-65.806, 77.279],
                  [-2.354, 0],
                  [-1.399, -0.927],
                  [1.872, -3.745],
                  [-49.366, -59.766],
                  [-60.335, 0],
                  [-26.031, 7.308],
                  [-5.94, 1.478]
                ],
                "o": [
                  [9.345, 0],
                  [0.937, 2.533],
                  [-0.132, 0.065],
                  [-12.169, 5.283],
                  [0, 0],
                  [-64.289, 25.722],
                  [0, 0],
                  [-59.331, 0],
                  [-63.363, -54.722],
                  [46.192, -112.902],
                  [1.625, -1.909],
                  [1.575, 0],
                  [3.49, 2.308],
                  [-57.222, 114.445],
                  [32.384, 39.205],
                  [24.685, 0],
                  [53.92, -14.612],
                  [3.461, -0.864]
                ],
                "v": [
                  [894.795, -329.624],
                  [908.193, -321.938],
                  [896.746, -303.43],
                  [896.342, -303.242],
                  [-430.715, 269.268],
                  [-433.638, 270.437],
                  [-666.377, 329.624],
                  [-666.405, 329.624],
                  [-839.889, 266.38],
                  [-863.321, 7.781],
                  [-663.184, -298.22],
                  [-656.879, -301.131],
                  [-652.317, -299.755],
                  [-649.481, -289.152],
                  [-661.662, -19],
                  [-515.532, 41.379],
                  [-438.961, 30.523],
                  [885.908, -328.4]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 4",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "mm",
            "mm": 1,
            "nm": "Merge Paths 1",
            "mn": "ADBE Vector Filter - Merge",
            "hd": false
          }, {
            "ty": "fl",
            "c": {
              "a": 0,
              "k": [0.701960784314, 0.701960784314, 0.701960784314, 1],
              "ix": 4
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 5
            },
            "r": 1,
            "bm": 0,
            "nm": "Fill 1",
            "mn": "ADBE Vector Graphic - Fill",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [912.215, 330.624],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transform"
          }],
          "nm": "Group 1",
          "np": 8,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }, {
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-17.445, 47.461],
                  [30.823, -75.34],
                  [-57.251, -49.442],
                  [-63.126, 0],
                  [-12.493, 1.371],
                  [-54.058, 21.628],
                  [0, 0],
                  [-208.57, 90.529],
                  [394.071, -106.795],
                  [0, 0],
                  [26.643, 0],
                  [34.906, 42.262],
                  [2.313, 39.793]
                ],
                "o": [
                  [-74.181, 93.178],
                  [-44.757, 109.398],
                  [46.204, 39.903],
                  [11.77, 0],
                  [68.512, -7.531],
                  [0, 0],
                  [97.436, -38.978],
                  [-178.4, 48.274],
                  [0, 0],
                  [-27.038, 7.59],
                  [-66.362, 0],
                  [-22.623, -27.387],
                  [-2.268, -39.004]
                ],
                "v": [
                  [-689.404, -239.753],
                  [-847.638, 14.191],
                  [-828.809, 253.569],
                  [-666.333, 312.869],
                  [-629.767, 310.803],
                  [-439.92, 254.727],
                  [-436.986, 253.554],
                  [847.517, -300.492],
                  [-408.466, 39.801],
                  [-434.446, 46.842],
                  [-515.347, 58.28],
                  [-674.696, -8.22],
                  [-712.276, -109.464]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 1,
            "ty": "sh",
            "ix": 2,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [0, 0],
                  [27.359, 9.334],
                  [25.755, 22.242],
                  [-47.883, 117.038],
                  [-65.823, 77.3],
                  [-2.542, 0],
                  [-1.42, -0.942],
                  [1.954, -3.91],
                  [-49.266, -59.644],
                  [-61.057, 0.004],
                  [-25.621, 7.193],
                  [0, 0],
                  [-5.092, 1.269],
                  [-2.673, 0],
                  [-0.882, -2.385],
                  [14.606, -7.305],
                  [0.139, -0.061],
                  [0, 0],
                  [106.592, -42.64],
                  [0, 0],
                  [84.897, -0.005]
                ],
                "o": [
                  [-31.539, 0],
                  [-30.624, -10.45],
                  [-63.499, -54.84],
                  [46.211, -112.949],
                  [1.647, -1.934],
                  [1.7, 0],
                  [3.644, 2.41],
                  [-57.15, 114.302],
                  [31.626, 38.289],
                  [25.12, -0.001],
                  [0, 0],
                  [391.44, -106.082],
                  [3.283, -0.819],
                  [9.759, 0],
                  [0.964, 2.603],
                  [-0.139, 0.069],
                  [0, 0],
                  [-49.753, 21.602],
                  [0, 0],
                  [-65.929, 26.379],
                  [0, 0]
                ],
                "v": [
                  [-666.392, 329.999],
                  [-755.154, 315.932],
                  [-840.118, 266.665],
                  [-863.652, 7.639],
                  [-663.454, -298.463],
                  [-656.863, -301.506],
                  [-652.094, -300.067],
                  [-649.13, -288.983],
                  [-661.357, -19.239],
                  [-515.516, 41.004],
                  [-439.046, 30.162],
                  [-421.695, 25.46],
                  [885.834, -328.765],
                  [894.811, -329.999],
                  [908.56, -322.067],
                  [896.929, -303.095],
                  [896.51, -302.899],
                  [895.759, -302.572],
                  [-430.559, 269.616],
                  [-433.482, 270.786],
                  [-666.361, 329.999]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 2",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "mm",
            "mm": 1,
            "nm": "Merge Paths 1",
            "mn": "ADBE Vector Filter - Merge",
            "hd": false
          }, {
            "ty": "fl",
            "c": {
              "a": 0,
              "k": [0.800000059838, 0.800000059838, 0.800000059838, 1],
              "ix": 4
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 5
            },
            "r": 1,
            "bm": 0,
            "nm": "Fill 1",
            "mn": "ADBE Vector Graphic - Fill",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [912.199, 330.624],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transform"
          }],
          "nm": "Group 2",
          "np": 6,
          "cix": 2,
          "bm": 0,
          "ix": 2,
          "mn": "ADBE Vector Group",
          "hd": false
        }, {
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-32.88, 0],
                  [-27.075, 7.6],
                  [0, 0],
                  [-137.523, 37.218],
                  [96.743, -38.701],
                  [0, 0],
                  [68.463, -7.526],
                  [11.757, 0],
                  [46.134, 39.842],
                  [-44.689, 109.231],
                  [-30.802, 47.827],
                  [-31.963, 40.259],
                  [-2.236, -38.46],
                  [-22.674, -27.45],
                  [-27.94, -11.531]
                ],
                "o": [
                  [26.677, 0],
                  [0, 0],
                  [668.05, -181.044],
                  [-218.216, 94.714],
                  [0, 0],
                  [-54.043, 21.622],
                  [-12.479, 1.37],
                  [-63.032, 0],
                  [-57.115, -49.326],
                  [16.956, -41.444],
                  [24.302, -37.736],
                  [-16.904, 46.676],
                  [2.318, 39.874],
                  [17.63, 21.344],
                  [27.479, 11.342]
                ],
                "v": [
                  [-522.722, 58.655],
                  [-441.717, 47.201],
                  [-411.188, 38.928],
                  [835.264, -298.785],
                  [-444.501, 253.205],
                  [-447.424, 254.375],
                  [-637.183, 310.43],
                  [-673.708, 312.494],
                  [-835.94, 253.285],
                  [-854.667, 14.333],
                  [-782.694, -120.203],
                  [-697.924, -237.711],
                  [-720.026, -109.442],
                  [-682.362, -7.981],
                  [-613.686, 41.563]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 1,
            "ty": "sh",
            "ix": 2,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [9.994, 0],
                  [3.313, -0.827],
                  [305.713, -82.851],
                  [0, 0],
                  [25.082, 0],
                  [25.054, 10.24],
                  [15.901, 19.251],
                  [-57.08, 114.163],
                  [3.802, 2.515],
                  [1.775, 0],
                  [1.718, -2.018],
                  [46.23, -112.994],
                  [-63.634, -54.957],
                  [-30.671, -10.464],
                  [-31.58, 0],
                  [-45.904, 13.442],
                  [-32.41, 12.967],
                  [0, 0],
                  [-49.754, 21.602],
                  [0, 0],
                  [-0.141, 0.069],
                  [0.991, 2.678]
                ],
                "o": [
                  [-2.704, 0],
                  [-5.252, 1.307],
                  [0, 0],
                  [-25.599, 7.187],
                  [-30.195, 0],
                  [-25.431, -10.394],
                  [-49.165, -59.523],
                  [2.038, -4.077],
                  [-1.481, -0.981],
                  [-2.651, -0.001],
                  [-65.841, 77.32],
                  [-47.95, 117.203],
                  [25.791, 22.274],
                  [27.399, 9.348],
                  [37.747, -0.002],
                  [39.6, -11.596],
                  [0, 0],
                  [106.479, -42.595],
                  [0, 0],
                  [0.148, -0.064],
                  [14.889, -7.449],
                  [-0.91, -2.459]
                ],
                "v": [
                  [887.435, -330.374],
                  [878.367, -329.128],
                  [-430.478, 25.453],
                  [-446.517, 29.799],
                  [-522.892, 40.629],
                  [-606.155, 25.197],
                  [-668.444, -19.478],
                  [-656.17, -288.817],
                  [-659.263, -300.381],
                  [-664.24, -301.881],
                  [-671.115, -298.706],
                  [-871.375, 7.496],
                  [-847.739, 266.948],
                  [-762.649, 316.286],
                  [-673.765, 330.374],
                  [-549.463, 310.394],
                  [-440.719, 271.134],
                  [-437.796, 269.965],
                  [888.408, -302.174],
                  [889.28, -302.554],
                  [889.716, -302.756],
                  [901.536, -322.198]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 2",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 2,
            "ty": "sh",
            "ix": 3,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [26.131, 0],
                  [35.565, 43.058],
                  [-36.091, 96.757],
                  [37.03, -90.509],
                  [-57.387, -49.561],
                  [-63.121, 0],
                  [-12.551, 1.377],
                  [-54.083, 21.638],
                  [0, 0],
                  [-205.599, 89.244],
                  [11.863, -3.214]
                ],
                "o": [
                  [-65.292, 0],
                  [-45.449, -55.022],
                  [-57.925, 72.571],
                  [-44.823, 109.561],
                  [46.102, 39.814],
                  [11.858, 0],
                  [68.567, -7.538],
                  [0, 0],
                  [97.807, -39.127],
                  [-214.505, 58.039],
                  [-27.406, 7.693]
                ],
                "v": [
                  [-522.722, 57.905],
                  [-681.783, -8.459],
                  [-695.617, -241.814],
                  [-855.362, 14.049],
                  [-836.43, 253.853],
                  [-673.708, 313.244],
                  [-637.101, 311.176],
                  [-447.145, 255.071],
                  [-444.222, 253.902],
                  [845.019, -302.202],
                  [-441.92, 46.479]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 3",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 3,
            "ty": "sh",
            "ix": 4,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-2.491, 0],
                  [-0.968, -2.614],
                  [14.324, -7.166],
                  [0.135, -0.059],
                  [108.931, -43.575],
                  [0, 0],
                  [84.804, -0.005],
                  [0, 0],
                  [54.263, 46.864],
                  [-47.815, 116.872],
                  [-65.806, 77.279],
                  [-2.354, 0],
                  [-1.399, -0.927],
                  [1.872, -3.745],
                  [-49.366, -59.766],
                  [-60.335, 0],
                  [-26.031, 7.308],
                  [-5.94, 1.478]
                ],
                "o": [
                  [9.345, 0],
                  [0.937, 2.533],
                  [-0.132, 0.065],
                  [-12.169, 5.283],
                  [0, 0],
                  [-64.289, 25.722],
                  [0, 0],
                  [-59.331, 0],
                  [-63.363, -54.722],
                  [46.192, -112.902],
                  [1.625, -1.909],
                  [1.575, 0],
                  [3.49, 2.308],
                  [-57.222, 114.445],
                  [32.384, 39.205],
                  [24.685, 0],
                  [53.92, -14.612],
                  [3.461, -0.864]
                ],
                "v": [
                  [887.435, -329.624],
                  [900.833, -321.938],
                  [889.386, -303.43],
                  [888.982, -303.242],
                  [-438.075, 269.268],
                  [-440.998, 270.437],
                  [-673.737, 329.624],
                  [-673.765, 329.624],
                  [-847.249, 266.38],
                  [-870.681, 7.781],
                  [-670.544, -298.22],
                  [-664.239, -301.131],
                  [-659.677, -299.755],
                  [-656.841, -289.152],
                  [-669.022, -19],
                  [-522.892, 41.379],
                  [-446.321, 30.523],
                  [878.548, -328.4]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 4",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "mm",
            "mm": 1,
            "nm": "Merge Paths 1",
            "mn": "ADBE Vector Filter - Merge",
            "hd": false
          }, {
            "ty": "fl",
            "c": {
              "a": 0,
              "k": [0.109803929048, 0.109803929048, 0.109803929048, 1],
              "ix": 4
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 5
            },
            "r": 1,
            "bm": 0,
            "nm": "Fill 1",
            "mn": "ADBE Vector Graphic - Fill",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [920.575, 331.624],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transform"
          }],
          "nm": "Group 3",
          "np": 8,
          "cix": 2,
          "bm": 0,
          "ix": 3,
          "mn": "ADBE Vector Group",
          "hd": false
        }, {
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [-17.445, 47.461],
                  [30.823, -75.34],
                  [-57.251, -49.442],
                  [-63.126, 0],
                  [-12.493, 1.371],
                  [-54.058, 21.628],
                  [0, 0],
                  [-208.57, 90.529],
                  [394.071, -106.795],
                  [0, 0],
                  [26.643, 0],
                  [34.906, 42.262],
                  [2.313, 39.793]
                ],
                "o": [
                  [-74.181, 93.178],
                  [-44.757, 109.398],
                  [46.204, 39.903],
                  [11.77, 0],
                  [68.512, -7.531],
                  [0, 0],
                  [97.436, -38.978],
                  [-178.4, 48.274],
                  [0, 0],
                  [-27.038, 7.59],
                  [-66.362, 0],
                  [-22.623, -27.387],
                  [-2.268, -39.004]
                ],
                "v": [
                  [-696.779, -239.753],
                  [-855.013, 14.191],
                  [-836.184, 253.569],
                  [-673.708, 312.869],
                  [-637.142, 310.803],
                  [-447.295, 254.727],
                  [-444.361, 253.554],
                  [840.142, -300.492],
                  [-415.841, 39.801],
                  [-441.822, 46.842],
                  [-522.722, 58.28],
                  [-682.071, -8.22],
                  [-719.651, -109.464]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ind": 1,
            "ty": "sh",
            "ix": 2,
            "ks": {
              "a": 0,
              "k": {
                "i": [
                  [0, 0],
                  [27.359, 9.334],
                  [25.755, 22.242],
                  [-47.883, 117.038],
                  [-65.823, 77.3],
                  [-2.542, 0],
                  [-1.42, -0.942],
                  [1.954, -3.91],
                  [-49.266, -59.644],
                  [-61.057, 0.004],
                  [-25.621, 7.193],
                  [0, 0],
                  [-5.092, 1.269],
                  [-2.673, 0],
                  [-0.882, -2.385],
                  [14.606, -7.305],
                  [0.139, -0.061],
                  [0, 0],
                  [106.592, -42.64],
                  [0, 0],
                  [84.897, -0.005]
                ],
                "o": [
                  [-31.539, 0],
                  [-30.624, -10.45],
                  [-63.499, -54.84],
                  [46.211, -112.949],
                  [1.647, -1.934],
                  [1.7, 0],
                  [3.644, 2.41],
                  [-57.15, 114.302],
                  [31.626, 38.289],
                  [25.12, -0.001],
                  [0, 0],
                  [391.44, -106.082],
                  [3.283, -0.819],
                  [9.759, 0],
                  [0.964, 2.603],
                  [-0.139, 0.069],
                  [0, 0],
                  [-49.753, 21.602],
                  [0, 0],
                  [-65.929, 26.379],
                  [0, 0]
                ],
                "v": [
                  [-673.767, 329.999],
                  [-762.529, 315.932],
                  [-847.493, 266.665],
                  [-871.027, 7.639],
                  [-670.829, -298.463],
                  [-664.238, -301.506],
                  [-659.469, -300.067],
                  [-656.505, -288.983],
                  [-668.732, -19.239],
                  [-522.891, 41.004],
                  [-446.421, 30.162],
                  [-429.07, 25.46],
                  [878.458, -328.765],
                  [887.436, -329.999],
                  [901.185, -322.067],
                  [889.553, -303.095],
                  [889.135, -302.899],
                  [888.384, -302.572],
                  [-437.934, 269.616],
                  [-440.857, 270.786],
                  [-673.736, 329.999]
                ],
                "c": true
              },
              "ix": 2
            },
            "nm": "Path 2",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "mm",
            "mm": 1,
            "nm": "Merge Paths 1",
            "mn": "ADBE Vector Filter - Merge",
            "hd": false
          }, {
            "ty": "fl",
            "c": {
              "a": 0,
              "k": [0.109803929048, 0.109803929048, 0.109803929048, 1],
              "ix": 4
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 5
            },
            "r": 1,
            "bm": 0,
            "nm": "Fill 1",
            "mn": "ADBE Vector Graphic - Fill",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [920.575, 331.624],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transform"
          }],
          "nm": "Group 4",
          "np": 6,
          "cix": 2,
          "bm": 0,
          "ix": 4,
          "mn": "ADBE Vector Group",
          "hd": false
        }],
        "ip": 0,
        "op": 900.000036657751,
        "st": 0,
        "ct": 1,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 3,
        "ty": 2,
        "nm": "blue_nike_progress_bar.png",
        "cl": "png",
        "refId": "image_1",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [960, 364, 0],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [1150.5, 647, 0],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [100, 100, 100],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "hasMask": true,
        "masksProperties": [{
          "inv": false,
          "mode": "a",
          "pt": {
            "a": 1,
            "k": [{
              "i": {
                "x": 0.629,
                "y": 0.264
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 1,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [256.135, 487.572],
                  [245.432, 485.572],
                  [245.432, 1254.127],
                  [256.135, 1256.127]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 1,
                "y": 0.998
              },
              "o": {
                "x": 1,
                "y": 0
              },
              "t": 11,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [528.364, 471.572],
                  [260.364, 469.572],
                  [260.364, 1238.126],
                  [528.364, 1240.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.935,
                "y": 0
              },
              "o": {
                "x": 0,
                "y": 0
              },
              "t": 18,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [528.364, 463.572],
                  [260.364, 461.572],
                  [260.364, 1230.126],
                  [528.364, 1232.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.955,
                "y": 0
              },
              "o": {
                "x": 0.333,
                "y": 0
              },
              "t": 25,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [852.364, 479.572],
                  [260.364, 477.572],
                  [260.364, 1246.126],
                  [852.364, 1248.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.912,
                "y": 0
              },
              "o": {
                "x": 0.391,
                "y": 0
              },
              "t": 36,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [852.364, 479.572],
                  [260.364, 477.572],
                  [260.364, 1246.126],
                  [852.364, 1248.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.908,
                "y": 0
              },
              "o": {
                "x": 0.088,
                "y": 1
              },
              "t": 48,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [858.356, 487.572],
                  [261.36, 485.572],
                  [261.36, 1254.126],
                  [858.356, 1256.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.667,
                "y": 1
              },
              "o": {
                "x": 0.092,
                "y": 1
              },
              "t": 55,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [862.285, 439.572],
                  [263.324, 437.572],
                  [263.324, 1206.126],
                  [862.285, 1208.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.333,
                "y": 0
              },
              "t": 60,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [897.611, 459.572],
                  [260.987, 457.572],
                  [260.987, 1226.126],
                  [897.611, 1228.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 67,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [951.764, 515.572],
                  [262.064, 513.572],
                  [262.064, 1282.126],
                  [951.764, 1284.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 74,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [956.364, 491.572],
                  [262.364, 489.572],
                  [262.364, 1258.126],
                  [956.364, 1260.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 80,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1008.968, 511.572],
                  [262.666, 509.572],
                  [262.666, 1278.126],
                  [1008.968, 1280.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 87,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1055.649, 451.572],
                  [262.007, 449.572],
                  [262.007, 1218.126],
                  [1055.649, 1220.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 89,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1048.5, 499.572],
                  [262.432, 497.572],
                  [262.432, 1266.126],
                  [1048.5, 1268.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 91,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1081.752, 431.572],
                  [261.058, 429.572],
                  [261.058, 1198.126],
                  [1081.752, 1200.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.903
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 93,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1076.364, 491.572],
                  [260.364, 489.572],
                  [260.364, 1258.126],
                  [1076.364, 1260.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.667,
                "y": 1
              },
              "o": {
                "x": 0.176,
                "y": 0.103
              },
              "t": 94,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1094.55, 467.572],
                  [261.457, 465.572],
                  [261.457, 1234.126],
                  [1094.55, 1236.126]
                ],
                "c": true
              }]
            }, {
              "i": {
                "x": 0.933,
                "y": 0
              },
              "o": {
                "x": 0.333,
                "y": 0.334
              },
              "t": 152,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [1104.882, 475.572],
                  [262.623, 473.572],
                  [262.623, 1242.126],
                  [1104.882, 1244.126]
                ],
                "c": true
              }]
            }, {
              "t": 157.000006394741,
              "s": [{
                "i": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "o": [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                "v": [
                  [2024.5, 447.572],
                  [260.432, 445.572],
                  [260.432, 1214.126],
                  [2024.5, 1216.126]
                ],
                "c": true
              }]
            }],
            "ix": 1
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 3
          },
          "x": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "nm": "Mask 1"
        }],
        "ip": 0,
        "op": 900.000036657751,
        "st": 0,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 4,
        "ty": 4,
        "nm": "Shape Layer 1",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [960, 540, 0],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0, 0],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [100, 100, 100],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "hasMask": true,
        "masksProperties": [{
          "inv": false,
          "mode": "f",
          "pt": {
            "a": 0,
            "k": {
              "i": [
                [0.884, 2.39],
                [5.378, -1.346],
                [13.188, -3.574],
                [22.004, -0.988],
                [20.196, 4.252],
                [23.933, 28.974],
                [6.059, 17.938],
                [-0.128, 22.491],
                [-31.156, 62.314],
                [0, 0],
                [0, 0],
                [32.361, -48.364],
                [19.27, -47.1],
                [-1.981, -40.179],
                [-8.079, -17.696],
                [-16.207, -13.997],
                [-17.264, -8.971],
                [-17.858, -4.564],
                [-18.149, -0.91],
                [-5.084, 0],
                [-12.8, 1.407],
                [-54.556, 21.828],
                [0, 0],
                [-12.174, 5.287]
              ],
              "o": [
                [-1.14, -3.074],
                [-5.86, 1.462],
                [-21.779, 6.113],
                [-22.051, 0.992],
                [-42.493, -8.948],
                [-11.691, -14.154],
                [-6.399, -18.947],
                [0.28, -49.278],
                [0, 0],
                [0, 0],
                [-43.281, 50.826],
                [-37.002, 55.298],
                [-21.761, 53.188],
                [1.073, 21.777],
                [8.499, 18.616],
                [15.489, 13.377],
                [16.236, 8.437],
                [16.649, 4.255],
                [4.929, 0.247],
                [12.159, 0],
                [69.706, -7.662],
                [0, 0],
                [108.821, -43.533],
                [5.41, -2.705]
              ],
              "v": [
                [894.116, -318.337],
                [881.446, -319.721],
                [-443.192, 39.141],
                [-509.175, 49.843],
                [-572.844, 44.928],
                [-674.38, -13.039],
                [-701.13, -61.403],
                [-710.581, -123.853],
                [-663.205, -292.026],
                [-662.744, -292.947],
                [-663.411, -292.163],
                [-777.407, -142.679],
                [-862.21, 11.638],
                [-892.019, 152.346],
                [-878.227, 211.833],
                [-840.994, 260.983],
                [-791.634, 294.661],
                [-740.251, 314.255],
                [-687.807, 322.04],
                [-672.784, 322.41],
                [-635.257, 320.297],
                [-443.098, 263.641],
                [-440.175, 262.472],
                [886.666, -309.95]
              ],
              "c": true
            },
            "ix": 1
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 3
          },
          "x": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "nm": "Mask 1"
        }],
        "shapes": [{
          "ty": "gr",
          "it": [{
            "ty": "rc",
            "d": 1,
            "s": {
              "a": 0,
              "k": [1922.692, 766.106],
              "ix": 2
            },
            "p": {
              "a": 0,
              "k": [0, 0],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 20,
              "ix": 4
            },
            "nm": "Rectangle Path 1",
            "mn": "ADBE Vector Shape - Rect",
            "hd": false
          }, {
            "ty": "st",
            "c": {
              "a": 0,
              "k": [1, 1, 1, 1],
              "ix": 3
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 4
            },
            "w": {
              "a": 0,
              "k": 29,
              "ix": 5
            },
            "lc": 1,
            "lj": 1,
            "ml": 4,
            "bm": 0,
            "nm": "Stroke 1",
            "mn": "ADBE Vector Graphic - Stroke",
            "hd": false
          }, {
            "ty": "fl",
            "c": {
              "a": 0,
              "k": [0.4, 0.4, 0.4, 1],
              "ix": 4
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 5
            },
            "r": 1,
            "bm": 0,
            "nm": "Fill 1",
            "mn": "ADBE Vector Graphic - Fill",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [-30.654, 7.053],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transform"
          }],
          "nm": "Rectangle 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }],
        "ip": 0,
        "op": 900.000036657751,
        "st": 0,
        "ct": 1,
        "bm": 0
      }]
    }],
    "fonts": {
      "list": [{
        "origin": 3,
        "fPath": "",
        "fClass": "Animation",
        "fFamily": "Tahoma",
        "fWeight": "",
        "fStyle": "Regular",
        "fName": "Tahoma",
        "ascent": 75.9994506835938
      }]
    },
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 5,
      "nm": "Loading Nike-Verse",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [249.29, 392.298, 0],
          "ix": 2,
          "l": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1,
          "l": 2
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6,
          "l": 2
        }
      },
      "ao": 0,
      "t": {
        "d": {
          "k": [{
            "s": {
              "s": 30,
              "f": "Tahoma",
              "t": "Loading Nike-Verse",
              "ca": 0,
              "j": 2,
              "tr": 0,
              "lh": 36,
              "ls": 0,
              "fc": [0, 0, 0]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 158.000006435472,
      "st": 0,
      "ct": 1,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 2,
      "ty": 5,
      "nm": "You’re all set!",
      "sr": 1,
      "ks": {
        "o": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 180,
            "s": [100]
          }, {
            "t": 185.000007535204,
            "s": [0]
          }],
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [251.75, 427, 0],
          "ix": 2,
          "l": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1,
          "l": 2
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6,
          "l": 2
        }
      },
      "ao": 0,
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [338, 28],
              "ps": [-169, -55],
              "s": 30,
              "f": "Tahoma",
              "t": "You’re all set!",
              "ca": 0,
              "j": 2,
              "tr": 0,
              "lh": 36,
              "ls": 0,
              "fc": [0, 0, 0]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 158.000006435472,
      "op": 900.000036657751,
      "st": 0,
      "ct": 1,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 3,
      "ty": 5,
      "nm": "<empty text layer>",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [220, 386, 0],
          "ix": 2,
          "l": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1,
          "l": 2
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6,
          "l": 2
        }
      },
      "ao": 0,
      "t": {
        "d": {
          "k": [{
            "s": {
              "s": 30,
              "f": "Tahoma",
              "t": "",
              "ca": 0,
              "j": 2,
              "tr": 0,
              "lh": 36,
              "ls": 0,
              "fc": [0, 0, 0]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 900.000036657751,
      "st": 0,
      "ct": 1,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 4,
      "ty": 2,
      "nm": "Metal logo",
      "refId": "image_0",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 157,
            "s": [8]
          }, {
            "t": 159.000006476203,
            "s": [0]
          }],
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [255.251, 275.232, 0],
          "ix": 2,
          "l": 2
        },
        "a": {
          "a": 0,
          "k": [300, 231.5, 0],
          "ix": 1,
          "l": 2
        },
        "s": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667, 0.667, 0.667],
              "y": [1, 1, 1]
            },
            "o": {
              "x": [0.167, 0.167, 0.167],
              "y": [0.167, 0.167, 17.083]
            },
            "t": 124,
            "s": [83.585, 83.585, 100]
          }, {
            "i": {
              "x": [0.667, 0.667, 0.667],
              "y": [1, 1, 1]
            },
            "o": {
              "x": [0.333, 0.333, 0.333],
              "y": [0, 0, 0]
            },
            "t": 157,
            "s": [82, 82, 100]
          }, {
            "i": {
              "x": [0.667, 0.667, 0.667],
              "y": [1, 1, 1]
            },
            "o": {
              "x": [0.333, 0.333, 0.333],
              "y": [0, 0, 0]
            },
            "t": 159,
            "s": [84, 84, 100]
          }, {
            "i": {
              "x": [0.667, 0.667, 0.667],
              "y": [1, 1, 1]
            },
            "o": {
              "x": [0.167, 0.167, 0.167],
              "y": [0, 0, 0]
            },
            "t": 160,
            "s": [82, 82, 100]
          }, {
            "i": {
              "x": [0.667, 0.667, 0.667],
              "y": [1, 1, 1]
            },
            "o": {
              "x": [0.167, 0.167, 0.167],
              "y": [0, 0, 0]
            },
            "t": 161,
            "s": [80, 80, 100]
          }, {
            "t": 163.000006639126,
            "s": [82, 82, 100]
          }],
          "ix": 6,
          "l": 2
        }
      },
      "ao": 0,
      "ef": [{
        "ty": 5,
        "nm": "Pixel Motion Blur 2",
        "np": 6,
        "mn": "ADBE OFMotionBlur",
        "ix": 1,
        "en": 1,
        "ef": [{
          "ty": 7,
          "nm": "Shutter Control",
          "mn": "ADBE OFMotionBlur-0001",
          "ix": 1,
          "v": {
            "a": 0,
            "k": 1,
            "ix": 1
          }
        }, {
          "ty": 0,
          "nm": "Shutter Angle",
          "mn": "ADBE OFMotionBlur-0002",
          "ix": 2,
          "v": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 157,
              "s": [0]
            }, {
              "t": 162.000006598395,
              "s": [0]
            }],
            "ix": 2
          }
        }, {
          "ty": 0,
          "nm": "Shutter Samples",
          "mn": "ADBE OFMotionBlur-0003",
          "ix": 3,
          "v": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 157,
              "s": [5]
            }, {
              "t": 162.000006598395,
              "s": [1]
            }],
            "ix": 3
          }
        }, {
          "ty": 0,
          "nm": "Vector Detail",
          "mn": "ADBE OFMotionBlur-0004",
          "ix": 4,
          "v": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 157,
              "s": [20]
            }, {
              "t": 162.000006598395,
              "s": [20]
            }],
            "ix": 4
          }
        }]
      }],
      "ip": 158.000006435472,
      "op": 901.000036698482,
      "st": 1.00000004073083,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 5,
      "ty": 0,
      "nm": "nike tick load 2",
      "refId": "comp_0",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 157,
            "s": [8]
          }, {
            "t": 159.000006476203,
            "s": [0]
          }],
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [74, 290, 0],
          "ix": 2,
          "l": 2
        },
        "a": {
          "a": 0,
          "k": [271.304, 696.522, 0],
          "ix": 1,
          "l": 2
        },
        "s": {
          "a": 0,
          "k": [25.556, 25.556, 100],
          "ix": 6,
          "l": 2
        }
      },
      "ao": 0,
      "ef": [{
        "ty": 5,
        "nm": "Pixel Motion Blur",
        "np": 6,
        "mn": "ADBE OFMotionBlur",
        "ix": 1,
        "en": 1,
        "ef": [{
          "ty": 7,
          "nm": "Shutter Control",
          "mn": "ADBE OFMotionBlur-0001",
          "ix": 1,
          "v": {
            "a": 0,
            "k": 1,
            "ix": 1
          }
        }, {
          "ty": 0,
          "nm": "Shutter Angle",
          "mn": "ADBE OFMotionBlur-0002",
          "ix": 2,
          "v": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 155,
              "s": [180]
            }, {
              "t": 163.000006639126,
              "s": [360]
            }],
            "ix": 2
          }
        }, {
          "ty": 0,
          "nm": "Shutter Samples",
          "mn": "ADBE OFMotionBlur-0003",
          "ix": 3,
          "v": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 155,
              "s": [5]
            }, {
              "t": 163.000006639126,
              "s": [3]
            }],
            "ix": 3
          }
        }, {
          "ty": 0,
          "nm": "Vector Detail",
          "mn": "ADBE OFMotionBlur-0004",
          "ix": 4,
          "v": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 155,
              "s": [13.37]
            }, {
              "t": 163.000006639126,
              "s": [5]
            }],
            "ix": 4
          }
        }]
      }],
      "w": 1920,
      "h": 1080,
      "ip": 0,
      "op": 158.000006435472,
      "st": 0,
      "bm": 0
    }],
    "markers": []
  };
  var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animationData
  };

  var anim;

  anim = lottie.loadAnimation(params);




//  Opening animation //
var openinganimation = gsap.timeline({

});

openinganimation.from(".icon", {
    opacity: 0,
    stagger: 0.3,
    ease: "steps(14)",
    duration: 3.6
  },0)

  // This is to animate all icons EXCEPT the Nike-Verse icon
  .from("[data-name='nike_general']", {
    opacity: 0,
    stagger: 0.3,
    ease: "steps(10)",
    duration: 2
  }, "-=2")
  .from("[data-name='shop']", {
    opacity: 0,
    stagger: 0.3,
    ease: "steps(6)",
    duration: 2
  }, "-=1.5")
  .from("[data-name='nikeverse']", {
    opacity: 0,
    stagger: 0.3,
    ease: "steps(9)",
    duration: 2
  }, "-=1.5") // <--- load the icon name only of this one, the image is hidden down below.

  // Nikeverse specific
  .set(flames, {
    visibility: "visible"
  }, 0)  // <--- Make this visible via CSS

  .set(nikeversechildren, {
    opacity: 0,    // <--- Hide the image tho, until I'm ready
  }, 0)

  .from(nikeversechildren, {
    duration: 2,
    rotation: "8_short",
    y: -25,
    x: -46,
    ease: "steps(10)",
    Opacity: 1,
  }, "+=2")   // <--- 2 seconds after, bring the space man in... he's late!

  .set(flames, {
    visibility: "hidden"
  }) // <--- After complete, hide this


//  NIKE ICON ANIMATION 🚩🚩

  var animationData = {
    "v": "5.9.6",
    "fr": 29.9700012207031,
    "ip": 8.00000032584668,
    "op": 50.0000020365418,
    "w": 676,
    "h": 584,
    "nm": "nike_icon_animation",
    "ddd": 1,
    "assets": [],
    "layers": [{
      "ddd": 1,
      "ind": 1,
      "ty": 4,
      "nm": "NI",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "rx": {
          "a": 0,
          "k": 0,
          "ix": 8
        },
        "ry": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "rz": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "or": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 7
        },
        "p": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 37,
            "s": [337.982, 291.818, 0],
            "to": [-141.023, 0, 141.023],
            "ti": [141.023, 0, -141.023]
          }, {
            "t": 45.0000018328876,
            "s": [-508.157, 291.818, 846.138]
          }],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [337.982, 291.818, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [22.197, 88],
                [-22.602, 88],
                [-17.511, 10.133],
                [-46.603, 88],
                [-88.203, 88],
                [-22.197, -88],
                [22.069, -88],
                [16.958, -9.066],
                [46.603, -88],
                [88.203, -88]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [189.955, 210.956],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 1",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [22.197, 88],
                [-22.602, 88],
                [-17.511, 10.133],
                [-46.603, 88],
                [-88.203, 88],
                [-22.197, -88],
                [22.069, -88],
                [16.958, -9.066],
                [46.603, -88],
                [88.203, -88]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [189.955, 211.956],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 2",
        "np": 2,
        "cix": 2,
        "bm": 0,
        "ix": 2,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [22.197, 88],
                [-22.602, 88],
                [-17.511, 10.133],
                [-46.603, 88],
                [-88.203, 88],
                [-22.197, -88],
                [22.069, -88],
                [16.958, -9.066],
                [46.603, -88],
                [88.203, -88]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [189.955, 211.956],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 3",
        "np": 4,
        "cix": 2,
        "bm": 0,
        "ix": 3,
        "mn": "ADBE Vector Group",
        "hd": false
      }],
      "ip": 0,
      "op": 900.000036657751,
      "st": 0,
      "ct": 1,
      "bm": 0
    }, {
      "ddd": 1,
      "ind": 2,
      "ty": 4,
      "nm": "I",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "rx": {
          "a": 0,
          "k": 0,
          "ix": 8
        },
        "ry": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "rz": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "or": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 7
        },
        "p": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 37,
            "s": [337.982, 291.818, 0],
            "to": [-141.023, 0, 141.023],
            "ti": [141.023, 0, -141.023]
          }, {
            "t": 45.0000018328876,
            "s": [-508.157, 291.818, 846.138]
          }],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [337.982, 291.818, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-53.803, 88],
                [12.203, -88],
                [53.803, -88],
                [-12.203, 88]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [271.161, 210.956],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 1",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-53.803, 88],
                [12.203, -88],
                [53.803, -88],
                [-12.203, 88]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [271.161, 211.956],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 2",
        "np": 2,
        "cix": 2,
        "bm": 0,
        "ix": 2,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-53.803, 88],
                [12.203, -88],
                [53.803, -88],
                [-12.203, 88]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [271.161, 211.956],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 3",
        "np": 4,
        "cix": 2,
        "bm": 0,
        "ix": 3,
        "mn": "ADBE Vector Group",
        "hd": false
      }],
      "ip": 0,
      "op": 900.000036657751,
      "st": 0,
      "ct": 1,
      "bm": 0
    }, {
      "ddd": 1,
      "ind": 3,
      "ty": 4,
      "nm": "KE",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "rx": {
          "a": 0,
          "k": 0,
          "ix": 8
        },
        "ry": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "rz": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "or": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 7
        },
        "p": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 37,
            "s": [337.982, 291.818, 0],
            "to": [-141.023, 0, 141.023],
            "ti": [141.023, 0, -141.023]
          }, {
            "t": 45.0000018328876,
            "s": [-508.157, 291.818, 846.138]
          }],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [337.982, 291.818, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-16.095, 75.83],
                [-18.755, -15.682],
                [43.991, -84.574]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [117.72, -59],
                [128.772, -88],
                [45.875, -88],
                [45.499, -88],
                [2.301, -88],
                [-41.289, -35.2],
                [-21.169, -88],
                [-63.301, -88],
                [-128.772, 88],
                [-86.935, 88],
                [-59.094, 14.685],
                [-57.186, 88],
                [69.961, 87.723],
                [82.065, 54],
                [33.694, 54],
                [49.763, 11],
                [89.534, 11],
                [101.914, -22],
                [61.953, -22],
                [75.642, -59]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 2",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "mm",
          "mm": 1,
          "nm": "Merge Paths 1",
          "mn": "ADBE Vector Filter - Merge",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [399.231, 210.957],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 1",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-16.095, 75.83],
                [-18.755, -15.682],
                [43.991, -84.574]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [117.72, -59],
                [128.772, -88],
                [45.875, -88],
                [45.499, -88],
                [2.301, -88],
                [-41.289, -35.2],
                [-21.169, -88],
                [-63.301, -88],
                [-128.772, 88],
                [-86.935, 88],
                [-59.094, 14.685],
                [-57.186, 88],
                [69.961, 87.723],
                [82.065, 54],
                [33.694, 54],
                [49.763, 11],
                [89.534, 11],
                [101.914, -22],
                [61.953, -22],
                [75.642, -59]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 2",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "mm",
          "mm": 1,
          "nm": "Merge Paths 1",
          "mn": "ADBE Vector Filter - Merge",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [399.231, 211.957],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 2",
        "np": 4,
        "cix": 2,
        "bm": 0,
        "ix": 2,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-16.095, 75.83],
                [-18.755, -15.682],
                [43.991, -84.574]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [117.72, -59],
                [128.772, -88],
                [45.875, -88],
                [45.499, -88],
                [2.301, -88],
                [-41.289, -35.2],
                [-21.169, -88],
                [-63.301, -88],
                [-128.772, 88],
                [-86.935, 88],
                [-59.094, 14.685],
                [-57.186, 88],
                [69.961, 87.723],
                [82.065, 54],
                [33.694, 54],
                [49.763, 11],
                [89.534, 11],
                [101.914, -22],
                [61.953, -22],
                [75.642, -59]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 2",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "mm",
          "mm": 1,
          "nm": "Merge Paths 1",
          "mn": "ADBE Vector Filter - Merge",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [399.231, 211.957],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 3",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 3,
        "mn": "ADBE Vector Group",
        "hd": false
      }],
      "ip": 0,
      "op": 900.000036657751,
      "st": 0,
      "ct": 1,
      "bm": 0
    }, {
      "ddd": 1,
      "ind": 4,
      "ty": 4,
      "nm": "Tick",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "rx": {
          "a": 0,
          "k": 0,
          "ix": 8
        },
        "ry": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "rz": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "or": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 7
        },
        "p": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.833,
              "y": 0.833
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 0,
            "s": [337.982, 291.818, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.833,
              "y": 0.833
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 37,
            "s": [337.982, 291.818, 0],
            "to": [-178.27, 0, 178.27],
            "ti": [178.27, 0, -178.27]
          }, {
            "t": 41.0000016699642,
            "s": [-731.639, 291.818, 1069.62]
          }],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [337.982, 291.818, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [-50.012, 100.026],
                [-48.32, -41.731],
                [-39.904, 15.961],
                [0, 0],
                [5.32, -1.331],
                [0, 0]
              ],
              "o": [
                [-57.993, 68.104],
                [46.82, 40.436],
                [39.903, -15.963],
                [4.258, -2.129],
                [-2.148, 0.535],
                [-60.653, 17.023]
              ],
              "v": [
                [-226.703, -114.79],
                [-291.081, 85.66],
                [-145.831, 86.193],
                [335.143, -121.308],
                [333.283, -124.765],
                [-146.896, 5.322]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [328.182, 352.761],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 1",
        "np": 2,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [-50.012, 100.026],
                [-48.32, -41.731],
                [-39.904, 15.961],
                [0, 0],
                [5.32, -1.331],
                [0, 0]
              ],
              "o": [
                [-57.993, 68.104],
                [46.82, 40.436],
                [39.903, -15.963],
                [4.258, -2.129],
                [-2.148, 0.535],
                [-60.653, 17.023]
              ],
              "v": [
                [-232.313, -114.79],
                [-296.691, 85.66],
                [-151.441, 86.193],
                [329.534, -121.308],
                [327.673, -124.765],
                [-152.506, 5.322]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [333.792, 352.761],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 2",
        "np": 4,
        "cix": 2,
        "bm": 0,
        "ix": 2,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [-50.012, 100.026],
                [-48.32, -41.731],
                [-39.904, 15.961],
                [0, 0],
                [5.32, -1.331],
                [0, 0]
              ],
              "o": [
                [-57.993, 68.104],
                [46.82, 40.436],
                [39.903, -15.963],
                [4.258, -2.129],
                [-2.148, 0.535],
                [-60.653, 17.023]
              ],
              "v": [
                [-226.703, -114.79],
                [-291.081, 85.66],
                [-145.831, 86.193],
                [335.143, -121.308],
                [333.283, -124.765],
                [-146.896, 5.322]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [328.182, 353.761],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 3",
        "np": 2,
        "cix": 2,
        "bm": 0,
        "ix": 3,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [-50.012, 100.026],
                [-48.32, -41.731],
                [-39.904, 15.961],
                [0, 0],
                [5.32, -1.331],
                [0, 0]
              ],
              "o": [
                [-57.993, 68.104],
                [46.82, 40.436],
                [39.903, -15.963],
                [4.258, -2.129],
                [-2.148, 0.535],
                [-60.653, 17.023]
              ],
              "v": [
                [-240.814, -106.188],
                [-305.192, 94.263],
                [-159.942, 94.795],
                [321.033, -112.706],
                [319.172, -116.163],
                [-161.007, 13.924]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [342.293, 345.159],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 4",
        "np": 4,
        "cix": 2,
        "bm": 0,
        "ix": 4,
        "mn": "ADBE Vector Group",
        "hd": false
      }],
      "ip": 0,
      "op": 900.000036657751,
      "st": 0,
      "ct": 1,
      "bm": 0
    }],
    "markers": []
  };
  var params = {
    container: document.querySelector("[data-name='nike_general']"),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animationData
  };

  var iconAnim;

  iconAnim = lottie.loadAnimation(params);
iconAnim.play();
iconAnim.stop();
