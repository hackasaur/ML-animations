import * as linAlg from './modules/linearAlgebra.js'
import * as NN from './modules/neuralNetwork.js'

function main() {
    const canvas = document.getElementById('scene')
    if (canvas.getContext) {
        let yPadding = 140
        let xPadding = 300
        const ctx = canvas.getContext('2d')
        ctx.canvas.width = window.innerWidth - xPadding
        ctx.canvas.height = window.innerHeight - yPadding
        // ctx.imageSmoothingEnabled = false
        // ctx.translate(0.5, 0.5)

        // console.log(linAlg.matMultiply([[1,2,3]], [[3], [4], [5]]))
        // console.log(linAlg.multiply([[1,2,3]], [[3,4,5]]))
        NN.neuralNetwork(1, [2, 3], 1)

        let mouseCoords = [0, 0 ]

        canvas.addEventListener('mousemove', (event) => {
            mouseCoords = [event.x - canvas.offsetLeft, event.y - canvas.offsetTop]
        })
        
        const setCanvasFont = (ctx, font) => {
            ctx.fillStyle = `${font.fontColor}`
            ctx.font = `${font.fontSize}px ${font.fontStyle}`
        }
        
        let font = { fontStyle: 'Fira Mono', fontColor: 'white', fontSize: '12' }
        setCanvasFont(ctx, font)

        NN.drawNeuralNetwork(ctx, { x: 400, y: 50 }, 2, [3], 2, [[[1, 2],[3,4],[5,6]], [[1,2,3], [[3,4,5]]]])

        function animationLoop() {
                    ctx.clearRect(0,0, canvas.width, canvas.height)                
                    setCanvasFont(ctx, font)
                    ctx.fillText(`${mouseCoords[0]}, ${mouseCoords[1]}`, mouseCoords[0], mouseCoords[1])

                window.requestAnimationFrame(animationLoop)
            }

        // animationLoop()
    }
}

window.addEventListener('load', main)