import * as React from 'react';

interface BubbleProps {
  color: string[];
  icon: string;
  link: string;
  justify: 'start' | 'end';
}

const Bubble = ({icon, color, link, justify}: BubbleProps): JSX.Element => {
  return (
    <a
      className={`bg-${color[0]} hover:bg-${color[1]} cursor-pointer rounded-full p-8 w-48 my-2 h-48 md:w-40 md:h-40 sm:w-32 sm:h-32 grid grid-cols-1 content-center justify-center lg:justify-self-${justify}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <p className="text-center text-white text-7xl">
        <i className={`${icon}`} />
      </p>
    </a>
  );
};

const bubbles = [
  {
    color: ['blue-400', 'blue-300'],
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/kolyaventuri',
  },
  {
    color: ['gray-800', 'gray-700'],
    icon: 'fab fa-github',
    link: 'https://github.com/kolyaventuri',
  },
  {
    color: ['red-700', 'red-600'],
    icon: 'fab fa-npm',
    link: 'https://www.npmjs.com/~kolyaventuri',
  },
];

const Socials = (): JSX.Element => (
  <ul className="list-none h-full p-8 lg:px-4">
    {bubbles.map((data, i) => (
      <li key={`bubble-${data.link}`} className="w-full grid grid-rows-1">
        <Bubble
          color={data.color}
          icon={data.icon}
          link={data.link}
          justify={i % 2 ? 'end' : 'start'}
        />
      </li>
    ))}
  </ul>
);

export default Socials;
