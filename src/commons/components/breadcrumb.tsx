import { useRouter } from 'next/router';
import siteData, { MetadataOfPage } from 'src/commons/lib/siteData';
import PageLink from 'src/commons/components/pageLink';

interface BreadcrumbElementsListProps {
  breadcrumbsList: MetadataOfPage[][];
  currentPageTitle: string;
}
export const BreadcrumbElementsList: React.FC<BreadcrumbElementsListProps> = ({
  breadcrumbsList,
  currentPageTitle,
}) => (
  <>
    {breadcrumbsList.map((breadcrumbs, index) => (
      <div
        key={index}
        className='breadcrumb has-succeeds-separator'
        aria-label='breadcrumbs'
      >
        <BreadcrumbElements
          breadcrumbs={breadcrumbs}
          currentPageTitle={currentPageTitle}
        />
      </div>
    ))}
  </>
);

interface BreadcrumbElementsProps {
  breadcrumbs: MetadataOfPage[];
  currentPageTitle: string;
}
const BreadcrumbElements: React.FC<BreadcrumbElementsProps> = ({
  breadcrumbs,
  currentPageTitle,
}) => (
  <ul>
    {breadcrumbs.map((breadcrumb, index) => (
      <li key={index}>
        <PageLink page={breadcrumb}>{breadcrumb.title}</PageLink>
      </li>
    ))}
    <li className='is-active'>
      <a href='.' aria-current='page'>
        {currentPageTitle}
      </a>
    </li>
  </ul>
);

interface BackLinksProps {
  breadcrumbsList: MetadataOfPage[][];
}
export const BackLinks: React.FC<BackLinksProps> = ({ breadcrumbsList }) => {
  const backLinks = breadcrumbsList
    .filter((item) => 0 < item.length)
    .map((item) => item.slice(-1)[0]);

  if (backLinks.length === 0) {
    return <></>;
  }

  return (
    <div className='buttons'>
      <style jsx>{`
        :global(#__next) .buttons {
          margin-right: 1.5rem;
        }
        :global(#__next) .button {
          margin-bottom: 0.5rem;
        }
      `}</style>
      {backLinks.map((backLink, index) => (
        <PageLink
          key={index}
          className='button is-medium is-link'
          page={backLink}
        >
          {backLink.title} に戻る
        </PageLink>
      ))}
    </div>
  );
};

interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: ListItem[];
}
export const BreadcrumbObjectsList = (
  breadcrumbsList: MetadataOfPage[][]
): BreadcrumbList[] =>
  breadcrumbsList.map(
    (breadcrumbs: MetadataOfPage[]): BreadcrumbList => ({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: BreadcrumbObjects(breadcrumbs),
    })
  );

interface ListItem {
  '@type': string;
  position: number;
  name: string;
  item: string;
}
const BreadcrumbObjects = (breadcrumbs: MetadataOfPage[]): ListItem[] => {
  const basePath = useRouter().basePath;
  const siteUrl = siteData.siteUri;
  return breadcrumbs.map(
    (breadcrumb: MetadataOfPage, index: number): ListItem => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.title,
      item:
        siteUrl +
        (breadcrumb.linkType === 'a'
          ? breadcrumb.path
          : basePath + breadcrumb.path),
    })
  );
};
