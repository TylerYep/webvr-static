function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

VIDEOS = ["videos/suthep.mp4", "videos/waterfall.mp4", "https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/"]

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
    var vid = document.querySelector('video');
    var i = (Number(vid.getAttribute('tag')) + 1) % VIDEOS.length;
    vid.setAttribute('src', VIDEOS[i]);
    vid.setAttribute('tag', i);
    box.setAttribute('color', getRandomColor());
    text.setAttribute('value', 'Good job!');
  });
  text.setAttribute('value', 'Focus the cursor on me!');
  var position2 = marker.object3D.getWorldPosition();
  position2.x = -4;
  position2.y = 1.5;
  position2.z = -3;
  text.setAttribute('position', position2);

  scene.appendChild(box);
  scene.appendChild(text);
});
