var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(
    window.innerWidth, 
    window.innerHeight
);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
onresize = ()=> {

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

};

const sun = new THREE.Mesh(
    new THREE.CircleGeometry(3.5, 32),
    new THREE.MeshBasicMaterial({ color: "#ffeeaa" })
);
scene.add(sun);

const godrays_effect = new POSTPROCESSING.GodRaysEffect(
    camera,
    sun,
    {
        resolutionScale: 1,
        density: 1.2,
        decay: .95,
        weight: .9,
        samples: 100
}
);
const 
render_pass = new POSTPROCESSING.RenderPass(scene, camera),
effect_pass = new POSTPROCESSING.EffectPass(scene, godrays_effect);
effect_pass.renderToScreen = true;
const pass = new POSTPROCESSING.EffectPass(
    camera,
    new POSTPROCESSING.BloomEffect
);
pass.renderToScreen = true;


const composer = new POSTPROCESSING.EffectComposer(renderer);
composer.addPass(render_pass);
composer.addPass(effect_pass);

// Other
const win = $(window);
const min_win_width = 1040;