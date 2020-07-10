class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene;
        this.countMax = 10;
        this.countCreated = 0;
        this.count = 10;
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            loop: true,
            callback: this.tick,
            callbackScope: this
        });
    }

    tick() {
        console.log('cuttent length', this.getLength());
        if (this.countCreated() < this.countMax){
            this.createEnemy();
        } else {
            console.log('remove timer');
            this.timer.remove();
        }
    }

    createEnemy() {
        let enemy = this.getFirstDead();
        if (!enemy){
            enemy = Enemy.generate(this.scene);
        } else {
            enemy.reset();
        }
        this.add(enemy);
        enemy.move();
        ++this.countCreated;
    }
}