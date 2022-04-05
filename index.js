function  distanceFromHqInBlocks(customerBlock){
    if (customerBlock >= 42){
        return customerBlock - 42;
    } else {
        return 42 - customerBlock;
    }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, stop){
    if (start > stop) {
        return (start-stop) * 264;
    } 
    else {
        return (stop - start) * 264;
    }
}

function calculatesFarePrice(start, stop){
    let dist = distanceTravelledInFeet(start, stop);

    if (dist <= 400){
        return 0;
    }
    else if (dist <= 2000){
        return (dist - 400) * 0.02;
    }
    else if (dist <= 2500){
        return 25
    }
    else{
        return "cannot travel that far"
    }
}