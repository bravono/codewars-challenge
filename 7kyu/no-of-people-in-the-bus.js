// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//MY SOLUTION
var number = function (busStops) {
  let out = 0;
  let into = 0;
  // Iterate over the list to get each pair
  for (let i = 0; i < busStops.length; i++)
    // Pop each item and add it up
    if (busStops[i].length) {
      out += busStops[i].pop();
      into += busStops[i].pop();
    }

  // Subtract out from in
  return into - out;
};

// MY SOLUTION 2
var number = function (busStops) {
  return busStops.reduce((left, [getIn, getOut]) => left + getIn - getOut, 0);
};

// MY SOLUTION 3
var number = function (busStops) {
  let getIn = 0;
  let getOff = 0;
  for (let pair of busStops) {
    getIn += pair[0];
    getOff += pair[1];
  }

  return getIn - getOff;
};
