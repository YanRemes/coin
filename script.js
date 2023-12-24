// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const terminal = document.querySelector('.terminal');
    terminal.addEventListener('click', () => {
      const inputText = '> buy $UPC coin [Press Enter]';
      if (window.confirm(inputText)) {
        window.location.href = 'http://yourpurchaseurl.com'; // Replace with actual URL
      }
    });
  });
  