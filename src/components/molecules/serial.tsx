import type { NextPage } from 'next';
import Link from 'next/link';
import { gql } from 'graphql-request';
import {
  CommonTable,
  CommonListTable,
  KeyGeneraterInterface,
  ColumnsGeneraterInterface,
  Column,
} from 'src/components/molecules/commonTable';
import Authors from 'src/components/atoms/authors';
import Ndl from 'src/components/atoms/ndl';
import { getMetadataOfSerialPage } from 'src/lib/metadataOfPages';
import { SerialFragment } from 'src/graphql/types.d';

interface SerialsTableProps {
  serials?: readonly SerialFragment[];
}
export const SerialsTable: NextPage<SerialsTableProps> = ({ serials = [] }) => (
  <CommonListTable
    items={serials}
    keyGenerater={keyGenerater}
    columnsGenerater={columnsGenerater}
  />
);

interface SerialTableProps {
  serial?: SerialFragment;
}
export const SerialTable: NextPage<SerialTableProps> = ({ serial }) => (
  <CommonTable item={serial} columnsGenerater={columnsGenerater} />
);

const keyGenerater: KeyGeneraterInterface = (item: SerialFragment) => {
  return item.id;
};
const columnsGenerater: ColumnsGeneraterInterface = (item: SerialFragment) => {
  const serial = item;

  let serialTitle = undefined;
  let serialTitleLink = undefined;
  if (serial) {
    serialTitle = <>{serial.title}</>;
    if (0 < serial.serialNumbersBySerialId.totalCount) {
      const serialPage = getMetadataOfSerialPage(serial);
      serialTitleLink = (
        <Link href={serialPage.path}>
          <a>{serial.title}</a>
        </Link>
      );
    }
  }
  const columns: Column[] = [
    {
      id: 'title',
      label: 'タイトル',
      pluralContent: serialTitleLink,
      content: serialTitle,
    },
    {
      id: 'authors',
      label: '作成者',
      content: <Authors authors={serial?.bookResource?.authors || undefined} />,
    },
    {
      id: 'ndl',
      label: '全国書誌番号',
      content: <Ndl ndl={serial?.ndl || undefined} />,
    },
    {
      id: 'subjoinder',
      label: '付記',
      content: <>{serial?.subjoinder}</>,
    },
  ];
  return columns;
};

export const serialFragment = gql`
  fragment Serial on Serial {
    ...MetadataOfSerialPage
    title
    ndl
    subjoinder
    bookResource: bookResourceById {
      authors: authorsByIdList(orderBy: ORDER_ASC) {
        ...Authors
      }
    }
    serialNumbersBySerialId {
      totalCount
    }
  }
`;
