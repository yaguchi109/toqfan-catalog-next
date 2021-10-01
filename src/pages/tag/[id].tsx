import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from 'src/commons/components/layout';
import { gql } from 'graphql-tag';
import { graphQLClient } from 'src/commons/lib/graphQLClient';
import {
  TagPageQuery,
  TagPagePathsQuery,
  ArticleFragment,
} from 'src/graphql/types';
import {
  articleFragment,
  ArticlesTable,
} from 'src/components/molecules/article';
import {
  metadataOfTagPageFragment,
  getMetadataOfTagPage,
} from 'src/lib/metadataOfPages';
import siteData from 'src/commons/lib/siteData';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const Component: NextPage<Props> = ({ data }) => {
  const tagMaps = data.tag?.tagMaps || [];

  const parentPages = siteData.parentPages;
  const topPage = siteData.topPage;
  const tagPage = getMetadataOfTagPage(data.tag || undefined);

  const title = tagPage.title;
  const breadcrumbsList = [[...parentPages, topPage]];

  const articles: ArticleFragment[] = tagMaps
    .map((x) => x.bookResource?.article)
    .filter((x): x is NonNullable<typeof x> => x != null)
    .sort((a, b) =>
      (a?.serialNumber?.issued || '') < (b?.serialNumber?.issued || '')
        ? -1
        : (b?.serialNumber?.issued || '') < (a?.serialNumber?.issued || '')
        ? 1
        : 0
    );
  return (
    <Layout title={title} breadcrumbsList={breadcrumbsList}>
      <section className='section'>
        <h2 className='title is-4'>タグが含まれる雑誌記事</h2>
        <ArticlesTable articles={articles} />
      </section>
    </Layout>
  );
};
export default Component;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const query = gql`
    query TagPage($id: Int!) {
      tag: tagById(id: $id) {
        ...MetadataOfTagPage
        tagMaps: tagMapsByTagIdList {
          bookResource: bookResourceByResourceId {
            article: articleById {
              ...Article
              serialNumber: serialNumberBySerialNumberId {
                issued
              }
            }
          }
        }
      }
    }
    ${metadataOfTagPageFragment}
    ${articleFragment}
  `;

  const data = await graphQLClient.request<TagPageQuery>(query, {
    id: Number(context.params?.id),
  });

  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query TagPagePaths {
      items: allTagsList {
        id
        tagMapsByTagId {
          totalCount
        }
      }
    }
  `;

  const data = await graphQLClient.request<TagPagePathsQuery>(query);

  const paths = data.items
    ? data.items
        .filter((item) => 0 < item.tagMapsByTagId.totalCount)
        .map((item) => ({
          params: { id: String(item.id) },
        }))
    : [];

  return { paths: paths, fallback: false };
};
