var languages = [
	{
		id : 1,
		name : 'js',
		cost : 100
	},
	{
		id : 2,
		name : 'php',
		cost : 250
	},
	{
		id : 3,
		name : 'java',
		cost : 200
	},
	{
		id : 4,
		name : 'php',
		cost : 400
	}
];


// forEach
Array.prototype.myForEach = function(callback) {
    for(var i=0; i<this.length; i++) {
        callback(this[i],i);
    }
}

languages.myForEach(function (language,index) {
    console.log(index, language);
})



// every
Array.prototype.myEvery = function(callback) {
    var result = true;
    for(var i=0; i<this.length; i++) {
        result = result && callback(this[i],i);
        if(result===false) {
            break;
        }
    }
    return result;
}

var result = languages.myEvery( function(language,index) {
    return language.cost === 0;
})
console.log(result);



// some
Array.prototype.mySome = function(callback) {
    var result = false;
    for(var i=0; i<this.length; i++) {
        result = result || callback(this[i],i);
        if(result===true) {
            break;
        }
    }
    return result;
}

var result2 = languages.mySome( function( language, index ){
	return language.cost === 0;
} )
console.log(result2);



//find 
Array.prototype.myFind = function(callback) {
    for(var i=0; i<this.length; i++) {
        if(callback(this[i],i)) {
            return this[i];
        }
    }
    return undefined;
}

var result3 = languages.myFind( function( language, index ){
	return language.name === 'php';
} )
console.log(result3); 



//filter
Array.prototype.myFilter = function(callback) {
    var result = [];
    for(var i=0; i<this.length; i++) {
        if(callback(this[i],i)) {
            result.push(this[i]);
        }
    }
    return result;
}

var result4 = languages.myFilter( function( language, index ){
	return language.name === 'php';
} )
console.log(result4); 



//map
Array.prototype.myMap = function(callback) {
    var result = [];
    for(var i=0; i<this.length; i++) {
        result.push(callback(this[i],i,this));
    }
    return result;
}

function func(language, index, origin) {
	return {
        indexArr : index,
		id : language.id,
		ten : `Khoa hoc: ${language.name}`,
		gia : language.cost,
        originArr : origin
	};
}
var result5 = languages.myMap( func );
console.log(result5);



//reduce
Array.prototype.myReduce = function(callback,initialValue) {
    var accumulator=initialValue;
    var result;
    var i=0;
    if(arguments.length<2) {
        accumulator=this[0];
        i++;
    }

    for(; i<this.length; i++) {
        result = callback(accumulator,this[i],i,this);
        accumulator = result;
    }
    return accumulator;
}

var totalCost = languages.myReduce(function(total,language, index, origin) {
    console.log(
        'accumulator:',total,
        '\n currentValue:',language,
        '\n currentIndex:',index,
        '\n originArray:',origin
    );
	return total + language.cost;
},0)
console.log(totalCost);
