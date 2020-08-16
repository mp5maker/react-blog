import { Howl } from 'howler'

import { Lerp } from 'Utilities/Lerp'

const hasWindow = typeof(window) !== undefined

const paddleHit = new Howl({
    src: '/sounds/paddle-hit.mp3'
})

export class AnimationPaddle {
    constructor({ canvas, context, color = 'pink', width = 100, height = 20 } = {}) {
        this.canvas = canvas
        this.context = context
        this.color = color
        this.width = width
        this.height = height
        this.x = this.canvas.width / 2 - (this.width / 2)
        this.y = this.canvas.height - this.height
        this.horizontalVelocity = 25
        this.timeout = ""

        this.create = this.create.bind(this)
        this.detectCollision = this.detectCollision.bind(this)
        this.move = this.move.bind(this)
        this.init = this.init.bind(this)
        this.destroy = this.destroy.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.bounceOff = this.bounceOff.bind(this)
        this.restart = this.restart.bind(this)
    }

    restart() {
        this.x = this.canvas.width / 2 - (this.width / 2)
        this.y = this.canvas.height - this.height
    }

    bounceOff({ x, y }) {
        const withinVertical = y > this.y - this.height
        const withinHorizontal = (x > this.x) && (x < (this.width + this.x))
        if (withinVertical && withinHorizontal) {
            paddleHit.play()
            return true
        }
        return false
    }

    onKeyDown(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            const destinationX = this.x + this.horizontalVelocity
            const smoothRight = () => {
                if (this.timeout) clearTimeout(this.timeout)
                this.timeout = setTimeout(() => {
                    this.x = Lerp({
                        start: this.x,
                        end: this.x + this.horizontalVelocity,
                        amount: 0.5
                    })
                    if (this.x < destinationX) smoothRight()
                    else return
                }, 60);
            }
            smoothRight()
            this.detectCollision()
        }
        if (event.key === "Left" || event.key === "ArrowLeft") {
            const destinationX = this.x - this.horizontalVelocity
            const smoothLeft = () => {
                if (this.timeout) clearTimeout(this.timeout)
                this.timeout = setTimeout(() => {
                    this.x = Lerp({
                        start: this.x,
                        end: this.x - this.horizontalVelocity,
                        amount: 0.5
                    })
                    if (this.x > destinationX) smoothLeft()
                    else return
                }, 60);
            }
            smoothLeft()
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