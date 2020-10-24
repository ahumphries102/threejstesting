import { World } from './world.js'




// create the main function
function main() {
  
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);
  // 2. Render the scene
  world.render();
}

function move(){

}

// call main to start the app
//main();
document.getElementById('renderButton').onclick = ()=>main()