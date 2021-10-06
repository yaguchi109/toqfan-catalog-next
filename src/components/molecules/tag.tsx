import Link from 'next/link';
import {
  CommonTable,
  CommonListTable,
  KeyGeneraterInterface,
  ColumnsGeneraterInterface,
  Column,
} from 'src/components/molecules/commonTable';
import { getMetadataOfTagPage } from 'src/lib/metadataOfPages';
import { TagFragment } from 'src/graphql/types.d';

interface TagsTableProps {
  tags?: readonly TagFragment[];
}
export const TagsTable: React.FC<TagsTableProps> = ({ tags = [] }) => {
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
export const TagTable: React.FC<TagTableProps> = ({ tag }) => (
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
