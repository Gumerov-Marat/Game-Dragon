class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }
    init() {
        this.cursors = this.input.keyboard.createCursorKeys()
    }
    create() {
        this.createBackground()
        this.player = new Player(this)
        this.enimy = new Enemy(scene, 150, config.width - 150, config.height / 2, 'enemy', 'enemy1')
    }
    update() {
        this.player.move()
        this.enimy.move()
        this.bg.tilePositionX += 0.5
    }
    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.heigth,'bg').setOrigin(0)
    }
}