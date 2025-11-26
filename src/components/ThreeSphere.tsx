'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float time;
  uniform vec2 mouse;
  varying vec3 vNormal;
  varying vec3 vPosition;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vNormal = normal;
    vPosition = position;

    vec3 pos = position;
    float noiseFreq = 0.6;
    float noiseAmp = 0.1;

    vec3 noisePos = position * noiseFreq + time * 0.3;
    float noise1 = snoise(noisePos);
    float noise2 = snoise(noisePos + vec3(100.0, 100.0, time * 0.2));
    float noise3 = snoise(noisePos + vec3(200.0, 200.0, time * 0.15));

    pos += normal * noise1 * noiseAmp;
    pos += normal * noise2 * noiseAmp * 0.7;
    pos += normal * noise3 * noiseAmp * 0.4;

    float dist = length(mouse);
    pos += normal * sin(time * 2.5 + dist * 4.0) * 0.02 * (1.0 - dist * 0.3);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 light = normalize(vec3(0.5, 0.2, 1.0));
    vec3 viewDirection = normalize(cameraPosition - vPosition);

    float diffuse = max(dot(vNormal, light), 0.0);
    vec3 halfVector = normalize(light + viewDirection);
    float specular = pow(max(dot(vNormal, halfVector), 0.0), 32.0);

    vec3 baseColor = vec3(0.02, 0.27, 0.70);
    vec3 lightColor = vec3(0.4, 0.6, 1.0);
    vec3 specularColor = vec3(0.8, 0.9, 1.0);

    vec3 color = baseColor * 0.3;
    color += baseColor * diffuse * 0.7;
    color += lightColor * specular * 0.5;
    color += specularColor * pow(specular, 4.0) * 0.3;

    float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.0);
    color += vec3(0.3, 0.5, 0.8) * fresnel * 0.4;

    gl_FragColor = vec4(color, 0.9);
  }
`;

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      mouse: { value: new THREE.Vector2() },
      resolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
    }),
    [viewport]
  );

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.time.value = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export default function ThreeSphere() {
  return (
    <div className="w-full max-w-[500px] h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
