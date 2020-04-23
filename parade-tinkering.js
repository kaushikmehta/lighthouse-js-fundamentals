const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
var x = 0;
var y = 0;
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        if (move == 'north') {
            y++
        } else if (move == 'south') {
            y--;
        } else if (move == 'east') {
            x++;
        } else if (move == 'west') {
            x--;
        } else {
            x = x;
            y = y;
        }

    }
    console.log([x, y]);
}

finalPosition(moves);
