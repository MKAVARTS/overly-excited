// Create an array that contains the words in the sentence
let sentence = ["The", "walrus","dance","through","the","trees","in","the","light","of","the","moon"];
let tens = sentence.reverse();
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (array, char) {
    var list = [];
    var modulo;
    var modCounter = -1;
    for(i = 0; i < array.length; i++){
        modulo = i % 3;    
        if(modulo === 2) {
            modCounter++;
        }
        if(modCounter === 0){
            list.push(array[i] + (char));
        }else if(modCounter === 1){
            list.push(array[i] + (char + char));
        }else if(modCounter === 2){
            list.push(array[i] + (char + char + char));
        } else{
            list.push(array[i]); 
        }
        console.log(list.join(' '));
    }
}


// Invoke the function and pass in the array
addExcitement(sentence, "?");
addExcitement(tens, "~");