import { LoadImages } from 'Utilities/LoadImages'

export class AnimationObstacles {
    constructor({ canvas, context, horizontalVelocity, x, y, width = 80, height = 80}) {
        this.canvas = canvas
        this.context = context
        this.horizontalVelocity = horizontalVelocity
        this.obstacles = []
        this.x = this.canvas.width + 100
        this.y = this.canvas.height / 2
        this.width = width
        this.height = height
        this.loaded = false
        this.playing = false
        this.currentIndex = 0

        this.init = this.init.bind(this)
        this.isLoaded = this.isLoaded.bind(this)
        this.restart = this.restart.bind(this)
        this.move = this.move.bind(this)
        this.play = this.play.bind(this)
        this.stop = this.stop.bind(this)
        this.isPlaying = this.isPlaying.bind(this)
        this.detectCollision = this.detectCollision.bind(this)
    }

    detectCollision({ x, y }) {
        const collisionX = (x >= this.x) && (x <= (this.x + this.width))
        const collisionY = y >= (this.y - this.height)
        if (collisionX && collisionY) return true
        return false
    }

    isPlaying() {
        return this.playing
    }

    stop() {
        this.playing = false
    }

    play() {
        this.playing = true
    }

    restart() {
        this.x = this.canvas.width + 100
        this.y = this.canvas.height / 2
        this.currentIndex = 0
    }

    create() {
        this.context.save()
        this.context.drawImage(this.obstacles[this.currentIndex], this.x, this.y, this.width, this.height)
        this.context.restore()
    }

    move() {
        this.x -= 10
        if (this.x < -100) {
            this.currentIndex++
            if (this.currentIndex >= this.obstacles.length) this.currentIndex = 0
            this.x = this.canvas.width + 100
        }
        this.create()
    }

    isLoaded() {
        return this.loaded
    }

    init() {
        return new Promise((resolve) => {
            const obstacles = LoadImages([
                '/assets/Objects/arrow-sign.png',
                '/assets/Objects/bush-1.png',
                '/assets/Objects/bush-2.png',
                '/assets/Objects/crate.png',
                '/assets/Objects/dead-bush.png',
                '/assets/Objects/sign.png',
                '/assets/Objects/skeleton.png',
                '/assets/Objects/tombstone-1.png',
                '/assets/Objects/tombstone-2.png',
                '/assets/Objects/tree.png',
            ])

            const onSuccess = ([obs]) => {
                this.obstacles = obs
                this.loaded = true
                resolve()
            }

            Promise.all([obstacles]).then(onSuccess)
        })
    }
}