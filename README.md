# r3f
blender
cell fracture
gltfjsx
react three fiber
TypeScript
drei 

ReactとTypeScriptを習得する目的でデモを作成しました。また、Blenderのfractureを使用したインタラクションを実装しました。

・崩壊、衛星軌道をハンドリングするカスタムフック（useExplode、useOrbit）
・Dreiのコンポーネント（Environment、Loader）

# reference
[wawasensei](https://www.wawasensei.dev/tuto/react-three-fiber-tutorial-mesh-explosion-effect)


# yarn
```
yarn
yarn dev
```

# create gltfjsx
```
npx gltfjsx public/models/diamond.glb -o src/components/Diamond.tsx -r public --types
```

![image](https://github.com/yukaorange/mesh-explosion-r3f__wanaSensei/assets/98954503/67df0995-ee30-487b-aa25-9caa95322fd1)
