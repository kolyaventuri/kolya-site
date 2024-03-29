import * as React from 'react';
import Socials from './socials';

const Unicorn = (): JSX.Element => (
  <img src="/apple-icon.png" className="w-12 h-12 p-0 m-0 mt-12 inline" />
);

const Heading = (): JSX.Element => {
  const [ready, setReady] = React.useState(false);
  const [unicorn, setUnicornVisible] = React.useState(false);
  const height = ready ? 'h-screen md:h-4/5-vh xs:h-auto' : 'h-0';

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  const toggleUnicorn = (value: boolean) => {
    setUnicornVisible(value);
  };

  return (
    <div
      className={`w-full bg-gray-200 transition-height duration-1000 ease-in-out overflow-y-scroll ${height}`}
    >
      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="w-full relative p-4 m-0">
          <div>
            <span className="select-none">
              <h1
                className="font-extrabold text-7xl lg:text-very-large p-0 m-0"
                onMouseOver={() => {
                  toggleUnicorn(true);
                }}
                onMouseOut={() => {
                  toggleUnicorn(false);
                }}
              >
                hi there{unicorn ? <Unicorn /> : '.'}
              </h1>
              <p className="font-bold text-5xl p-0 m-0 ml-1">
                i&apos;m <span className="text-green-500">kolya</span>
              </p>
            </span>
            <div className="w-3/4 p-8 pr-4 pl-0 lg:pl-8 text-xl">
              <ul className="list-none leading-7">
                <li className="py-2">
                  <p>
                    i&apos;m a software engineer based out of{' '}
                    <span className="font-semibold">Phoenix, Arizona</span>.
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    i&apos;m passionately building products to{' '}
                    <span className="font-semibold">connect</span>,{' '}
                    <span className="font-semibold">engage</span>,{' '}
                    <span className="font-semibold">empower</span>, and{' '}
                    <span className="font-semibold">inspire</span>.
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    i focus on the frontend in{' '}
                    <span className="font-semibold">React</span>{' '}
                    and{' '}
                    <span className="font-semibold">
                      TypeScript
                    </span>
                    , and{' '}
                    <span className="font-semibold">AWS</span> on
                    the backend.
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    i&apos;m a self-taught{' '}
                    <span className="font-semibold">
                      lighting designer
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold">
                      coffee enthusiast
                    </span>
                    .
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    you can reach me on Twitter{' '}
                    <a
                      className="text-blue-500 font-semibold underline"
                      href="https://twitter.com/kolyaventuri"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @KolyaVenturi
                    </a>{' '}
                    or drop me a line at{' '}
                    <a
                      className="text-blue-500 font-semibold underline"
                      href="mailto:me@kolya.co"
                      target="_blank"
                      rel="noreferrer"
                    >
                      me@kolya.co
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 relative p-4 m-0">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Heading;
