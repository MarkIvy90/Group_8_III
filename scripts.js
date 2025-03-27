 @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

body {
  background: linear-gradient(to right, #d3d3d3, #ffcccb); /* Gradient from gray to light pink */

  font-family: 'Poppins', sans-serif; /* Ensure sans-serif font is applied */
  width: 100%; /* Adjust width to fill available space */
  height: 100%; /* Adjust height to fill available space */
  transform-origin: left top; /* Set origin for rotation */
}

.control-panel {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  padding: 20px;
  background: #f9f9f9;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.control-panel h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.control-panel button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #4158d0;
  color: white;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s; /* Added transform transition */
}

.control-panel button:hover {
  background: #c850c0; /* Updated hover color */
  transform: scale(1.05); /* Added scale effect on hover */
}

.wrapper {
  margin-left: 270px;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.pc-status {
  margin-top: 20px;
  padding: 15px;
  background: #ffffff; /* Keeping it white */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.pc-status button {
  background: #4158d0; /* Button background color */
  color: white; /* Button text color */
  border: none; /* No border */
  padding: 10px 15px; /* Padding for button */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background 0.3s; /* Smooth background transition */
}

.pc-status button:hover {
  background: #c850c0; /* Hover color for buttons */
}

.detected-problems, .suggested-solutions {
  margin-top: 20px;
  padding: 15px;
  background: #f9f9f9; /* Added distinct background color */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.footer {
  text-align: center;
  margin-top: 20px;
  background: #4158d0; /* Added background color */
  color: white; /* Ensured text is visible */
  padding: 10px; /* Added padding for better spacing */
}
