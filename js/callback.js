function doSomething(callback) {    
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
};

function doOtherthing(callback) {    
    setTimeout(function() {
        //did something
        callback('Second data');
    }, 1000);
};

function doAll() {
    doSomething(function(data) {
        var processedData = data.split('');

        doOtherthing(function(data2) {
            var processedData2 = data2.split('');

            setTimeout(function(data2) {
                console.log(processedData, processedData2);
            }, 1000);
        })
    })    
};

doAll();