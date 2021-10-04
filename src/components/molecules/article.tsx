import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import {
  CommonTable,
  CommonListTable,
  ColumnsGeneraterInterface,
  KeyGeneraterInterface,
  Column,
} from 'src/components/molecules/commonTable';
import Authors from 'src/components/atoms/authors';
import Ndl from 'src/components/atoms/ndl';
import { getSerialNumberName } from 'src/lib/serialNumberName';
import {
  getMetadataOfSerialPage,
  getMetadataOfSerialNumberPage,
  getMetadataOfTagPage,
} from 'src/lib/metadataOfPages';
import { ArticleFragment } from 'src/graphql/types.d';

interface ArticlesTableProps {
  articles?: readonly ArticleFragment[];
  hideColumns?: readonly string[];
}
export const ArticlesTable: NextPage<ArticlesTableProps> = ({
  articles,
  hideColumns,
}) => {
  return (
    <CommonListTable
      items={articles}
      keyGenerater={keyGenerater}
      columnsGenerater={columnsGenerater}
      hideColumns={hideColumns}
    />
  );
};

interface ArticleTableProps {
  article?: ArticleFragment;
}
export const ArticleTable: NextPage<ArticleTableProps> = ({ article }) => (
  <CommonTable item={article} columnsGenerater={columnsGenerater} />
);

const keyGenerater: KeyGeneraterInterface = (item: ArticleFragment) => {
  return item.id;
};
const columnsGenerater: ColumnsGeneraterInterface = (item: ArticleFragment) => {
  const article = item;
  const serialPage = getMetadataOfSerialPage(
    article?.serialNumber?.serial || undefined
  );
  const serialNumberPage = getMetadataOfSerialNumberPage(
    article?.serialNumber || undefined
  );
  const columns: Column[] = [
    {
      id: 'serialTitle',
      label: '雑誌名',
      content: article && (
        <Link href={serialPage.path}>
          <a>{article?.serialNumber?.serial?.title}</a>
        </Link>
      ),
    },
    {
      id: 'serialNumberTitle',
      label: '巻次・年月次',
      pluralContent: article && (
        <Link href={serialNumberPage.path}>
          <a>{getSerialNumberName(article?.serialNumber || undefined)}</a>
        </Link>
      ),
    },
    { id: 'pages', label: 'ページ', content: <>{article?.pages}</> },
    {
      id: 'title',
      label: 'タイトル',
      content: <>{article?.title}</>,
      minWidth: '20em',
      maxWidth: '25em',
    },
    {
      id: 'authors',
      label: '著者',
      content: article && (
        <Authors authors={article?.bookResource?.authors || undefined} />
      ),
      minWidth: '10em',
      maxWidth: '20em',
    },
    {
      id: 'ndl',
      label: '全国書誌番号',
      content: <Ndl ndl={article?.ndl || undefined} />,
    },
    {
      id: 'subjoinder',
      label: '付記',
      content: <>{article?.subjoinder}</>,
      minWidth: '10em',
      maxWidth: '15em',
    },
    {
      id: 'tags',
      label: 'タグ',
      content: <Tags tagMaps={article?.bookResource?.tagMaps} />,
      minWidth: '10em',
      maxWidth: '15em',
    },
  ];
  return columns;
};

interface TagsProps {
  tagMaps: any;
}
export const Tags: NextPage<TagsProps> = ({ tagMaps }) => (
  <>
    {tagMaps.map((tagMap: any, index: any) => (
      <React.Fragment key={tagMap.tag.id}>
        {0 < index && '、'}
        <Link href={getMetadataOfTagPage(tagMap.tag).path}>
          <a>{tagMap.tag.title}</a>
        </Link>
      </React.Fragment>
    ))}
  </>
);
