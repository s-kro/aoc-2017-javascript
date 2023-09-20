// Part 1
// ======

function part1(input) {
    const ch = input.split('');
    ch.push(ch[0]); // fake the 'wrap-around'

    let prev = '';
    let match = 0;
    ch.forEach((c) => {
	if (prev === c) {
	    match += parseInt(c);
	    //console.log(c, match);
	}
	prev = c;
    }); 
    return match;
}

// Part 2
// ======

function part2(input) {
    const ch = input.split('');
    const l = ch.length;

    let match = 0;
    let i = 0; // index
    ch.forEach((c) => {
	if (c === ch[(i + l / 2) % l]) {
	    match += parseInt(c);
	}
	i++;
    }); 
    return match;
}


module.exports = { part1, part2 };
