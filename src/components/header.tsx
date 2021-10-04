import * as React from 'react';

interface NavItem {
  path: string;
  text: string;
  icon?: string;
}

const navigation: NavItem[] = [
  {path: '/software', text: 'Software'},
  {path: '/lighting', text: 'Lighting'},
];

interface Props {
  route: string;
}

export const Header = ({route}: Props): JSX.Element => (
  <header className="bg-gray-800">
    <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div className="w-full py-6 flex items-center justify-between border-b border-gray-500 lg:border-none">
        <div className="flex items-center w-full">
          <a
            href={route === '/' ? '#' : '/'}
            className="text-3xl lg:text-5xl font-semibold text-white"
          >
            kolya
          </a>
          <div className="hidden lg:block text-center w-full left-0 absolute overflow-hidden">
            {navigation.map(({path, text}) => (
              <a
                key={`link-${text}`}
                href={path}
                className="text-lg lg:text-2xl font-medium text-white hover:text-pink-300 px-6"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        {navigation.map(({path, text}) => (
          <a
            key={`link-${text}`}
            href={path}
            className="sm:text-lg lg:text-2xl font-medium text-white hover:text-pink-300"
          >
            {text}
          </a>
        ))}
      </div>
    </nav>
  </header>
);
