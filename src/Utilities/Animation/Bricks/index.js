const ACTIVE = 1
const INACTIVE = 0

export class AnimationBricks {
    constructor({ canvas, context, color = 'firebrick' } = {}) {
        this.canvas = canvas
        this.context = context
        this.color = color

        this.brickRowCount = 3
        this.brickColumnCount = 5
        this.brickWidth = this.canvas.width / 6
        this.brickHeight = this.canvas.height  / 20
        this.brickMarginTop = 10
        this.brickMarginLeft = 10
        this.brickOffsetTop = 30
        this.brickOffsetLeft = 30
        this.bricks = [...Array(this.brickRowCount)].map(() => Array(this.brickColumnCount).fill(
            { x: 0, y: 0, status: ACTIVE }
        ))

        this.create = this.create.bind(this)
        this.detectCollision = this.detectCollision.bind(this)
    }

    create() {
        for (let rowNo = 0; rowNo < this.brickRowCount; rowNo++) {
            for (let columnNo = 0; columnNo < this.brickColumnCount; columnNo++) {
                if (this.bricks[rowNo][columnNo].status === ACTIVE) {
                    this.context.save()
                    this.context.beginPath()
                    const brickX = (columnNo * (this.brickWidth + this.brickMarginLeft) + this.brickOffsetLeft)
                    const brickY = (rowNo * (this.brickHeight + this.brickMarginTop) + this.brickOffsetTop)
                    this.bricks[rowNo][columnNo] = { x: brickX, y: brickY, status: ACTIVE }
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

    detectCollision({ x, y, callback = () => {} } = {}) {
        let points = 0
        let totalBricks = this.brickRowCount * this.brickColumnCount
        let destroyed = 0
        for (let rowNo = 0; rowNo < this.brickRowCount; rowNo++) {
            for (let columnNo = 0; columnNo < this.brickColumnCount; columnNo++) {
                const brick = this.bricks[rowNo][columnNo]
                if (brick.status === INACTIVE) destroyed++
                if (brick.status === ACTIVE) {
                    const brickYLower = brick.y + this.brickHeight
                    const brickYUpper = brick.y
                    const brickXLeft = brick.x
                    const brickXRight = brick.x + this.brickWidth
                    if (y >= brickYUpper && y <= brickYLower && x >= brickXLeft && x <= brickXRight) {
                        this.bricks[rowNo][columnNo] = { x: brick.x, y: brick.y, active: INACTIVE }
                        callback()
                        points++
                    }
                }
            }
        }
        return { points, allDestroyed: totalBricks === destroyed }
    }
}