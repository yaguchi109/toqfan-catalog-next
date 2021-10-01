import type { NextPage } from 'next';
import Link from 'next/link';
import { gql } from 'graphql-tag';
import {
  CommonTable,
  CommonListTable,
  KeyGeneraterInterface,
  ColumnsGeneraterInterface,
  Column,
} from 'src/components/molecules/commonTable';
import {
  getMetadataOfTagPage,
  metadataOfTagPageFragment,
} from 'src/lib/metadataOfPages';
import { TagFragment } from 'src/graphql/types';

interface TagsTableProps {
  tags?: readonly TagFragment[];
}
export const TagsTable: NextPage<TagsTableProps> = ({ tags = [] }) => {
  return (
    <CommonListTable
      items={tags}
      keyGenerater={keyGenerater}
      columnsGenerater={columnsGenerater}
    />
  );
};

interface TagTableProps {
  tag?: TagFragment;
}
export const TagTable: NextPage<TagTableProps> = ({ tag }) => (
  <CommonTable item={tag} columnsGenerater={columnsGenerater} />
);

const keyGenerater: KeyGeneraterInterface = (item: TagFragment) => {
  return item.id;
};
const columnsGenerater: ColumnsGeneraterInterface = (item: TagFragment) => {
  const tag = item;

  let tagTitle = undefined;
  let tagTitleLink = undefined;
  if (tag && tag.tagMapsByTagId) {
    tagTitle = tag.title;
    if (0 < tag.tagMapsByTagId.totalCount) {
      tagTitleLink = (
        <Link href={getMetadataOfTagPage(tag).path}>
          <a>{tag.title}</a>
        </Link>
      );
    }
  }
  const columns: Column[] = [
    {
      id: 'title',
      label: '名前',
      pluralContent: tagTitleLink,
      content: <>{tagTitle}</>,
    },
    {
      id: 'count',
      label: '書誌件数',
      content: <>{tag?.tagMapsByTagId.totalCount}</>,
    },
  ];
  return columns;
};

export const tagFragment = gql`
  fragment Tag on Tag {
    ...MetadataOfTagPage
    title
    tagMapsByTagId {
      totalCount
    }
  }
  ${metadataOfTagPageFragment}
`;
