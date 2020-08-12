export class AnimationBall {
    constructor({ canvas, context, radius = 10, x = 0, y = 0, color = 'red' } = {}) {
        this.canvas = canvas
        this.context = context
        this.radius = radius
        this.velocityX = 1
        this.velocityY = 1
        this.color = color
        this.x = x
        this.y = y

        this.create = this.create.bind(this)
        this.detectCollision = this.detectCollision.bind(this)
        this.move = this.move.bind(this)
    }

    create() {
        this.context.save()
        this.context.beginPath()
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = this.color
        this.context.fill()
        this.context.closePath()
        this.context.restore()
    }

    detectCollision() {
        /* Collide Ceil */
        if ((this.y - this.radius) < 0) {
            this.y = this.radius
            this.velocityY = (-1) * this.velocityY
        }
        /* Collide Floor */
        if ((this.y + this.radius) > this.canvas.height) {
            this.y = this.canvas.height - this.radius
            this.velocityY = (-1) * this.velocityY
        }
        /* Collide Left Wall */
        if ((this.x - this.radius) < 0) {
            this.x = this.radius
            this.velocityX = (-1) * this.velocityX
        }
        /* Collide Right Wall */
        if ((this.x + this.radius) > this.canvas.width) {
            this.x = this.canvas.width - this.radius
            this.velocityX = (-1) * this.velocityX
        }
    }

    move() {
        this.x += this.velocityX
        this.y += this.velocityY
        this.create()
    }
}