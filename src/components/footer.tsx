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
    </div>
  );
};

export default Footer;
