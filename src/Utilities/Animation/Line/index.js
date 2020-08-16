export class AnimationLine {
    constructor({ canvas, context }) {
        this.canvas = canvas
        this.context = context

        this.create = this.create.bind(this)
    }

    create() {
        this.context.save()
        this.context.beginPath()
        this.context.moveTo(0, (this.canvas.height / 2) + 80)
        this.context.lineTo(this.canvas.width, (this.canvas.height / 2) + 80)
        this.context.strokeStyle = 'orange'
        this.context.stroke()
        this.context.closePath()
        this.context.restore()
    }
}