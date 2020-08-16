import { LoadImages } from 'Utilities/LoadImages'

const DEAD = 'dead'
const IDLE = 'idle'
const WALK = 'walk'

export class AnimationZombie {
    constructor({ canvas, context, x, y }) {
        this.canvas = canvas
        this.context = context
        this.x = 25
        this.y = canvas.height / 2
        this.width = 66.3
        this.height = 80
        this.zombie = {
            walk: [],
            idle: [],
            dead: []
        }
        this.gravity = 0.3
        this.currentState = IDLE
        this.currentIndex = 0
        this.loaded = false
        this.busy = false

        this.init = this.init.bind(this)
        this.create = this.create.bind(this)
        this.restart = this.restart.bind(this)
        this.isLoaded = this.isLoaded.bind(this)
        this.walk = this.walk.bind(this)
        this.jump = this.jump.bind(this)
        this.dead = this.dead.bind(this)
        this.getPosition = this.getPosition.bind(this)
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }

    dead() {
        this.currentIndex = 0
        this.currentState = DEAD
    }

    jump() {
        let timeout = ''
        const currentY = this.y
        const jumpUpTo20 = 150
        let jumpHeight = 0

        if (!this.busy) {
            const smoothJump = () => {
                this.busy = true
                if (timeout) clearTimeout(timeout)
                timeout = setTimeout(() => {
                    if (jumpHeight === jumpUpTo20) {
                        this.y += (1 + this.gravity)
                        if (this.y >= currentY) {
                            this.y = currentY
                            this.busy = false
                            return
                        }
                        smoothJump()
                    } else {
                        this.y -= (1 - this.gravity)
                        jumpHeight++
                        smoothJump()
                    }
                }, 1)
            }
            smoothJump()
        }
    }

    walk() {
        this.currentIndex = 0
        this.currentState = WALK
    }

    isLoaded() {
        return this.loaded
    }

    restart() {
        this.context.save()
        this.context.drawImage(this.zombie[IDLE][0], this.x, this.y, this.width, this.height)
        this.context.restore()
    }

    create() {
        this.context.save()
        this.context.beginPath()
        this.context.drawImage(this.zombie[this.currentState][this.currentIndex], this.x, this.y, this.width, this.height)
        this.context.closePath()
        this.context.restore()
    }

    motion(frame = 4) {
        if (frame % 4 === 0) {
            const currentStateLength = this.zombie[this.currentState].length
            this.currentIndex++
            if  (this.currentIndex >= currentStateLength) this.currentIndex = 0
        }
        this.create()
    }

    init() {
        return new Promise((resolve) => {
            const deadAssets = LoadImages([
                '/assets/Male/dead-1.png',
                '/assets/Male/dead-2.png',
                '/assets/Male/dead-3.png',
                '/assets/Male/dead-4.png',
                '/assets/Male/dead-5.png',
                '/assets/Male/dead-7.png',
                '/assets/Male/dead-9.png',
                '/assets/Male/dead-10.png',
                '/assets/Male/dead-11.png',
                '/assets/Male/dead-12.png',
            ])

            const idleAssets = LoadImages([
                '/assets/Male/idle-1.png',
                '/assets/Male/idle-2.png',
                '/assets/Male/idle-3.png',
                '/assets/Male/idle-4.png',
                '/assets/Male/idle-5.png',
                '/assets/Male/idle-7.png',
                '/assets/Male/idle-9.png',
                '/assets/Male/idle-10.png',
                '/assets/Male/idle-11.png',
                '/assets/Male/idle-12.png',
                '/assets/Male/idle-13.png',
                '/assets/Male/idle-14.png',
                '/assets/Male/idle-15.png',
            ])

            const walkAssets = LoadImages([
                '/assets/Male/walk-1.png',
                '/assets/Male/walk-2.png',
                '/assets/Male/walk-3.png',
                '/assets/Male/walk-4.png',
                '/assets/Male/walk-5.png',
                '/assets/Male/walk-7.png',
                '/assets/Male/walk-9.png',
                '/assets/Male/walk-10.png',
            ])

            const onSuccess = ([dead, idle, walk]) => {
                this.zombie = {
                    dead,
                    idle,
                    walk
                }
                this.loaded = true
                resolve()
            }

            Promise.all([deadAssets, idleAssets, walkAssets]).then(onSuccess)
        })
    }
}