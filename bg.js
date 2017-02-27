particlesJS("bg", {
  "particles": {
    "number": {
      "value": 16,
      "density": {
        "enable": false
      }
    },
    "color": {
      "value": "#000"
    },
    "opacity": {
      "value": 0
    },
    "shape": {
      "type": "image",
      "image": {
        "src": "img/ring.png",
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 180,
	  "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1.2,
      "random": true,
      "direction": "left",
	  "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      }
    },
    "modes": {
      "bubble": {
        "distance": 900,
        "size": 30,
        "duration": 0.1,
        "opacity": 1,
        "speed": 300
      },
    }
  }
});

$('#video-list-container a').click(function(e) {
  var txt = $(e.target).text();
  $( "#video-list-header" ).text(txt);
});