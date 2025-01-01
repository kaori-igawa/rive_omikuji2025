import { useState } from 'react';
import { useRive, decodeImage, type ImageAsset  } from '@rive-app/react-canvas';


import riveFile from '@data/omikuji2025.riv'

const AnimationView = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchImageAsset = (asset: ImageAsset) => {
    fetch(`/omikuji2025/${asset.uniqueFilename}`).then(async (res) => {
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      asset.setRenderImage(image);
      image.unref();
    });
  };

  const { RiveComponent } = useRive({
    src: riveFile,
    artboard: 'Artboard',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad: () => {
      setIsLoaded(true);
    },
    assetLoader: (asset, bytes) => {
      if (asset.isImage) {
        fetchImageAsset(asset as ImageAsset);
        return true;
      } else {
        return false;
      }
    },
  });

  return (
    <>
      {!isLoaded && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl'>Loading...</div>}
      <RiveComponent />
    </>
  );
};

export default AnimationView;