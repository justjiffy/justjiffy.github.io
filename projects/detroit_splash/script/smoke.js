var smoke = (function(){
	var container;
	var camera, scene, renderer, mesh, clock;
	var uniforms;

	var animationInterval;



	// init();
	// animate();

	function init() {
	    container = document.getElementById("smoke-wrapper");

	    var fragmentShader = document.getElementById("smoke-frag").textContent;
	    var vertexShader = document.getElementById("smoke-vert").textContent;

	    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 500 );
	    camera.position.set( 0, 0, 10 );
	    camera.position.z = 1;

	    scene = new THREE.Scene();

	    clock = new THREE.Clock();
	    clock.start();

	    // var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
	    // var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
	    var geometry = new THREE.PlaneGeometry( window.innerWidth*1.7, window.innerHeight*1.7,1,1);

	    uniforms = {
	        time: {
	            type: "f",
	            value: 1.0
	        },
	        resolution: {
	            type: "v2",
	            value: new THREE.Vector2()
	        },
	        opacity: {
	            type: "f",
	            value: 1.6
	        },
	    };

	    uniforms.resolution.value.x = window.innerWidth* window.devicePixelRatio;
	    uniforms.resolution.value.y = window.innerHeight* window.devicePixelRatio;

	    var material = new THREE.ShaderMaterial({
	        uniforms: uniforms,
	        vertexShader,
	        fragmentShader,
	        transparent: true
	    });

	    mesh = new THREE.Mesh(geometry, material);
	    scene.add(mesh);

	    renderer = new THREE.WebGLRenderer({alpha:true,antialias: true});
	    renderer.setPixelRatio(window.devicePixelRatio);

	    // scene.add( new THREE.AmbientLight( 0xffffff,.2) );
	    // var light = new THREE.DirectionalLight( 0xffffff, 0.3 );
	    // light.position.set(0, 100, 500 );
	    // scene.add( light );

	    //  var directionalLight3 = new THREE.DirectionalLight( 0xff8811,.3 );
	    // directionalLight3.position.set( -1500, -1500, 1000 );
	    // //directionalLight2.target.position.set( 0, 100, -20 );
	    // scene.add( directionalLight3 );

	    //  var directionalLight3 = new THREE.DirectionalLight( 0x333399,.2 );
	    // directionalLight3.position.set( 1500, 1500, 100 );
	    // //directionalLight2.target.position.set( 0, 100, -20 );
	    // scene.add( directionalLight3 );

	    container.appendChild(renderer.domElement);

	    onWindowResize();
	    window.addEventListener('resize', onWindowResize, false);
	    window.addEventListener('mousemove', onMouseMove, false);

	    // document.onmousemove = function(e) {
	    //     uniforms.mouse.value.x = e.pageX;
	    //     uniforms.mouse.value.y = e.pageY;
	    // }
	}

	function onMouseMove(e){


	}

	function onWindowResize(event) {

	    camera.aspect = window.innerWidth / window.innerHeight;
	    camera.updateProjectionMatrix();
	    renderer.setSize(window.innerWidth, window.innerHeight);


	    
	    uniforms.resolution.value.x = window.innerWidth* window.devicePixelRatio;
	    uniforms.resolution.value.y = window.innerHeight* window.devicePixelRatio;
	}

	function animate() {
	    animationInterval = requestAnimationFrame(animate);

	    render();
	}

	function render() {
	    uniforms.time.value += clock.getDelta();
	    renderer.render(scene, camera);
	}

	function start(){
		animate();
	}

	function stop(){
		animationInterval = cancelAnimationFrame(animationInterval);
	}

	var obj = {};

	obj.init = init;
	obj.start = start;
	obj.stop = stop;

	return obj;

})();