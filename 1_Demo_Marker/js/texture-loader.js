AFRAME.registerComponent('skeleton', {
    init: function(){
        let el = this.el;
        el.addEventListener('model-loaded', e =>{
            let skeleton3D = el.getObject3D('mesh');
            if(!skeleton3D) return;
                skeleton3D.traverse(function(node){
            if(node.isMesh){
                node.material = new THREE.MeshBasicMaterial();
                node.material.side = THREE.DoubleSide;
                let texture = new THREE.TextureLoader().load("texture/Skeleton_D.tif");
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(1,-1);
                node.material.map = texture;
            }
            });
        });
    }
});