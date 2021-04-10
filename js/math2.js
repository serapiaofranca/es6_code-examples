class Math2{

    sum2(a, b, callback){
        setTimeout(() => {
            callback(a + b);
        },2500);        
    }
}

module.exports = Math2;