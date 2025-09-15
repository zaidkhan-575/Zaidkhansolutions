function sayHello() {
  alert("Hello from Zaid Khan's project!");
}
// Navbar change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Reveal sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});
// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal animations
const faders = document.querySelectorAll(".fade-up, .zoom-in");
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = "1";
    entry.target.style.transform = "none";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fade => { appearOnScroll.observe(fade); });
});
// Particles.js configuration
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.3, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const hoverElements = document.querySelectorAll('a, .btn, .card, .portfolio-item');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});
// 3D hover effect
const tiltElements = document.querySelectorAll('.card, .portfolio-item');

tiltElements.forEach(el => {
  const inner = el.querySelector('.card-inner') || el.querySelector('.portfolio-inner');
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * 10; // tilt strength
    const rotateY = ((x - midX) / midX) * 10;
    inner.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
// Staggered reveal
const staggerElements = document.querySelectorAll('.fade-up, .zoom-in, .hero-title, .hero-subtitle, .btn');

const staggerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const children = entry.target.children || [entry.target];
      Array.from(children).forEach((child, i) => {
        child.style.transition = `all 0.6s ease ${(i * 0.2)}s`;
        child.style.opacity = 1;
        child.style.transform = 'translateY(0)';
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

staggerElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  staggerObserver.observe(el);
});
// Particles.js
particlesJS("particles-js", {
  "particles": { "number": {"value":60}, "color":{"value":"#ffffff"}, "shape":{"type":"circle"}, "opacity":{"value":0.5}, "size":{"value":3}, "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.3,"width":1}, "move":{"enable":true,"speed":2} },
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"}},"modes":{"grab":{"distance":140,"line_linked":{"opacity":0.5}},"push":{"particles_nb":4}}},
  "retina_detect":true
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => { cursor.style.left = e.clientX+'px'; cursor.style.top = e.clientY+'px'; });
document.querySelectorAll('a, .btn, .card, .portfolio-item').forEach(el => {
  el.addEventListener('mouseenter', ()=>cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', ()=>cursor.classList.remove('hovered'));
});

// 3D tilt for cards & portfolio
document.querySelectorAll('.card, .portfolio-item').forEach(el => {
  const inner = el.querySelector('.card-inner') || el.querySelector('.portfolio-inner');
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const midX = rect.width/2, midY = rect.height/2;
    inner.style.transform = `rotateX(${-(y-midY)/midY*10}deg) rotateY(${(x-midX)/midX*10}deg)`;
  });
  el.addEventListener('mouseleave', ()=>{ inner.style.transform='rotateX(0deg) rotateY(0deg)'; });
});

// Scroll-triggered stagger animations
const staggerElements = document.querySelectorAll('.fade-up, .zoom-in, .hero-title, .hero-subtitle, .btn');
const staggerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const children = entry.target.children || [entry.target];
      Array.from(children).forEach((child,i) => {
        child.style.transition = `all 0.6s ease ${(i*0.2)}s`;
        child.style.opacity = 1; child.style.transform='translateY(0)';
      });
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.1 });
staggerElements.forEach(el => { el.style.opacity=0; el.style.transform='translateY(50px)'; staggerObserver.observe(el); });
// Navbar scroll
window.addEventListener('scroll',()=>{
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY>50);
});

// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX+'px';
  cursor.style.top = e.clientY+'px';
});
document.querySelectorAll('a,.btn,.card,.portfolio-item').forEach(el => {
  el.addEventListener('mouseenter',()=>cursor.classList.add('hovered'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('hovered'));
});// Galaxy Background with Falling Stars
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 150;

// Create stars
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

// Draw stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveStars();
}

// Animate stars falling
function moveStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].y += stars[i].speed;
    if (stars[i].y > canvas.height) {
      stars[i].y = 0;
      stars[i].x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}

// Resize canvas on window change
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start animation
drawStars();
// Galaxy Background with Falling Stars
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 150;

// Create stars
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

// Draw stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveStars();
}

// Animate stars falling
function moveStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].y += stars[i].speed;
    if (stars[i].y > canvas.height) {
      stars[i].y = 0;
      stars[i].x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}

// Resize canvas on window change
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start animation
drawStars();
// ======= Galaxy Background Dynamically =======

// Create canvas
const galaxyCanvas = document.createElement('canvas');
galaxyCanvas.id = 'galaxy-stars';
document.body.prepend(galaxyCanvas); // add at top of page
const ctx = galaxyCanvas.getContext('2d');

// Make canvas full-screen
function resizeCanvas() {
  galaxyCanvas.width = window.innerWidth;
  galaxyCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create stars
let stars = [];
const numStars = 200;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * galaxyCanvas.width,
    y: Math.random() * galaxyCanvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

// Draw stars
function drawStars() {
  ctx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveStars();
}

// Animate stars
function moveStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].y += stars[i].speed;
    if (stars[i].y > galaxyCanvas.height) {
      stars[i].y = 0;
      stars[i].x = Math.random() * galaxyCanvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}

