document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({/* some options */});

  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 50, // More particles for a dramatic effect
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#DAF7A6"] // Cycling vibrant colors
      },
      "shape": {
        "type": "polygon", // Shapes changed to polygons for variety
        "stroke": {
          "width": 1,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 6 // Hexagonal shapes for a modern aesthetic
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5, // Slow fade in/out effect
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 6, // Larger particle size for emphasis
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none", // Allows wave effect
        "random": false, // Coordinated movement
        "straight": false,
        "out_mode": "bounce", // Particles bounce off edges
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 3000, // Wave motion settings
          "rotateY": 3000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse" // Dramatic repulsion effect on hover
        },
        "onclick": {
          "enable": true,
          "mode": "push" // Adds more particles on click
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 300,
          "size": 10,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 200, // Pushes particles away dramatically
          "duration": 0.5
        },
        "push": {
          "particles_nb": 6 // Add extra particles on click
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}, false);
