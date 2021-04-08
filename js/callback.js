// calback, para uma execução de função e chama uma outra, para
//    pegar o processamento da segunda e continuar a primeira...
// --> e se o processamento da segunda falhar?? 

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
    try {
        doSomething(function(data) {
            var processedData = data.split('');

            try {

                doOtherthing(function(data2) {
                    var processedData2 = data2.split('');
                    
                    try {
                        setTimeout(function(data2) {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (error) {
                       //do handle error 
                    }                    
                })
                
            } catch (error) { 
                //do handle error                 
            }    
        })        
    } catch (error) {
      //do handle error  
    }    
};

doAll();

// callBackhell - muitos erros para tratar ... 
// facilitando no ES6 com promises