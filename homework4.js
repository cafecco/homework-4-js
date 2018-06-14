function largest() {
	let max = -Infinity;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
	return max;
}

largest(2, 0.1, -5, 100, 3) 


function smallest() {
	let min = Infinity;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] < min) {
			min = arguments[i];
		}
	}
	return min;
}

smallest(2, 0.1, -5, 100, 3) 


function transform(baseArray) {
	return baseArray.map((item) => 
		{return function() 
			{return item;
			}
		} 
	)
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); 
newArray[4]();


function sum(){
	let result = arguments[0];
	if (arguments.length > 1) {
    	result += sum.apply(this, Array.from(arguments).splice(1));
    }
	return result;
}

sum(1,3,5,7);


function countDown(numb) {
	if (numb >= 0) {
		setTimeout(function(){
			console.log(numb);
			countDown(numb - 1);
		}, 1000);
	}
}

countDown(3);


Function.prototype.myBind = function() {
	let func = this;
    let context = arguments[0];
    let args = [].slice.call(arguments, 1);
    return function(){
    	return func.apply(context, args.concat([].slice.call(arguments)));
    }
}

function addPropToNumber(number) {
	return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1); 