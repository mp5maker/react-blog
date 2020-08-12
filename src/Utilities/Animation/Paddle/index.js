const hasWindow = typeof(window) !== undefined

export class AnimationPaddle {
    constructor({ canvas, context, color = 'pink', width = 100, height = 20 } = {}) {
        this.canvas = canvas
        this.context = context
        this.color = color
        this.width = width
        this.height = height
        this.x = this.canvas.width / 2
        this.y = this.canvas.height - this.height
        this.horizontalVelocity = 25

        this.create = this.create.bind(this)
        this.detectCollision = this.detectCollision.bind(this)
        this.move = this.move.bind(this)
        this.init = this.init.bind(this)
        this.destroy = this.destroy.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    onKeyDown(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            this.isKeyPressed = true;
            this.x += this.horizontalVelocity
            this.detectCollision()
        }
        if (event.key === "Left" || event.key === "ArrowLeft") {
            this.isKeyPressed = true;
            this.x -= this.horizontalVelocity
            this.detectCollision()
        }
    }

    init() {
        hasWindow && window.addEventListener('keydown', this.onKeyDown, false)
    }

    destroy() {
        hasWindow && window.removeEventListener('keydown', this.onKeyDown, false)
    }

    create() {
        this.context.save()
        this.context.beginPath()
        this.context.rect(this.x, this.y, this.width, this.height)
        this.context.fillStyle = this.color
        this.context.fill()
        this.context.closePath()
        this.context.restore()
    }

    move() {
        this.create()
    }

    detectCollision() {
        if (this.x <= 0) this.x = 0
        if (this.x >= this.canvas.width - this.width) this.x = this.canvas.width - this.width
    }
}