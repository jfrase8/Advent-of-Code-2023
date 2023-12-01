const fs = require('fs');

let text = fs.readFileSync("code.txt", { encoding: 'utf8', flag: 'r' });
let lines = text.split('\n');

let sum = 0;


let numList = ["one","two","three","four","five","six","seven","eight","nine"];

let numEquiv = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (line of lines)
{
    let left = 0;
    let right = line.length - 1;

    let foundLeft = false;
    let foundRight = false;

    let leftNum = "";
    let rightNum = "";

    while (foundLeft == false)
    {
        if (isNaN(parseInt(line[left])))
        {
            for (num of numList)
            {
                if (line[left] == num[0]){
                    let i = 1;
                    while (i <= num.length)
                    {
                        if (i == num.length)
                        {
                            leftNum = num;
                            break;
                        }  
                        if (line[left+i] != null)
                        {
                            if (line[left+i] == num[i])
                                i++;
                            else
                                break;
                        }
                        else
                            break;
                        
                    }
                }

                if (leftNum == num)
                {
                    foundLeft = true;
                    break;
                }
            }
            left++;
        }
            
        else{
            foundLeft = true;
            leftNum = line[left];
        }

    }
    while (foundRight == false)
    {
        if (isNaN(parseInt(line[right])))
        {
            for (num of numList)
            {
                if (line[right] == num[num.length-1]){
                    let i = 1;
                    while (i <= num.length)
                    {
                        if (i == num.length)
                        {
                            rightNum = num;
                            break;
                        }  
                        if (line[right-i] != null)
                        {
                            if (line[right-i] == num[num.length-i-1])
                                i++
                            else
                                break;
                        }
                        else
                            break;
                        
                    }
                }

                if (rightNum == num)
                {
                    foundRight = true;
                    break;
                }
            }
            right--;
        }
            
        else{
            foundRight = true;
            rightNum = line[right];
        }
    }

    for (let i = 0; i < numList.length; i++)
    {
        if (leftNum == numList[i])
            leftNum = numEquiv[i];

        if (rightNum == numList[i])
            rightNum = numEquiv[i];
    }
    let combinedNum = leftNum + rightNum;
    sum += parseInt(combinedNum);
}
console.log(sum);
