module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.name === "" || item.enhancement === undefined || item.durability === undefined){
    throw new Error("One or more  entries are missing ")
  }
  
  if(item.enhancement < 20){
    item.enhancement = item.enhancement + 1
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if(item.name === "" || item.enhancement === undefined || item.durability === undefined){
    throw new Error("One or more  entries are missing ")
  }

  if(typeof item.name !== "string"){
    throw new TypeError("name must be a string")
  }
  
  item.durability = 100

  return { ...item };
}

function get(item) {
  return { ...item };
}


