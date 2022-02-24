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
                //node.material.color=new THREE.Color(0xffffff);
                //node.material.color=new THREE.Color(0x66cc22);
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
AFRAME.registerComponent('car', {
    init: function(){
    let el = this.el;
    el.addEventListener('model-loaded', e =>{
        let car3D = el.getObject3D('mesh');
        if(!car3D) return;
        car3D.traverse(function(node){
        if(node.isMesh){
            node.material = new THREE.MeshBasicMaterial();
            node.material.side = THREE.DoubleSide;
            //node.material.color=new THREE.Color(0xffffff);
            //node.material.color=new THREE.Color(0x66cc22);
            let texture = new THREE.TextureLoader().load("texture/texture2.jpg");
            node.material.map = texture;
        }
        });
    });
    }
});