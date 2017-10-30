// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  const matchedDrivers = driversWithRevenueOver(drivers, revenue);
  return matchedDrivers.map(function(driver) {
    return driver.name;
  });
};

function exactMatch(drivers, matcher) {
  let attribute = Object.keys(matcher);
  let value = matcher[attribute];
  return drivers.filter(function(driver) {
    return driver[attribute] === value;
  });
};

function exactMatchToList(drivers, matcher) {
  const matchedDrivers = exactMatch(drivers, matcher);
  return matchedDrivers.map(function(driver) {
    return driver.name;
  });
};
