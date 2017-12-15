(function () {

var waypoint = new Waypoint({
  element: document.getElementById('first'),
  handler: function(direction) {
    console.log("first");
    triggerFirst();
  },
  offset: -20
})

function triggerFirst() {
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	el = document.getElementById("one");
	el.style.backgroundColor = hue;
}

})()