import { useState } from 'react';
import { useRive } from '@rive-app/react-canvas';


import riveFile from '@data/omikuji2025.riv'

const AnimationView = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { RiveComponent } = useRive({
    src: riveFile,
    artboard: 'Artboard',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad: () => {
      setIsLoaded(true);
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