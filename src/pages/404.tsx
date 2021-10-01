import type { NextPage } from 'next';
import Layout from 'src/commons/components/layout';
import siteData from 'src/commons/lib/siteData';

const Component: NextPage = () => {
  const parentPages = siteData.parentPages;

  const title = siteData.notFoundPageTitle;
  const breadcrumbsList = [[...parentPages]];
  return (
    <Layout
      title={title}
      breadcrumbsList={breadcrumbsList}
      showTopBreadcrumbs={false}
      showBottomBreadcrumbs={false}
    >
      <section className='section'>
        <div className='container'>
          <p>{title}</p>
        </div>
      </section>
    </Layout>
  );
};
export default Component;
