(function(root){
  
  var Asteroids = root.Asteroids = (root.Asteroids || {});  
    
      var Bullet = Asteroids.Bullet = function(pos, vel) {  
      Asteroids.MovingObject.call(this, pos, vel, 3, '#FF0000');
    this.lifespan = 30;
  };
  
  Bullet.inherits(Asteroids.MovingObject);
  
  Bullet.prototype.move = function(x, y) {
    var bullet = this;
    Asteroids.MovingObject.prototype.move.call(bullet, x, y);
    this.lifespan -= 1;
  };
  
  Bullet.prototype.draw = function(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();

      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
      );
    
      ctx.fill();
    };
  
})(this);
  