export class AnimationBall {
    constructor({ canvas, context, radius = 10, x = 0, y = 0, color = 'red', allowFloor = false } = {}) {
        this.canvas = canvas
        this.context = context
        this.radius = radius
        this.velocityX = -2
        this.velocityY = -2
        this.color = color
        this.x = this.canvas.widht / 2
        this.y = this.canvas.height - 100
        this.allowFloor = allowFloor

        this.create = this.create.bind(this)
        this.detectCollision = this.detectCollision.bind(this)
        this.move = this.move.bind(this)
        this.location = this.location.bind(this)
        this.reverseY = this.reverseY.bind(this)
        this.reverseX = this.reverseX.bind(this)
        this.getRadius = this.getRadius.bind(this)
        this.restart = this.restart.bind(this)
    }

    restart({ x = this.canvas.width / 2, y = this.canvas.height - 100 } = {}) {
        this.x = x
        this.y = y
        this.velocityX = -2
        this.velocityY = -2
    }

    getRadius() {
        return this.radius
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

    location() {
        return {
            x: this.x,
            y: this.y
        }
    }

    reverseY() {
        this.velocityY *= -1
    }

    reverseX() {
        this.velocityX *= -1
    }

    detectCollision() {
        /* Collide Ceil */
        if ((this.y - this.radius) < 0) {
            this.y = this.radius
            this.velocityY *= -1
        }

        /* Collide Floor */
        if (this.allowFloor) {
            if ((this.y + this.radius) > this.canvas.height) {
                this.y = this.canvas.height - this.radius
                this.velocityY *= -1
            }
        }

        /* Collide Left Wall */
        if ((this.x - this.radius) < 0) {
            this.x = this.radius
            this.velocityX *= -1
        }

        /* Collide Right Wall */
        if ((this.x + this.radius) > this.canvas.width) {
            this.x = this.canvas.width - this.radius
            this.velocityX *= -1
        }
    }

    move() {
        this.x += this.velocityX
        this.y += this.velocityY
        this.create()
    }
}