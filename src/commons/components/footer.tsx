import type { NextPage } from 'next';
import siteData, { MetadataOfPage } from 'src/commons/lib/siteData';
import { BackLinks } from 'src/commons/components/breadcrumb';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

interface Props {
  breadcrumbsList: MetadataOfPage[][];
}
const Component: NextPage<Props> = ({ breadcrumbsList }) => {
  const lastModified = siteData.lastModified;
  const author = siteData.author;
  const infoPage = siteData.infoPage;
  return (
    <footer className='footer'>
      <style jsx>{`
        :global(#__next) ul > li {
          display: inline-block;
          margin-right: 1.5rem;
        }
      `}</style>
      <div className='container'>
        <BackLinks breadcrumbsList={breadcrumbsList} />
        <ul>
          <li>
            {lastModified.label}:{' '}
            <time dateTime={lastModified.date}>{lastModified.date}</time>
          </li>
          <li>
            {author.label}: {author.name} &lt;
            <a href={`mailto:${encodeURI(author.mailAddress)}`}>
              {author.mailAddress}
            </a>
            &gt;
          </li>
          <li>
            <a href={infoPage.path}>{infoPage.title}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Component;
