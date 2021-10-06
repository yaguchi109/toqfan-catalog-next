import Link from 'next/link';
import { MetadataOfPage } from 'src/commons/lib/siteData';

interface Props {
  page: MetadataOfPage;
  className?: string;
  title?: string;
}
const Component: React.FC<Props> = (props) => {
  const { children, page, ...linkProps } = props;
  if (page.linkType !== 'link') {
    return (
      <a href={page.path} {...linkProps}>
        {children}
      </a>
    );
  }
  return (
    <Link href={page.path}>
      <a {...linkProps}>{children}</a>
    </Link>
  );
};
export default Component;
