type Props = {
  children: React.ReactNode;
};

export function CtaButton(props: Props) {
  const { children } = props;
  return <button>{children}</button>;
}
