export class AnimationBricks {
    constructor({ canvas, context, color = 'firebrick' } = {}) {
        this.canvas = canvas
        this.context = context
        this.color = color

        this.brickRowCount = 3
        this.brickColumnCount = 5
        this.brickWidth = 75
        this.brickHeight = 20
        this.brickMarginTop = 30
        this.brickMarginLeft = 30
        this.bricks = []

        this.create = this.create.bind(this)
    }

    create() {
        for (let rowNo = 0; rowNo < this.brickRowCount; rowNo++) {
            for (let columnNo = 0; columnNo < this.brickColumnCount; columnNo++) {
                this.context.save()
                this.context.beginPath()
                const brickX = (columnNo * this.brickWidth) + this.brickMarginLeft
                const brickY = (rowNo * this.brickHeight) + this.brickMarginTop
                this.context.rect(
                    brickX,
                    brickY,
                    this.brickWidth,
                    this.brickHeight
                )
                this.context.fillStyle = this.color
                this.context.fill()
                this.context.closePath()
                this.context.restore()
            }
        }
    }
}