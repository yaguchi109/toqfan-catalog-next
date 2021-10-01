import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'src/commons/components/header';
import Footer from 'src/commons/components/footer';
import {
  BreadcrumbElementsList,
  BreadcrumbObjectsList,
} from 'src/commons/components/breadcrumb';
import siteData, { MetadataOfPage } from 'src/commons/lib/siteData';
import Menu, { DataOfMenuLabelAndList } from 'src/commons/components/menu';

interface Props {
  title: string;
  breadcrumbsList: MetadataOfPage[][];
  showNavbarBrand?: boolean;
  showTopBreadcrumbs?: boolean;
  showBottomBreadcrumbs?: boolean;
  isTopPage?: boolean;
  menuData?: DataOfMenuLabelAndList[];
}
const Component: NextPage<Props> = ({
  children,
  title,
  breadcrumbsList = [],
  showNavbarBrand = true,
  showTopBreadcrumbs = true,
  showBottomBreadcrumbs = true,
  isTopPage = false,
  menuData = undefined,
}) => {
  const parentPages = siteData.parentPages;
  const topPage = siteData.topPage;

  const headTitles = [title];
  !isTopPage && headTitles.push(topPage.title);
  0 < parentPages.length && headTitles.push(parentPages[0].title);
  const headTitle = headTitles.join(' - ');

  const date = siteData.lastModified.date;

  breadcrumbsList = breadcrumbsList.filter((item) => 0 < item.length);
  return (
    <>
      <style jsx>{`
        :global(#__next) aside {
          flex-shrink: 0;
          width: 17rem;
        }
        :global(#__next) main {
          min-width: 1rem;
        }
      `}</style>
      <Head>
        <title>{headTitle}</title>
        <meta name='date' content={date} />
        {0 < breadcrumbsList.length && (
          <script type='application/ld+json'>
            {JSON.stringify(BreadcrumbObjectsList(breadcrumbsList))}
          </script>
        )}
      </Head>
      <Header
        title={title}
        showNavbarBrand={showNavbarBrand}
        isTopPage={isTopPage}
      />
      <div id='base' className='is-flex-desktop'>
        {menuData && (
          <aside className='section is-hidden-touch'>
            <Menu data={menuData} />
          </aside>
        )}
        <MainSection
          currentPageTitle={title}
          breadcrumbsList={breadcrumbsList}
          showTopBreadcrumbs={showTopBreadcrumbs}
          showBottomBreadcrumbs={showBottomBreadcrumbs}
        >
          {children}
        </MainSection>
      </div>
      <Footer breadcrumbsList={breadcrumbsList} />
    </>
  );
};
export default Component;

interface MainSectionProps {
  currentPageTitle: string;
  breadcrumbsList: MetadataOfPage[][];
  showTopBreadcrumbs: boolean;
  showBottomBreadcrumbs: boolean;
}
const MainSection: NextPage<MainSectionProps> = ({
  showTopBreadcrumbs,
  showBottomBreadcrumbs,
  currentPageTitle,
  breadcrumbsList,
  children,
}) => {
  return (
    <main id='main'>
      {showTopBreadcrumbs && (
        <BreadcrumbSection
          breadcrumbsList={breadcrumbsList}
          currentPageTitle={currentPageTitle}
        />
      )}
      {children}
      {showBottomBreadcrumbs && (
        <BreadcrumbSection
          breadcrumbsList={breadcrumbsList}
          currentPageTitle={currentPageTitle}
        />
      )}
    </main>
  );
};

interface BreadcrumbSectionProps {
  currentPageTitle: string;
  breadcrumbsList: MetadataOfPage[][];
}
const BreadcrumbSection: NextPage<BreadcrumbSectionProps> = ({
  currentPageTitle,
  breadcrumbsList,
}) => {
  return (
    <>
      {0 < breadcrumbsList.length && (
        <nav className='section'>
          <BreadcrumbElementsList
            breadcrumbsList={breadcrumbsList}
            currentPageTitle={currentPageTitle}
          />
        </nav>
      )}
    </>
  );
};
