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
import { getSerialNumberName } from 'src/lib/serialNumberName';
import {
  getMetadataOfSerialPage,
  getMetadataOfSerialNumberPage,
} from 'src/lib/metadataOfPages';
import { SerialNumberFragment } from 'src/graphql/types.js';

interface SerialNumbersTableProps {
  serialNumbers?: readonly SerialNumberFragment[];
  hideColumns?: readonly string[];
}
export const SerialNumbersTable: NextPage<SerialNumbersTableProps> = ({
  serialNumbers,
  ...listTableProps
}) => {
  const props = {
    ...listTableProps,
    ...{
      items: serialNumbers,
      keyGenerater: keyGenerater,
      columnsGenerater: columnsGenerater,
    },
  };

  return <CommonListTable {...props} />;
};

interface SerialNumberTableProps {
  serialNumber?: SerialNumberFragment;
}
export const SerialNumberTable: NextPage<SerialNumberTableProps> = ({
  serialNumber,
}) => <CommonTable item={serialNumber} columnsGenerater={columnsGenerater} />;

const keyGenerater: KeyGeneraterInterface = (item: SerialNumberFragment) => {
  return item.id;
};
const columnsGenerater: ColumnsGeneraterInterface = (
  item: SerialNumberFragment
) => {
  const serialNumber = item;

  let serialNumberName = undefined;
  let serialNumberNameLink = undefined;
  if (serialNumber) {
    serialNumberName = getSerialNumberName(serialNumber);
    if (0 < serialNumber.articlesBySerialNumberId.totalCount) {
      serialNumberNameLink = (
        <Link href={getMetadataOfSerialNumberPage(serialNumber).path}>
          <a>{serialNumberName}</a>
        </Link>
      );
    }
  }
  const columns: Column[] = [
    {
      id: 'serialTitle',
      label: '雑誌名',
      content: serialNumber && (
        <Link
          href={getMetadataOfSerialPage(serialNumber.serial || undefined).path}
        >
          <a>{serialNumber?.serial?.title}</a>
        </Link>
      ),
    },
    {
      id: 'title',
      label: '巻次・年月次',
      pluralContent: serialNumberNameLink,
      content: <>{serialNumberName}</>,
    },
    {
      id: 'issued',
      label: '発行日',
      content: <>{serialNumber?.issued}</>,
    },
    {
      id: 'specialTopic',
      label: '特集',
      content: <>{serialNumber?.specialTopic}</>,
    },
    {
      id: 'authors',
      label: '著者',
      content: (
        <Authors authors={serialNumber?.bookResource?.authors || undefined} />
      ),
    },
    {
      id: 'ndl',
      label: '全国書誌番号',
      content: <Ndl ndl={serialNumber?.ndl || undefined} />,
    },
    {
      id: 'subjoinder',
      label: '付記',
      content: <>{serialNumber?.subjoinder}</>,
    },
  ];
  return columns;
};

export const serialNumberFragment = gql`
  fragment SerialNumber on SerialNumber {
    id
    issued
    specialTopic
    ndl
    subjoinder
    bookResource: bookResourceById {
      authors: authorsByIdList(orderBy: ORDER_ASC) {
        ...Authors
      }
    }
    ...SerialNumberName
    ...MetadataOfSerialNumberPage
    articlesBySerialNumberId {
      totalCount
    }
    serial: serialBySerialId {
      title
      ...MetadataOfSerialPage
    }
  }
`;
