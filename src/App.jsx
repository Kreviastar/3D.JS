import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, Sparkles} from '@react-three/drei';
import { useRef } from 'react';


function RotatingCube(){
    const meshRef = useRef();
    useFrame(() =>{
        if(meshRef.current){
            meshRef.current.rotation.y += 0.01;    
            meshRef.current.rotation.x += 0.01;    
        }
    })
    return (
        <mesh ref={meshRef}>
             <cylinderGeometry args={[1,1, 1]}/>
             <meshLambertMaterial color="#468585" emissive="468585" />
             <Sparkles count={100} size={6} speed={0.002} noise={0.3} color='blue'  />
        </mesh>
    )
}

const App = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', 
        display:'flex', alignItems: 'center', 
        justifyContent:'center'}}>
            <OrbitControls enableDamping enablePan enableZoom enableRotate   />
        <directionalLight position={[1,1,1]} intensity={10} color={'0X9CDBA6'} />
        <color attach={'background'}   args={['#F0F0F0']} />

        <RotatingCube />
        </Canvas>
  )
}

export default App