var languages = [
	{
		id : 1,
		name : 'js',
		cost : 200
	},
	{
		id : 2,
		name : 'php',
		cost : 250
	},
	{
		id : 3,
		name : 'java',
		cost : 500
	},
	{
		id : 4,
		name : 'php',
		cost : 400
	}
];


// forEach
Array.prototype.myForEach = function(callback) {
	for(var index in this) {
		if(this.hasOwnProperty(index)) {
			callback(this[index], index, this);
		}
	}
}

languages.myForEach(function (language,index) {
    console.log(index, language);
})



// every
Array.prototype.myEvery = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(!callback(this[index],index,this)) {
                return false;
            }
        }
    }
    return true;
}

var result = languages.myEvery( function(language,index) {
    return language.cost > 100;
})
console.log(result);



// some
Array.prototype.mySome = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index],index,this)) {
                return true;
            }
        }
    }
    return false;
}

var result2 = languages.mySome( function( language, index ){
	return language.cost > 300;
} )
console.log(result2);



//find 
Array.prototype.myFind = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index],index,this)) {
                return this[index];
            }
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
    for(var index in this) {
        if(this.hasOwnProperty(index) && callback(this[index],index,this)) {
            result.push(this[index]);
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
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            result.push(callback(this[index],index,this));
        } 
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
Array.prototype.myReduce = function(callback,result) {
    var i=0;
    if(arguments.length<2) {
        var result = this[0];
        i++;
    }

    for(; i<this.length; i++) {
        result = callback(result,this[i],i,this);
    }
    return result;
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
