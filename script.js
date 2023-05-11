* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #3e8e41;
}
