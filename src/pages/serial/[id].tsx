import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from 'src/commons/components/layout';
import { gql } from 'graphql-tag';
import { graphQLClient } from 'src/commons/lib/graphQLClient';
import { SerialTable, serialFragment } from 'src/components/molecules/serial';
import {
  serialNumberFragment,
  SerialNumbersTable,
} from 'src/components/molecules/serialNumber';
import { SerialPageQuery, SerialPagePathsQuery } from 'src/graphql/types';
import siteData from 'src/commons/lib/siteData';
import { getMetadataOfSerialPage } from 'src/lib/metadataOfPages';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const Component: NextPage<Props> = ({ data }) => {
  const serial = data.serial;

  const parentPages = siteData.parentPages;
  const topPage = siteData.topPage;
  const serialPage = getMetadataOfSerialPage(serial || undefined);

  const breadcrumbsList = [[...parentPages, topPage]];
  const page = serialPage;
  return (
    <Layout title={page.title} breadcrumbsList={breadcrumbsList}>
      <section className='section'>
        <h2 className='title is-4'>詳細</h2>
        <SerialTable serial={serial || undefined} />
      </section>
      <section className='section'>
        <h2 className='title is-4'>雑誌巻号</h2>
        <SerialNumbersTable
          serialNumbers={serial?.serialNumbers}
          hideColumns={['serialTitle']}
        />
      </section>
    </Layout>
  );
};
export default Component;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const query = gql`
    query SerialPage($id: Int!) {
      serial: serialById(id: $id) {
        ...Serial
        serialNumbers: serialNumbersBySerialIdList(orderBy: ISSUED_ASC) {
          ...SerialNumber
        }
      }
    }
    ${serialFragment}
    ${serialNumberFragment}
  `;

  const data = await graphQLClient.request<SerialPageQuery>(query, {
    id: Number(context.params?.id),
  });

  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query SerialPagePaths {
      items: allSerialsList {
        id
        serialNumbersBySerialId {
          totalCount
        }
      }
    }
  `;

  const data = await graphQLClient.request<SerialPagePathsQuery>(query);

  const paths = data.items
    ? data.items
        .filter((item) => 0 < item.serialNumbersBySerialId.totalCount)
        .map((item) => ({
          params: { id: String(item.id) },
        }))
    : [];

  return { paths: paths, fallback: false };
};
