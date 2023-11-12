declare namespace JSX {
  interface IntrinsicElements {
    'my-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'table-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}