// Start animation
drawStars();

// Make canvas stay behind content
galaxyCanvas.style.position = 'fixed';
galaxyCanvas.style.top = '0';
galaxyCanvas.style.left = '0';
galaxyCanvas.style.zIndex = '-1'; // behind everything
// ======= Advanced Galaxy Background =======

// Create canvas
const galaxyCanvas = document.createElement('canvas');
galaxyCanvas.id = 'advanced-galaxy';
document.body.prepend(galaxyCanvas); // insert at top of body
const ctx = galaxyCanvas.getContext('2d');

// Resize canvas
function resizeCanvas() {
  galaxyCanvas.width = window.innerWidth;
  galaxyCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create stars
let stars = [];
const numStars = 250;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * galaxyCanvas.width,
    y: Math.random() * galaxyCanvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.3 + 0.1,
    alpha: Math.random()
  });
}

// Shooting stars
let shootingStars = [];
const shootingChance = 0.002; // probability per frame

function drawStars() {
  ctx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

  // Draw normal stars
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.globalAlpha = 0.3 + 0.7 * s.alpha; // twinkle effect
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    // move star
    s.y += s.speed;
    if (s.y > galaxyCanvas.height) {
      s.y = 0;
      s.x = Math.random() * galaxyCanvas.width;
    }

    // twinkle
    s.alpha += (Math.random() - 0.5) * 0.05;
    if (s.alpha < 0) s.alpha = 0;
    if (s.alpha > 1) s.alpha = 1;
  }

  // Randomly add shooting star
  if (Math.random() < shootingChance) {
    shootingStars.push({
      x: Math.random() * galaxyCanvas.width,
      y: Math.random() * 0.5 * galaxyCanvas.height,
      len: Math.random() * 150 + 50,
      speed: Math.random() * 5 + 5
    });
  }

  // Draw shooting stars
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const sh = shootingStars[i];
    ctx.beginPath();
    ctx.moveTo(sh.x, sh.y);
    ctx.lineTo(sh.x - sh.len, sh.y + sh.len);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    // move shooting star
    sh.x += sh.speed;
    sh.y += sh.speed;

    // remove if out of screen
    if (sh.x - sh.len > galaxyCanvas.width || sh.y - sh.len > galaxyCanvas.height) {
      shootingStars.splice(i, 1);
    }
  }

  requestAnimationFrame(drawStars);
}

// Style canvas behind everything
galaxyCanvas.style.position = 'fixed';
galaxyCanvas.style.top = '0';
galaxyCanvas.style.left = '0';
galaxyCanvas.style.zIndex = '-1';
galaxyCanvas.style.pointerEvents = 'none';

// Start animation
drawStars();
// ======= Ultra Galaxy Background =======

// Create canvas
const galaxyCanvas = document.createElement('canvas');
galaxyCanvas.id = 'ultra-galaxy';
document.body.prepend(galaxyCanvas);
const ctx = galaxyCanvas.getContext('2d');

// Resize canvas
function resizeCanvas() {
  galaxyCanvas.width = window.innerWidth;
  galaxyCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create stars
let stars = [];
const numStars = 300;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * galaxyCanvas.width,
    y: Math.random() * galaxyCanvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.3 + 0.1,
    alpha: Math.random()
  });
}

// Shooting stars
let shootingStars = [];
const shootingChance = 0.003;

// Colored galaxy glows
let glows = [
  {x: galaxyCanvas.width*0.2, y: galaxyCanvas.height*0.3, r: 200, color: 'rgba(138,43,226,0.15)'},
  {x: galaxyCanvas.width*0.7, y: galaxyCanvas.height*0.5, r: 300, color: 'rgba(72,61,139,0.15)'},
  {x: galaxyCanvas.width*0.5, y: galaxyCanvas.height*0.8, r: 250, color: 'rgba(199,21,133,0.12)'}
];

