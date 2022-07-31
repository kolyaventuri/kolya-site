import * as React from 'react';
import {useI18N} from '../hooks/use-i18n';
import {HTMLReplace} from './html-replace';

const Footer = (): JSX.Element => {
  const getIntlString = useI18N();
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
        <HTMLReplace
          tagMap={[() => <i className="fal fa-heart text-red-500" />]}
        >
          {getIntlString('footer.madeWithLove')}
        </HTMLReplace>
      </p>
      <p className="text-right p-4 py-0 text-sm text-gray-500">
        <HTMLReplace
          tagMap={[
            (c) => (
              <a
                className="underline"
                href="https://openmoji.org/"
                target="_blank"
                rel="noreferrer"
              >
                {c}
              </a>
            ),
            (c) => (
              <a
                className="underline"
                href="https://creativecommons.org/licenses/by-sa/4.0/#"
                target="_blank"
                rel="noreferrer"
              >
                {c}
              </a>
            ),
          ]}
        >
          {getIntlString('footer.license')}
        </HTMLReplace>
      </p>
    </div>
  );
};

export default Footer;
