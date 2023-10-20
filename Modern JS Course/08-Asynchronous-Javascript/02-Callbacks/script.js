//  Callbacks - Calling a function inside another function can be simply said callbacks. It forms connections between functions

/*
function one(){
    console.log('Step One');
}

function two(){
    console.log('Step two');
}

one()
two()
*/

function one(call_two){
    call_two()

    console.log('Step One Completed. Please call step two');

    call_two()
}

function two(){
    console.log('Step two');
}

one(two)

