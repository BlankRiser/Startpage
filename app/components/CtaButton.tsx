type Props = {
  children: React.ReactNode;
};

export default function CtaButton(props: Props) {
  const { children } = props;
  return <button>{children}</button>;
}
