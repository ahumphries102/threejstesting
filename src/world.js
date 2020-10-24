import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './components/renderer.js';
import { Resizer } from './components/resizer.js';


function World(container) {
    const worldProps = {
        camera: createCamera(),
        scene: createScene(),
        renderer: createRenderer(),
        cube: createCube(),
        render() {
            // draw a single frame
            worldProps.renderer.render(worldProps.scene, worldProps.camera);
        }
    }
    container.append(worldProps.renderer.domElement)
    for(let i = 0; i< 5; i++){
        let meshy = new createCube()
        meshy.position.set(Math.random()*i, Math.random()*i, Math.random()*i)
        worldProps.scene.add(meshy);
    }
    
    const resizer = new Resizer(container, worldProps.camera, worldProps.renderer);
    return worldProps
  }


export { World };