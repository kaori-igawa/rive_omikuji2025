import { useRive } from '@rive-app/react-canvas';


import riveFile from '@data/omikuji2025.riv'

const AnimationView = () => {

  const { RiveComponent } = useRive({
    src: riveFile,
    artboard: 'Artboard',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  return <RiveComponent />;
};

export default AnimationView;