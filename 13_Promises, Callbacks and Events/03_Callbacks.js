function processNumbers(numbers, callback) 
{
    for (let i = 0; i < numbers.length; i++) 
        callback(numbers[i]);
}

function printNumbers(num) 
{
    console.log(num);
}

processNumbers([1, 2, 3, 4], printNumbers);
