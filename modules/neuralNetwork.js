export const neuralNetwork = (noOfInputs, hidden_layers, noOfClasses) => {
    /*
        noOfInputs : an integer for the number of inputs in the NN
        hidden_layers : an array of integers that specify the units in the corresponding hidden layer 
                        e.g. [10, 5] means 10 units in the 1st hiddenlayer and 5 in the 2nd hidden layer
        noOfClasses : an integer of no. of labels or classes to classify the input
    */
    let layers = [noOfInputs].concat(hidden_layers,[noOfClasses])

    /*
        weights_array is an array of matrices that store the values of the weights connecting each layer
    */
    let weights_array = new Array(layers.length)

    for(let i=0; i<layers.length-1; i++) {
        //rows = no. of units in the next layer
        weights_array[i] = new Array(layers[i + 1])
        //cols = no. of units in the previous layer which connect to each unit in the next
        for(let j = 0; j < layers[i + 1]; j++){
            weights_array[i][j] = new Array(layers[i]).fill(0)
        }
    }
    console.log(weights_array)

    function train(inputs, weights, labels, epochsToTrain, learning_rate){

    }
}