body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f0f4f8;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

.background {
  background: url('assets/shop-background.jpg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  padding-top: 20px;
}

.container {
  max-width: 500px;
  margin: auto;
  position: relative;
}

.character {
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 10px;
}

.phone-frame {
  width: 300px;
  height: 550px;
  background: #e5ddd5;
  margin: 0 auto 20px;
  border: 14px solid #333;
  border-radius: 36px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0,0,0,0.3);
}

.phone-screen {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #ffffff;
}

.screen-content {
  text-align: left;
  font-size: 16px;
}

.description {
  background: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.controls {
  margin-top: 20px;
}

button {
  background-color: #00a884;
  color: white;
  border: none;
  padding: 12px 20px;
  margin: 5px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #007c65;
}
