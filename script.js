let inventory = {
  laptop: 5,
  projector: 2,
  microphone: 10
};

function checkIn() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let equipment = document.getElementById('equipment').value;
  
  // Update inventory count
  inventory[equipment] += 1;
  
  alert(`${name} has checked in a ${equipment}.`);
}

function checkOut() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let equipment = document.getElementById('equipment').value;
  
  // Check if there is equipment left in inventory
  if (inventory[equipment] > 0) {
    // Update inventory count
    inventory[equipment] -= 1;
    
    alert(`${name} has checked out a ${equipment}.`);
  } else {
    alert(`Sorry, there is no ${equipment} left in inventory.`);
  }
}
