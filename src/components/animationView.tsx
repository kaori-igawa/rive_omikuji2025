import { useRive } from '@rive-app/react-canvas';
// import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

import riveFile from '@data/omikuji2025.riv'

const AnimationView = () => {

  const riveParams = {
    src: riveFile,
    artboard: 'Artboard',
    stateMachines: 'State Machine 1',
    // layout: new Layout({
    //   fit: Fit.Cover,
    //   alignment: Alignment.TopCenter,
    // }),
    autoplay: true,
  };

  const { RiveComponent } = useRive(riveParams);

  return <RiveComponent />;
};

export default AnimationView;