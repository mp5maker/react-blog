export class AnimationBall {
    constructor({ canvas, context, radius = 10, x = 0, y = 0, color = 'red' } = {}) {
        this.canvas = canvas
        this.context = context
        this.radius = radius
        this.velocityX = 0.1
        this.velocityY = 0.1
        this.color = color
        this.x = x
        this.y = y
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

    move() {
        this.x += this.velocityX
        this.y += this.velocityY
        this.create()
    }
}