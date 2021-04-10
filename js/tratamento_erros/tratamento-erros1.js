
try{
    const myError = new Error('Custom message');
    //console.log(name);
    const name = 'Joanna S';
    throw myError;
}catch(err){
    console.log('Error: ', err);
}finally{
    console.log('keep going...!');
}


