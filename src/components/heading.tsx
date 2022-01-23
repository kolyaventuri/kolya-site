import * as React from 'react';

const Heading = (): JSX.Element => {
  const [ready, setReady] = React.useState(false);
  const height = ready ? 'h-2/3' : 'h-0';

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  return (
    <div
      className={`w-full bg-gray-200 transition-height duration-1000 ease-in-out overflow-y-hidden ${height}`}
    >
      <div className="flex flex-grow flex-col">
        <div className="w-full lg:w-1/2 relative p-4 m-0 flex flex-grow">
          <div className="select-none">
            <h1 className="font-extrabold text-7xl lg:text-very-large p-0 m-0">
              hi there.
            </h1>
            <p className="font-bold text-5xl p-0 m-0">i&apos;m kolya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
