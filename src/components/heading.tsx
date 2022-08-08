import * as React from 'react';
import { LanguageContext } from '../context/language';
import {useI18N} from '../hooks/use-i18n';
import {HTMLReplace} from './html-replace';
import Socials from './socials';
import Toggle from './language-toggle';
import {useLanguage} from '../hooks/use-language';

const Unicorn = (): JSX.Element => (
  <img src="/apple-icon.png" className="w-12 h-12 p-0 m-0 mt-12 inline" />
);

const Heading = (): JSX.Element => {
  const [ready, setReady] = React.useState(false);
  const [unicorn, setUnicornVisible] = React.useState(false);
  const [, setLanguage] = useLanguage();
  const getIntlString = useI18N();
  const height = ready ? 'h-screen md:h-4/5-vh xs:h-auto' : 'h-0';

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  const toggleUnicorn = (value: boolean) => {
    setUnicornVisible(value);
  };

  const handleChange = (enabled: boolean) => {
    setLanguage(enabled ? 'sv' : 'en');
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
                {getIntlString('header.title')}
                {unicorn ? <Unicorn /> : '.'}
              </h1>
              <p className="font-bold text-5xl p-0 m-0 ml-1">
                <HTMLReplace
                  tagMap={[(c) => <span className="text-green-500">{c}</span>]}
                >
                  {getIntlString('header.subtitle')}
                </HTMLReplace>
              </p>
            </span>
            <div className="w-3/4 p-8 pr-4 pl-0 lg:pl-8 text-xl">
              <ul className="list-none leading-7">
                <li className="py-2">
                  <p>
                    <HTMLReplace
                      tagMap={[
                        (c) => <span className="font-semibold">{c}</span>,
                      ]}
                    >
                      {getIntlString('items.whoIAm')}
                    </HTMLReplace>
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    <HTMLReplace
                      tagMap={[
                        (c) => <span className="font-semibold">{c}</span>,
                        (c) => <span className="font-semibold">{c}</span>,
                        (c) => <span className="font-semibold">{c}</span>,
                        (c) => <span className="font-semibold">{c}</span>,
                      ]}
                    >
                      {getIntlString('items.whatIDo')}
                    </HTMLReplace>
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    <HTMLReplace
                      tagMap={[
                        (c) => <span className="font-semibold">{c}</span>,
                        (c) => <span className="font-semibold">{c}</span>,
                        (c) => <span className="font-semibold">{c}</span>,
                      ]}
                    >
                      {getIntlString('items.focus')}
                    </HTMLReplace>
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    <HTMLReplace
                      tagMap={[
                        (c) => <span className="font-semibold">{c}</span>,
                        (c) => <span className="font-semibold">{c}</span>,
                      ]}
                    >
                      {getIntlString('items.interests')}
                    </HTMLReplace>
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    <HTMLReplace
                      tagMap={[
                        (c) => (
                          <a
                            className="text-blue-500 font-semibold underline"
                            href="https://twitter.com/kolyaventuri"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {c}
                          </a>
                        ),
                        (c) => (
                          <a
                            className="text-blue-500 font-semibold underline"
                            href="mailto:me@kolya.co"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {c}
                          </a>
                        ),
                      ]}
                    >
                      {getIntlString('items.reachMe')}
                    </HTMLReplace>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 relative p-4 m-0">
          <Toggle onChange={handleChange}/>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Heading;
