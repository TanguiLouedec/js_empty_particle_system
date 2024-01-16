const canvas = document.getElementById('canvas_1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';

class Particle {
  constructor(effect) {
    this.effect = effect; 
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height; 
    this.radius = 15;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill(); 
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas; 
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.number_of_particles = 20; 
    this.create_particles();
  }
  create_particles() {
    for (let i = 0; i < this.number_of_particles; i++) {
      this.particles.push(new Particle(this)) 
    }
  }
  handle_particles(context) {
    this.particles.forEach(particle => {
      particle.draw(context);
    })
  }
}

const effect = new Effect(canvas);
effect.handle_particles(ctx);

function animate() {
   
}
