// TODO: Add a comment explaining role of the index.js file and import statements
// index.js is the entry point of the application. It imports the functions from other files and adds event listeners to the buttons
import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
