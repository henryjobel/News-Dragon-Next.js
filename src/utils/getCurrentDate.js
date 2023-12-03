// Save this code in a file, e.g., currentDate.js

export function getCurrentDate() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get day, month, date, and year
    var day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-us', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  
    // Display the result
    var result = "Current Date: " + day + ', ' + month + ' ' + date + ', ' + year;
    return result
  }
  
  // Call the function to display the current date

  