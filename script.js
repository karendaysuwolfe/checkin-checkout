let inventory = {
  laptop: 5,
  projector: 2,
  microphone: 10
};

let logs = [];

function checkIn() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let equipment = document.getElementById('equipment').value;
  
  if (name === '' || email === '' || date === '' || equipment === '') {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Update inventory count
  inventory[equipment] += 1;
  
  // Add log entry
  logs.push({
    name: name,
    email: email,
    date: date,
    equipment: equipment,
    type: 'checkin'
  });
  
  alert(`${name} has checked in a ${equipment}.`);
}

function checkOut() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let equipment = document.getElementById('equipment').value;
  
  if (name === '' || email === '' || date === '' || equipment === '') {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Check if there is equipment left in inventory
  if (inventory[equipment] > 0) {
    // Update inventory count
    inventory[equipment] -= 1;
    
    // Add log entry
    logs.push({
      name: name,
      email: email,
      date: date,
      equipment: equipment,
      type: 'checkout'
    });
    
    alert(`${name} has checked out a ${equipment}.`);
  } else {
    alert(`Sorry, there is no ${equipment} left in inventory.`);
  }
}

function viewInventory() {
  let message = 'Current inventory:\n';
  
  for (let equipment in inventory) {
    message += `${equipment}: ${inventory[equipment]}\n`;
  }
  
  alert(message);
}

function viewLogs() {
  let message = 'Check-in/Check-out log:\n';
  
  for (let i = 0; i < logs.length; i++) {
    let log = logs[i];
    let action = log.type === 'checkin' ? 'checked in' : 'checked out';
    message += `${log.name} (${log.email}) ${action} a ${log.equipment} on ${log.date}\n`;
  }
  
  alert(message);
}
