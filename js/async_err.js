const simpleFunc = async () => {
    throw new Error('Budeu ... ');
    return 12345;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});