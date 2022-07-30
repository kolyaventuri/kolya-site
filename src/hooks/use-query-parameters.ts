import * as React from 'react';

const parseQuery = (
  queryString: string,
): Record<string, string | number | boolean> => {
  const query = {};
  const qs = queryString.startsWith('?') ? queryString.slice(1) : queryString;
  const pairs = qs.split('&');

  for (const pair of pairs) {
    const [name, value] = pair.split('=');

    query[decodeURIComponent(name)] = decodeURIComponent(value || '');
  }

  return query;
};

type QueryParameterResult = null | Record<string, string | number | boolean>;

export const useQueryParameters = (): QueryParameterResult => {
  const [parameters, setParameters] =
    React.useState<QueryParameterResult>(null);

  React.useEffect(() => {
    if (window?.location?.search) {
      const query = parseQuery(window.location.search);
      console.log(query);
      setParameters(query);
    } else {
      setParameters({});
    }
  }, []);

  return parameters;
};
