function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(document).ready(function() {
  var scene = document.querySelector('a-scene');
  var marker = document.querySelector('#marker' + 0);
  var position = marker.object3D.getWorldPosition();
  position.x = -4.5;
  position.y = 1.5;
  position.z = -3;

  var box = document.createElement('a-box');
  var text = document.createElement('a-text');
  box.setAttribute('color', getRandomColor());
  box.setAttribute('position', position);
  box.addEventListener('click', function() {
    box.setAttribute('color', getRandomColor());
    text.setAttribute('value', 'Good job!');
  });
  text.setAttribute('value', 'Focus the cursor on me!');
  position.x += 1;
  text.setAttribute('position', position);

  scene.appendChild(box);
  scene.appendChild(text);

});
