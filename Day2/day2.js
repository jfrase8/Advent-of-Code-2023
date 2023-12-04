const fs = require('fs');

let text = fs.readFileSync("code.txt", { encoding: 'utf8', flag: 'r' });
let lines = text.split('\n');

function part1()
{
    let rCubesMax = 12;
    let bCubesMax = 14;
    let gCubesMax = 13;

    let sum = 0;

    for (let i = 0; i < lines.length; i++)
    {
        let tooLarge = false;

        lines[i] = lines[i].replaceAll(" ", "");
        let rounds = lines[i].split(';');

        for (let j = 0; j < rounds.length; j++)
        {
            console.log(rounds[j]);

            let amounts;

            if (j == 0)
            {
                let gameVsRound = rounds[j].split(":");
                amounts = gameVsRound[1].split(",");
            }
            else
                amounts = rounds[j].split(",");
            

            let currentGreen = 0;
            let currentRed = 0;
            let currentBlue = 0;

            for (amount of amounts)
            {
                let num = '';

                for (let k = 0; k < amount.length; k++)
                {
                    if (!isNaN(parseInt(amount[k])))
                        num += amount[k];
                }

                if (amount.includes("green"))
                    currentGreen += parseInt(num);
                if (amount.includes("blue"))
                    currentBlue += parseInt(num);
                if (amount.includes("red"))
                    currentRed += parseInt(num);
            }

            console.log(currentBlue + " " + currentGreen + " " + currentRed);

            if (currentBlue > bCubesMax || currentGreen > gCubesMax || currentRed > rCubesMax)
            {
                tooLarge = true;
                break;
            }
        }

        if (!tooLarge)
            sum += i+1;
    }

    console.log(sum);
}

function part2()
{
    
    let sum = 0;

    for (let i = 0; i < lines.length; i++)
    {

        lines[i] = lines[i].replaceAll(" ", "");
        let rounds = lines[i].split(';');

        let smallestR = 0;
        let smallestG = 0;
        let smallestB = 0;

        for (let j = 0; j < rounds.length; j++)
        {
            let amounts;

            if (j == 0)
            {
                let gameVsRound = rounds[j].split(":");
                amounts = gameVsRound[1].split(",");
            }
            else
                amounts = rounds[j].split(",");
            

            let currentGreen = 0;
            let currentRed = 0;
            let currentBlue = 0;

            for (amount of amounts)
            {
                let num = '';

                for (let k = 0; k < amount.length; k++)
                {
                    if (!isNaN(parseInt(amount[k])))
                        num += amount[k];
                }

                if (amount.includes("green"))
                    currentGreen += parseInt(num);
                if (amount.includes("blue"))
                    currentBlue += parseInt(num);
                if (amount.includes("red"))
                    currentRed += parseInt(num);
            }

            
            if (currentBlue  > smallestB)
                smallestB = currentBlue;
            if (currentGreen > smallestG)
                smallestG = currentGreen;
            if (currentRed > smallestR)
                smallestR = currentRed;
        }

        console.log(smallestB + " " + smallestG + " " + smallestR);

        sum += smallestB * smallestG * smallestR;
    }

    console.log(sum);
}
