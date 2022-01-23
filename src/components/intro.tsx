import * as React from 'react';
import lottie from 'lottie-web';

interface Props {
  onComplete: () => void;
}

const Intro = ({onComplete}: Props): JSX.Element => {
  const divRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (divRef.current) {
      setTimeout(() => {
        const animation = lottie.loadAnimation({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          container: divRef.current!,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: 'assets/intro.json',
          rendererSettings: {
            preserveAspectRatio: 'xMaxYMax slice',
            progressiveLoad: true,
          },
        });

        animation.addEventListener('complete', () => {
          animation.destroy();
          onComplete();
        });
      }, 500);
    }
  }, [divRef]);

  return (
    <div ref={divRef} className="h-full w-full top-0 left-0 absolute z-10" />
  );
};

export default Intro;
