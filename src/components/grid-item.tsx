import * as React from 'react';
import cx from 'classnames';

interface Props {
  text: string;
  background: string;
  className?: string;

  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

export const GridItem = ({
  text,
  background,
  top,
  bottom,
  left,
  right,
  className = '',
}: Props): JSX.Element => {
  const hasPosition = Boolean(top ?? bottom ?? left ?? right);
  const vert: string[] = [];
  if (top) {
    vert.push('top-5');
  }

  if (bottom) {
    vert.push('bottom-5');
  }

  if (left) {
    vert.push('left-5');
  }

  if (right) {
    vert.push('right-5');
  }

  return (
    <div
      className={cx(
        'group text-white cursor-pointer w-full lg:w-1/2 relative p-0 m-0 flex flex-grow bg-center bg-cover bg-blend-soft-light',
        className,
      )}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-full h-full top-0 left-0 bg-black opacity-50 group-hover:opacity-25 transition-all duration-150" />
      <p
        className={cx(
          'text-5xl lg:text-7xl font-bold uppercase select-none p-0 m-0',
          {
            absolute: hasPosition,
            [vert.join(' ')]: hasPosition,
          },
        )}
      >
        {text}
      </p>
    </div>
  );
};
