class Fire extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, data.texture);
        this.init(data);
    }
    static generate(scene, source) {
        const data = {
            scene,
            x: source.x + source.width / 2,
            y: source.y,
            texture: 'fire',
            velocity: 750
        };
        return new Fire(data);
    }
    reset() {
        
    }
    init(data) {
        this.scene.add.existing(this);
        this.velocity = data.velocity;
         this.scene.events.on('update', this.update, this);
    }

     update() {
         if (this.active && (this.x < -this.width || this.x > config.width + this.width)) {
             console.log('deactived fire');
             this.setAlive(false);
         }
     }

    move() {
        this.body.setVelocityX(this.velocity);
    }

    setAlive(status) {
        // активировать/деактивировать физическое тело
        this.body.enable = status;
        // скрыть/показать текстуру
        this.setVisible(status);
        // деактивировать/активироть объект
        this.setActive(status);
    }

    reset(source) {
        this.x = source.x + source.width;
        this.y = source.y + source.width;
        this.setAlive(true);
    }
}