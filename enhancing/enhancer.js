module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const newItem = {...item, 
    enhancement: item.enhancement === 20 ? item.enhancement : item.enhancement + 1
  }
  return { ...newItem};
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5
  } else if(item.enhancement >= 15 && item.enhancement < 17) {
    item.durability= item.durability - 10
  } else if(item.enhancement > 16){
    item.enhancement= item.enhancement -1
    item.durability= item.durability - 10
  }

  const newItem = {...item, 
    durability: 
     item.durability < 0 ? 0 : item.durability
  }

  return { ...newItem };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
