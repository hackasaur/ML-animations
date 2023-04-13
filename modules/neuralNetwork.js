export const neuralNetwork = (noOfInputs, hidden_layers, noOfClasses) => {
    /*
        noOfInputs : an integer for the number of inputs in the NN
        hidden_layers : an array of integers that specify the units in the corresponding hidden layer 
                        e.g. [10, 5] means 10 units in the 1st hiddenlayer and 5 in the 2nd hidden layer
        noOfClasses : an integer of no. of labels or classes to classify the input
    */
    let layers = [noOfInputs].concat(hidden_layers, [noOfClasses])

    /*
        weights_array is an array of matrices that store the values of the weights connecting each layer
    */
    let weights_array = new Array(layers.length)

    for (let i = 0; i < layers.length - 1; i++) {
        //rows = no. of units in the next layer
        weights_array[i] = new Array(layers[i + 1])
        //cols = no. of units in the previous layer which connect to each unit in the next
        for (let j = 0; j < layers[i + 1]; j++) {
            weights_array[i][j] = new Array(layers[i]).fill(0)
        }
    }
    // console.log(weights_array)

    function train(inputs, weights, labels, epochsToTrain, learning_rate) {

    }
}

export const drawNeuralNetwork = (ctx, pos, noOfInputs, hidden_layers, noOfClasses, weights) => {
    let layers = [noOfInputs].concat(hidden_layers, [noOfClasses])

    const radius = 25
    const vertical_gap = 3 * radius //gap between units in the same layer
    const horizontal_gap = 4 * radius //gap between layers
    const unitsColor = 'skyblue'
    const weightsColor = 'white'
    let cursor = { x: pos.x, y: pos.y }
    let centers = new Array(layers.length) //stores centers of each unit by layer e.g. [ [{x:10, y:12}, {x:34, y:23}], [{...},{...}] ]

    //get units' centers 
    for (let i = 0; i < layers.length; i++) {
        cursor.y += (20 * radius - (layers[i] * vertical_gap)) / 2
        centers[i] = new Array(layers[i])
        for (let j = 0; j < layers[i]; j++) {
            centers[i][j] = { x: cursor.x, y: cursor.y }
            cursor.y += vertical_gap
        }
        cursor.y = pos.y
        cursor.x += horizontal_gap
    }
    
    // console.log(centers)

    //draw weights
    ctx.strokeStyle = weightsColor
    for (let i = 0; i < layers.length - 1; i++) { //ith layer in layers
        for (let j = 0; j < layers[i]; j++) { //jth unit in ith layer
            ctx.beginPath()
            ctx.moveTo(centers[i][j].x, centers[i][j].y)

            for (let p = 0; p < layers[i + 1]; p++) { //pth unit in the (i+1)th layer
                ctx.lineTo(centers[i + 1][p].x, centers[i + 1][p].y)
                ctx.lineWidth = 0.5*weights[i][p][j]
                ctx.stroke()
                ctx.closePath()
                ctx.beginPath()
                ctx.moveTo(centers[i][j].x, centers[i][j].y)
            }
            ctx.closePath()
        }
    }
    //draw units:
    ctx.fillStyle = unitsColor

    for (let i = 0; i < layers.length; i++) {
        for (let j = 0; j < layers[i]; j++) {
            ctx.beginPath()
            ctx.arc(centers[i][j].x, centers[i][j].y, radius, 0, 2 * Math.PI)
            ctx.fill()
            // ctx.stroke()
            ctx.closePath()
        }
    }
}