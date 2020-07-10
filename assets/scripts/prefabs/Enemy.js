class Enemy extends Enemy {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
  }
  init() {
    super.init()
    this.velocity = -250;
  }
  move() {
    this.body.setVelocityX(this.velovity)

  }
}