import type { InferGetStaticPropsType, NextPage } from 'next';
import Layout from 'src/commons/components/layout';
import { gql } from 'graphql-request';
import { graphQLClient } from 'src/commons/lib/graphQLClient';
import { getSdk } from 'src/graphql/types.d';
import siteData from 'src/commons/lib/siteData';
import { SerialsTable } from 'src/components/molecules/serial';
import { TagsTable } from 'src/components/molecules/tag';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const Component: NextPage<Props> = ({ data }) => {
  const parentPages = siteData.parentPages;
  const topPage = siteData.topPage;

  const title = topPage.title;
  const breadcrumbsList = [[...parentPages]];
  return (
    <Layout title={title} breadcrumbsList={breadcrumbsList} isTopPage>
      <style jsx>{`
        :global(#__next) h2 {
          margin-bottom: 0.75rem;
        }
      `}</style>
      <section className='section'>
        <h2 className='title is-4'>雑誌</h2>
        <SerialsTable serials={data.serials || undefined} />
      </section>
      <section className='section'>
        <h2 className='title is-4'>タグ</h2>
        <TagsTable tags={data.tags || undefined} />
      </section>
    </Layout>
  );
};
export default Component;

export const getStaticProps = async () => {
  const query = gql`
    query IndexPage {
      serials: allSerialsList(orderBy: TITLE_ASC) {
        ...Serial
      }
      tags: allTagsList(orderBy: TITLE_ASC) {
        ...Tag
      }
    }
  `;

  const data = await getSdk(graphQLClient).IndexPage();

  return { props: { data } };
};
