// TDD dependency
const should = require('should');

/**
 * A function that returns a sequence of numbers in FizzBuzz form
 * 
 * An explanation of the problem can be found here if you've never seen this before: https://en.wikipedia.org/wiki/Fizz_buzz
 * 
 * The `end` argument is inclusive - it will not stop 1 number before it
 * 
 * Test suite included at the bottom of the file
*/
const fizzbuzz = (end) => {

	let solution = ''

	for (var i = 1; i <= end; i++) {
		if (i % 15 === 0) {
			solution += 'FizzBuzz,'
		} else if (i % 3 === 0) {
			solution += 'Fizz,'
		} else if (i % 5 === 0) {
			solution += 'Buzz,'
		} else {
			solution += i + ","
		}
	}

	/// We just need to remove the final , at the end of our sequence
	return solution.slice(0, -1);
}

// Let's just test the basics of our function- no functionality testing yet
(fizzbuzz(10)).should.be.a.String();

// Let's test a single Fizz
(fizzbuzz(3)).should.be.eql('1,2,Fizz');

// // Let's test a single Buzz
(fizzbuzz(5)).should.be.eql('1,2,Fizz,4,Buzz');

// // Let's test multiple Fizz's
(fizzbuzz(6)).should.be.eql('1,2,Fizz,4,Buzz,Fizz');

// // Let's test multiple Buzz's 
(fizzbuzz(10)).should.be.eql('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz');

// // Let's test a single FizzBuzz 
(fizzbuzz(15)).should.be.eql('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');

// // Let's test multiple FizzBuzz's
(fizzbuzz(30)).should.be.eql('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz');

// // Let's test the actual problem proposed to us (to go to 100)
(fizzbuzz(100)).should.be.eql('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz');

// Let's just test some corner cases to make sure nothing weird is happening!
(fizzbuzz(0)).should.be.eql('');
(fizzbuzz(-1)).should.be.eql('');
(fizzbuzz('a')).should.be.eql('');
(fizzbuzz('aaskskaskl')).should.be.eql('');
(fizzbuzz(1+10)).should.be.eql('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11');