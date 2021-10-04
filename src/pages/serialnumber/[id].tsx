import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from 'src/commons/components/layout';
import { gql } from 'graphql-request';
import { graphQLClient } from 'src/commons/lib/graphQLClient';
import { getSdk } from 'src/graphql/types.d';
import { ArticlesTable } from 'src/components/molecules/article';
import {
  getMetadataOfSerialPage,
  getMetadataOfSerialNumberPage,
} from 'src/lib/metadataOfPages';
import siteData from 'src/commons/lib/siteData';
import { SerialNumberTable } from 'src/components/molecules/serialNumber';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const Component: NextPage<Props> = ({ data }) => {
  const serialNumber = data.serialNumber;

  const parentPages = siteData.parentPages;
  const topPage = siteData.topPage;
  const serialPage = getMetadataOfSerialPage(serialNumber?.serial || undefined);
  const serialNumberPage = getMetadataOfSerialNumberPage(
    serialNumber || undefined
  );

  const title = serialNumberPage.title;
  const breadcrumbsList = [[...parentPages, topPage, serialPage]];

  return (
    <Layout title={title} breadcrumbsList={breadcrumbsList}>
      <section className='section'>
        <h2 className='title is-4'>詳細</h2>
        <SerialNumberTable serialNumber={serialNumber || undefined} />
      </section>
      <section className='section'>
        <h2 className='title is-4'>雑誌記事</h2>
        <ArticlesTable
          articles={serialNumber?.articles || undefined}
          hideColumns={['serialTitle', 'serialNumberTitle']}
        />
      </section>
    </Layout>
  );
};
export default Component;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const query = gql`
    query SerialNumberPage($id: Int!) {
      serialNumber: serialNumberById(id: $id) {
        ...MetadataOfSerialNumberPage
        serial: serialBySerialId {
          ...MetadataOfSerialPage
        }
        ...SerialNumber
        articles: articlesBySerialNumberIdList(orderBy: PAGE_ASC) {
          ...Article
        }
      }
    }
  `;

  const data = await getSdk(graphQLClient).SerialNumberPage({
    id: Number(context.params?.id),
  });

  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query SerialNumberPagePaths {
      items: allSerialNumbersList {
        id
        articlesBySerialNumberId {
          totalCount
        }
      }
    }
  `;

  const data = await getSdk(graphQLClient).SerialNumberPagePaths();

  const paths = data.items
    ? data.items
        .filter((item) => 0 < item.articlesBySerialNumberId.totalCount)
        .map((item) => ({
          params: { id: String(item.id) },
        }))
    : [];

  return { paths: paths, fallback: false };
};
