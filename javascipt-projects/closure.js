function counter(){
    var count = 1;

    function add(count){
        return count+1;
    }
    console.log(`original count: ${count}, new count: ${add(count)}`);
}

 counter();