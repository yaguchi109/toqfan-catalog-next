import { NextPage } from 'next';
import Link from 'next/link';
import useIsActive from 'src/commons/lib/useIsActive';

interface Props {
  path: string;
}
const Component: NextPage<Props> = ({ path, children }) => {
  const isActive = useIsActive(path);
  return (
    <li className={isActive ? 'is-active' : ''}>
      <Link href={path}>{children}</Link>
    </li>
  );
};
export default Component;
