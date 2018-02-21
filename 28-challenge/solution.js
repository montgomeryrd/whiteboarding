function high(string){
    let word = [];
    let total = 0;
    let array = string.split(' ');
    let highest = 0;
    let position = 0;

    for(let i = 0; i < array.length; i++){ //iterates through the array of words
        for(let j = 0; j < array[i].length; j++){ //iterates through each word in the array
            total += array[i].charCodeAt(j) - 96; //totals the value of the word
        }
        word.push(total); //push the total to a new array
        total = 0; //reset total to then process the next word
    }

    for(let k = 0 ; k < word.length ; k++){ //iterates through the new array of totals
        if(word[k] > highest){ //if this index is greater than highest...
            highest = word[k]; //then set highest to that index total...
            position = [k]; //and set the index to the value position
        }
    }
    return array[position]; //return the position which has the highest value of words from the array of strings
}