module.exports = function main(inputs) {
    // write your code here...
    var costOfDistance = calDistanceCost(inputs.distance);
	var costOfParking = calParkingCost(inputs.parkTime);
	console.log(costOfDistance);
	console.log(costOfParking);
	return Math.round(costOfDistance + costOfParking);
};

function calDistanceCost(distance){
	var cost = 6;
	if(distance <= 8 && distance > 2){
		cost = cost + 0.8*(distance-2);
	}else if(distance > 8){
		cost += (8-2)*0.8;
		cost = cost + 0.8*1.5*(distance-8);
	}
	return cost;
}

function calParkingCost(parkTime){
	return parkTime*0.25;
}