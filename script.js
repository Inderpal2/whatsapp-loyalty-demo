body {
  font-family: 'Arial', sans-serif;
  background: #f7f9fb;
  margin: 0;
  padding: 20px;
  text-align: center;
  color: #333;
}

.container {
  max-width: 500px;
  margin: auto;
}

h1 {
  margin-bottom: 20px;
}

.phone-frame {
  width: 300px;
  height: 550px;
  border: 16px solid #333;
  border-radius: 36px;
  margin: 20px auto;
  background: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0,0,0,0.2);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #e5ddd5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
}

.screen-content {
  text-align: left;
  width: 100%;
}

.controls {
  margin-top: 20px;
}

button {
  background-color: #00a884;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 5px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background-color: grey;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #00795e;
}