// Draw everything
function drawGalaxy() {
  ctx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

  // Draw galaxy glows
  glows.forEach(gl => {
    const gradient = ctx.createRadialGradient(gl.x, gl.y, 0, gl.x, gl.y, gl.r);
    gradient.addColorStop(0, gl.color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(gl.x, gl.y, gl.r, 0, Math.PI*2);
    ctx.fill();
  });

  // Draw stars
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.globalAlpha = 0.3 + 0.7 * s.alpha;
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Move star
    s.y += s.speed;
    if (s.y > galaxyCanvas.height) {
      s.y = 0;
      s.x = Math.random() * galaxyCanvas.width;
    }

    // Twinkle
    s.alpha += (Math.random()-0.5)*0.05;
    if(s.alpha<0) s.alpha=0;
    if(s.alpha>1) s.alpha=1;
  }

  // Shooting stars
  if(Math.random()<shootingChance) {
    shootingStars.push({
      x: Math.random()*galaxyCanvas.width,
      y: Math.random()*0.5*galaxyCanvas.height,
      len: Math.random()*150 + 50,
      speed: Math.random()*5 + 5
    });
  }

  for(let i=shootingStars.length-1;i>=0;i--) {
    const sh = shootingStars[i];
    ctx.beginPath();
    ctx.moveTo(sh.x, sh.y);
    ctx.lineTo(sh.x-sh.len, sh.y+sh.len);
    ctx.strokeStyle='white';
    ctx.lineWidth=2;
    ctx.stroke();

    sh.x += sh.speed;
    sh.y += sh.speed;

    if(sh.x-sh.len>galaxyCanvas.width || sh.y-sh.len>galaxyCanvas.height){
      shootingStars.splice(i,1);
    }
  }

  requestAnimationFrame(drawGalaxy);
}

// Style canvas behind everything
galaxyCanvas.style.position='fixed';
galaxyCanvas.style.top='0';
galaxyCanvas.style.left='0';
galaxyCanvas.style.zIndex='-1';
galaxyCanvas.style.pointerEvents='none';

// Start animation
drawGalaxy();
// ===== Beginner-Friendly Galaxy for Any Page =====

// Wait until DOM is ready
window.addEventListener('load', () => {

  // Create canvas
  const galaxyCanvas = document.createElement('canvas');
  galaxyCanvas.id = 'ultra-galaxy';
  document.body.appendChild(galaxyCanvas); // append at end of body
  const ctx = galaxyCanvas.getContext('2d');

  // Make canvas full screen
  function resizeCanvas() {
    galaxyCanvas.width = window.innerWidth;
    galaxyCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Make canvas behind everything
  galaxyCanvas.style.position = 'fixed';
  galaxyCanvas.style.top = '0';
  galaxyCanvas.style.left = '0';
  galaxyCanvas.style.zIndex = '-9999';
  galaxyCanvas.style.pointerEvents = 'none';

  // Stars
  let stars = [];
  const numStars = 200;
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * galaxyCanvas.width,
      y: Math.random() * galaxyCanvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
      alpha: Math.random()
    });
  }

  // Shooting stars
  let shootingStars = [];
  const shootingChance = 0.003;

  // Draw everything
  function drawGalaxy() {
    // Dark background
    ctx.fillStyle = '#0b0c2a';
    ctx.fillRect(0,0,galaxyCanvas.width, galaxyCanvas.height);

    // Stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      ctx.beginPath();
      ctx.globalAlpha = 0.3 + 0.7 * s.alpha;
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
      ctx.fillStyle = 'white';
      ctx.fill();

      s.y += s.speed;
      if(s.y>galaxyCanvas.height){
        s.y=0;
        s.x=Math.random()*galaxyCanvas.width;
      }

      s.alpha += (Math.random()-0.5)*0.05;
      if(s.alpha<0) s.alpha=0;
      if(s.alpha>1) s.alpha=1;
    }

    // Shooting stars
    if(Math.random()<shootingChance){
      shootingStars.push({
        x: Math.random()*galaxyCanvas.width,
        y: Math.random()*0.5*galaxyCanvas.height,
        len: Math.random()*150+50,
        speed: Math.random()*5+5
      });
    }

    for(let i=shootingStars.length-1;i>=0;i--){
      const sh = shootingStars[i];
      ctx.beginPath();
      ctx.moveTo(sh.x,sh.y);
      ctx.lineTo(sh.x-sh.len, sh.y+sh.len);
      ctx.strokeStyle='white';
      ctx.lineWidth=2;
      ctx.stroke();

      sh.x += sh.speed;
      sh.y += sh.speed;

      if(sh.x-sh.len>galaxyCanvas.width || sh.y-sh.len>galaxyCanvas.height){
        shootingStars.splice(i,1);
      }
    }

    requestAnimationFrame(drawGalaxy);
  }

  drawGalaxy();
});
// Create falling stars effect
function createStars() {
    const galaxyBg = document.createElement('div');
    galaxyBg.className = 'galaxy-bg';
    document.body.appendChild(galaxyBg);
    
    // Create stars
    for (let i = 0; i < 100; i++) {
        createStar(galaxyBg);
    }
}

function createStar(container) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size between 1-3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration (5-15 seconds)
    const duration = Math.random() * 10 + 5;
    star.style.animationDuration = `${duration}s`;
    
    // Random delay
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(star);
}

// Call the function to create stars
createStars();
