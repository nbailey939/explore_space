const btn = document.querySelector('#vehicle');
const btn1 = document.querySelector('#spaceport');
const btn2 = document.querySelector('#capsule');
const outputName = document.querySelector('#type');
const outputText = document.querySelector('#text');
const activeBtn = document.querySelector('#vehicle');
const photo1 = document.querySelector('#image');
const photoSrc = document.querySelector('#imagesrcset');
// load initial data for the first of the 3 options
onload = () => {
  outputName.innerHTML = 'Launch vehicle';
  outputText.innerHTML = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used
    to carry a payload from Earth's surface to space, usually to Earth
    orbit or beyond. Our WEB-X carrier rocket is the most powerful in
    operation. Standing 150 metres tall, it's quite an awe-inspiring sight
    on the launch pad!`;
  photo1.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
  photoSrc.srcset = 'assets/technology/image-launch-vehicle-landscape.jpg';
};

// first button pressed brings up first data again
btn.onclick = () => {
  btn1.setAttribute('aria-selected', false);
  btn2.setAttribute('aria-selected', false);
  function checkActive() {
    var i = btn.getAttribute('aria-selected');
    if (i === 'true') {
      i = 'false';
    } else {
      i = 'true';
    }
    btn.setAttribute('aria-selected', i);
  }
  checkActive();
  outputName.innerHTML = 'Launch vehicle';
  outputText.innerHTML = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used
  to carry a payload from Earth's surface to space, usually to Earth
  orbit or beyond. Our WEB-X carrier rocket is the most powerful in
  operation. Standing 150 metres tall, it's quite an awe-inspiring sight
  on the launch pad!`;
  photo1.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
  photoSrc.srcset = 'assets/technology/image-launch-vehicle-landscape.jpg';
};
// pressing button 2 brings up the second set of data clears the active state on the other buttons
btn1.onclick = () => {
  btn.setAttribute('aria-selected', false);
  btn2.setAttribute('aria-selected', false);
  function checkActive() {
    var x = btn1.getAttribute('aria-selected');
    if (x === 'true') {
      x = 'false';
    } else {
      x = 'true';
    }

    btn1.setAttribute('aria-selected', x);
  }
  checkActive();
  outputName.innerHTML = 'spaceport';
  outputText.innerHTML = `A spaceport or cosmodrome is a site for launching (or receiving)
  spacecraft, by analogy to the seaport for ships or airport for
  aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
  situated to take advantage of the Earth’s rotation for launch.`;
  photo1.src = 'assets/technology/image-spaceport-portrait.jpg';
  photoSrc.srcset = 'assets/technology/image-spaceport-landscape.jpg';
};

// loads the third set of data and clears the active state for the other 2 buttons
btn2.onclick = () => {
  btn.setAttribute('aria-selected', false);
  btn1.setAttribute('aria-selected', false);
  function checkActive() {
    var x = btn2.getAttribute('aria-selected');
    if (x === 'true') {
      x = 'false';
    } else {
      x = 'true';
    }
    btn2.setAttribute('aria-selected', x);
  }
  checkActive();
  outputName.innerHTML = 'Space capsule';
  outputText.innerHTML = `A space capsule is an often-crewed spacecraft that uses a blunt-body
  reentry capsule to reenter the Earth's atmosphere without wings. Our
  capsule is where you'll spend your time during the flight. It includes
  a space gym, cinema, and plenty of other activities to keep you
  entertained.`;
  photo1.src = 'assets/technology/image-space-capsule-portrait.jpg';
  photoSrc.srcset = 'assets/technology/image-space-capsule-landscape.jpg';
};
