## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Notes](#notes)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./assets/img/tipsyRobot.jpg)


### Links

- Live Site URL: [Portfolio](https://stevenmnoyes.com/)

## My process

### Built with
- Three JS
- Grid
- Mobile-first workflow
- [SCSS](https://blog.logrocket.com/the-definitive-guide-to-scss/)

### Notes

This is a rebuild of a previous portfolio. I liked parts of it and tried to incorporate the two 
together. It turned into frankenstien on me but I am kind of happy with the results. 


```js
const geometry = new THREE.TorusGeometry(15.789, 1.485, 10, 3, 6.283185);
const material = new THREE.MeshStandardMaterial({ color: 0x1D3557 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
```
```js
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
```
```js
camera.position.setZ(30);
camera.position.setX(-3);
```
### Continued development

Please no

### Useful resources

- [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

- [Torus Geometry](https://threejs.org/docs/#api/en/geometries/TorusGeometry) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

- [Three.js](https://threejs.org/editor/) - Editing the camera path was made so much easier with this visual representation matrix.

- [Typical Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp) - This is a great article which helps me figure out what CSS breakpoints are really going to.

## Author

- Website - [Portfolio](https://www.stevenmnoyes.com)
- LinkedIn - [Steven Noyes](https://www.linkedin.com/in/steven-noyes/)