import Link from 'next/link';

interface Props {
  href: string;
  title?: string;
}
const Component: React.FC<Props> = (props) => {
  const { children, href, ...linkProps } = props;
  return (
    <Link href={href}>
      <a className='button' {...linkProps}>
        {children}
      </a>
    </Link>
  );
};
export default Component;
