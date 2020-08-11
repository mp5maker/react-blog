export class Animation {
    constructor({ canvas }) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.width = canvas.width
        this.height = canvas.height
        this.frame = 0
        this.timeInterval = 0
        this.startTime = 0
        this.lastTime = 0
        this.t = 0
        this.stage = ''
        this.animationFrame = ''
        this.playing = false

        this.setStage = this.setStage.bind(this)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
        this.getTimeInterval = this.getTimeInterval.bind(this)
        this.getTime = this.getTime.bind(this)
        this.getFrame = this.getFrame.bind(this)
        this.getFPS = this.getFPS.bind(this)
        this.getCanvas = this.getCanvas.bind(this)
        this.getContext = this.getContext.bind(this)
        this.isPlaying = this.isPlaying.bind(this)
    }

    getContext() {
        return this.context
    }

    getCanvas() {
        return this.canvas
    }

    setStage(stage) {
        if (stage) this.stage = stage
    }

    animate(currentTime) {
        this.frame++

        if (!this.lastTime) this.lastTime = currentTime
        else {
            this.timeInterval = currentTime - this.lastTime
            this.t += this.timeInterval
            this.lastTime = currentTime
        }

        if (this.playing) {
            this.stage()
            this.animationFrame = window.requestAnimationFrame(this.animate)
        } else window.cancelAnimationFrame(this.animationFrame)
    }

    getTimeInterval() {
        return this.timeInterval
    }

    getTime() {
        return this.t
    }

    getFrame() {
        return this.frame
    }

    getFPS() {
        return this.timeInterval > 0 ? this.timeInterval / 1000 : 0
    }

    start() {
        this.playing = true
        this.startTime = new Date().getTime()
        this.timeInterval = 0
        this.frame = 0
        this.lastTime = 0
        this.t = 0
        this.animationFrame = window.requestAnimationFrame(this.animate)
    }

    stop() {
        this.playing = false
    }

    isPlaying() {
        return this.playing
    }

}