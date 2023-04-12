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
        NN.neuralNetwork(1,[2,3],1)

        ctx.fillStyle = "blue"
        ctx.fillRect(10,10,100,100)
        ctx.strokeStyle = "white"
        ctx.strokeRect(10,10,100,100)

        function animationLoop() {
            window.requestAnimationFrame(animationLoop)
        }

        animationLoop()
    }
}

window.addEventListener('load', main)