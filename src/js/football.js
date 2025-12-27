
const field = document.getElementById('football-field');
const ball = document.getElementById('ball');
const goals = document.querySelectorAll('.goal');
const result = document.getElementById('football-score');

const startX = 300;
const startY = 150;

let x = startX;
let y = startY;
let score = 0;

ball.style.left = `${x}px`;
ball.style.top = `${y}px`;

let vx = 0; // velocity x
let vy = 0; // velocity y
const speed = 8; // how fast the kick is
const friction = 0.95; // slows down over time

field.addEventListener('click', (event) => {
  const rect = field.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  // Current ball center
  const ballCenterX = x + ball.offsetWidth / 2;
  const ballCenterY = y + ball.offsetHeight / 2;

  // Direction vector from ball to click
  const dx = clickX - ballCenterX;
  const dy = clickY - ballCenterY;

  // Distance (to normalize)
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 5) { // avoid tiny accidental kicks
    // Set velocity in that direction
    vx = (dx / distance) * speed;
    vy = (dy / distance) * speed;
  }
});

// Animation loop to move the ball continuously
function animate() {
  // Apply velocity
  x += vx;
  y += vy;

  // Apply friction (slow down gradually)
  vx *= friction;
  vy *= friction;

  // Stop if almost stopped
  if (Math.abs(vx) < 0.1) vx = 0;
  if (Math.abs(vy) < 0.1) vy = 0;

  // Bounce off walls (optional — comment out if you don't want bounce)
  if (x <= 0 || x >= field.offsetWidth - ball.offsetWidth) {
    vx = -vx * 0.8; // lose some energy on bounce
    x = Math.max(0, Math.min(field.offsetWidth - ball.offsetWidth, x));
  }
  if (y <= 0 || y >= field.offsetHeight - ball.offsetHeight) {
    vy = -vy * 0.8;
    y = Math.max(0, Math.min(field.offsetHeight - ball.offsetHeight, y));
  }

  // Update position
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  // Check for goal every frame
  checkGoal();

  requestAnimationFrame(animate);
}

animate(); // start the loop

function checkGoal() {
  const centerYBall = y + ball.offsetHeight / 2;

  goals.forEach(goal => {
    const goalTop = goal.offsetTop;
    const goalBottom = goalTop + goal.offsetHeight;
    const goalLeft = goal.offsetLeft;
    const goalRight = goalLeft + goal.offsetWidth;

    const hitLeftGoal = x <= goalRight && x >= goalLeft - ball.offsetWidth;
    const hitRightGoal = x + ball.offsetWidth >= goalLeft && x <= goalRight;

    if (
      (hitLeftGoal || hitRightGoal) &&
      centerYBall >= goalTop &&
      centerYBall <= goalBottom
    ) {
      score++;
      result.textContent = `Score: ${score}`;
      alert('goal');
      resetBall();
    }
  });
}

function resetBall() {
  x = startX;
  y = startY;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}
