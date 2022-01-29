import * as THREE from 'three';

export default () => {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/1500, 0.1, 1000);

    const renderer = new THREE.WebGL1Renderer({
        canvas: document.querySelector('#formes'),
        alpha: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 1500);
    camera.position.setZ(80);

    const ligth = new THREE.HemisphereLight(0xFFFFFF, 0x5574B6, 0.7);
    const violetLigth = new THREE.HemisphereLight(0xFFFFFF, 0x4f26cc, 0.7);
    violetLigth.position.set(-0.7, 0.3, 0).normalize();
    
    scene.add(ligth, violetLigth);
    
    const meshes = [];
    const nbMeshes = 5;

    for (let i = 0; i < nbMeshes; i++) {
        const circlePosition = Math.PI * 1.5 * ((i)/nbMeshes);

        const mesh = new Mesh(circlePosition);
        meshes.push(mesh);
        scene.add(mesh.mesh);
    }

    const mouse = new THREE.Vector2(0,0);

    document.addEventListener('mousemove', (e) => {
        const canvas = document.querySelector('canvas').getBoundingClientRect();
        mouse.x = ((e.pageX - canvas.left + window.pageXOffset)/ canvas.width) * 2 - 1 ;
        mouse.y = -((e.pageY - canvas.top + window.pageYOffset)/ canvas.height) * 2 + 1;
    })
    
    function animate() {
        
        requestAnimationFrame(animate);
        
        setHovered(meshes, mouse, scene, camera);

        meshes.forEach(m => {
            m.mesh.rotation.x += m.animationRotation.x;
            m.mesh.rotation.y += m.animationRotation.y;
            m.mesh.rotation.z += m.animationRotation.z;

            if (m.mouseOver) {
                const wantedPosition = new THREE.Vector3(m.position.x, m.position.y, 10)
                m.mesh.position.lerp(wantedPosition, 0.1)
            } else {
                m.mesh.position.lerp(m.position, 0.1)
            }
        })
        
        renderer.render(scene,camera);
    }

    animate();
}

class Mesh {
    constructor(circlePosition) {
        this.mouseOver = false;

        this.material = new THREE.MeshStandardMaterial({
            color:0xffffff
        });

        this.geometry = this.randomMesh();
        this.animationRotation = this.randomAnimationRotation();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.position = this.randomPosition(circlePosition);
        this.rotation = this.randomRotation();

        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.mesh.rotation.set(this.rotation.x, this.position.y, this.position.z);
    }

    randomMesh(){
        let rand = parseInt(Math.random() * 2);
        
        let taille = this.randomTaille();

        if (rand == 0)
            return new THREE.TorusGeometry(taille/2, taille/4, 32, 32);
        else if (rand == 1)
            return createBoxWithRoundedEdges(taille,taille,taille, 1, 32);
    }

    randomAnimationRotation() {
        return new THREE.Vector3(
            Math.random()*0.006 - 0.003,
            Math.random()*0.006 - 0.003,
            Math.random()*0.006 - 0.003,
        );
    }

    randomRotation() {
        return new THREE.Vector3(
            Math.random()*1,
            Math.random()*1,
            Math.random()*1
        )
    }
    
    randomPosition(circlePosition) {
        return new THREE.Vector3(
            Math.cos(circlePosition) * 20,
            Math.sin(circlePosition) * 20, 
            0
        );
    }
    
    randomTaille() {
        return Math.random() * 3 + 7;
    }
}

//Found here https://discourse.threejs.org/t/round-edged-box/1402
function createBoxWithRoundedEdges( width, height, depth, radius0, smoothness ) {
    let shape = new THREE.Shape();
    let eps = 0.00001;
    let radius = radius0 - eps;
    shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
    shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
    shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
    shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
    let geometry = new THREE.ExtrudeBufferGeometry( shape, {
      amount: depth - radius0 * 2,
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness
    });
    
    geometry.center();
    
    return geometry;
}

//Found here https://stackoverflow.com/questions/38314521/change-color-of-mesh-using-mouseover-in-three-js
function setHovered(meshes, mouse, scene, camera) {
    var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
    vector.unproject(camera);

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObject(scene, true);

    meshes.forEach((m) => {
        m.mouseOver = intersects.find(o => o.object === m.mesh);
    })
}