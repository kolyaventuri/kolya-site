import * as React from 'react';

interface Props {
  children: string;
  tagMap?: Array<(component: string) => JSX.Element>;
}

export const HTMLReplace = ({
  children,
  tagMap = [],
}: Props): JSX.Element | null => {
  const [replaced, setReplaced] = React.useState<JSX.Element>();

  React.useEffect(() => {
    if (!window) {
      return;
    }

    const parser = new window.DOMParser();
    const parsed = parser.parseFromString(children, 'text/html');
    const {body} = parsed;

    let index = 0;
    const items: Array<string | JSX.Element> = [];

    for (const node of body.childNodes) {
      let data: string | JSX.Element;

      if (node.nodeName === '#text') {
        data = node.textContent ?? '';
      } else {
        const inner = (node as HTMLElement).innerHTML;
        const replacement = tagMap[index];
        data = replacement?.(inner) ?? node;

        index += 1;
      }

      items.push(data);
    }

    const rendered = <>{items.map((item) => item)}</>;
    setReplaced(rendered);
  }, [children, tagMap]);

  return replaced ?? null;
};
