import * as React from 'react';

const Footer = (): JSX.Element => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1250);
  }, []);

  const opacity = ready ? 'opacity-100' : 'opacity-0';

  return (
    <div
      className={`w-full md:h-1/3 relative bottom-0 text-white duration-1000 transition-opacity ${opacity}`}
    >
      <p className="p-4 text-right">
        Made with <i className="fal fa-heart text-red-500" /> in Phoenix, AZ
      </p>
      <p className="text-right p-4 py-0 text-sm text-gray-500">
        All emojis designed by{' '}
        <a
          className="underline"
          href="https://openmoji.org/"
          target="_blank"
          rel="noreferrer"
        >
          OpenMoji
        </a>{' '}
        &ndash; the open-source emoji and icon project. License:{' '}
        <a
          className="underline"
          href="https://creativecommons.org/licenses/by-sa/4.0/#"
          target="_blank"
          rel="noreferrer"
        >
          CC BY-SA 4.0
        </a>
      </p>
    </div>
  );
};

export default Footer;
