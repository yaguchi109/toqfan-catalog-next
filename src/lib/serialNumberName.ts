import { gql } from 'graphql-request';
import { SerialNumberNameFragment } from 'src/graphql/types.d';

export const getSerialNumberName = (
  serialNumber?: SerialNumberNameFragment
) => {
  const array = [];
  serialNumber?.vol && array.push(`第${serialNumber.vol}巻`);
  serialNumber?.number && array.push(`第${serialNumber.number}号`);
  serialNumber?.serialNumber &&
    array.push(`通巻第${serialNumber.serialNumber}号`);
  serialNumber?.date?.length && array.push(serialNumber.date);

  return array.join(' ');
};

export const serialNumberNameFragment = gql`
  fragment SerialNumberName on SerialNumber {
    vol
    number
    serialNumber
    date
  }
`;
