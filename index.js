// 1️ Calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hq = 42; // Scuber headquarters
  return Math.abs(someValue - hq);
}

// 2️Convert blocks distance to feet
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

// 3️Calculate distance travelled in feet between any two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4️Calculate fare price based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // first 400 feet free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat fare
  } else {
    return 'cannot travel that far'; // over 2500 feet
  }
}
