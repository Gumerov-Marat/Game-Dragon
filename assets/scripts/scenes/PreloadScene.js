class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload')
    }
    preload() {
        this.load.atlas('dragon', 'assets/sprites/dragon.png', 'assets/sprites/dragon.json')
    }
    create() {
        console.log('PreloadScene.create')
        this.scene.start('Start')
    }
}