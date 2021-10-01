import type { NextPage } from 'next';

export interface Column {
  id: string;
  label: string;
  pluralContent?: JSX.Element;
  content?: JSX.Element;
  minWidth?: string;
  maxWidth?: string;
}
export interface ColumnsGeneraterInterface {
  (item: any): readonly Column[];
}
export interface KeyGeneraterInterface {
  (item: any): any;
}

interface CommonTableProps {
  item?: any;
  columnsGenerater: ColumnsGeneraterInterface;
}
export const CommonTable: NextPage<CommonTableProps> = ({
  item,
  columnsGenerater,
}) => {
  if (!item) {
    return <></>;
  }
  const columns = columnsGenerater(item);
  return (
    <div className='table-wrapper'>
      <table className='table is-bordered is-striped is-narrow'>
        <tbody>
          {columns.map((column, index) => (
            <tr key={index}>
              <th>{column.label}</th>
              <td>{column.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface CommonListTableProps {
  items?: readonly any[];
  keyGenerater: KeyGeneraterInterface;
  columnsGenerater: ColumnsGeneraterInterface;
  hideColumns?: readonly string[];
}
export const CommonListTable: NextPage<CommonListTableProps> = ({
  items = [],
  keyGenerater,
  columnsGenerater,
  hideColumns = [],
}) => {
  if (items.length === 0) {
    return <></>;
  }
  return (
    <div className='table-wrapper'>
      <table className='table is-bordered is-striped is-narrow'>
        <thead>
          <tr>
            {columnsGenerater(null)
              .filter((x) => !hideColumns.includes(x.id))
              .map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const key = keyGenerater(item);
            const columns = columnsGenerater(item);
            return (
              <tr key={key}>
                {columns
                  .filter((x) => !hideColumns.includes(x.id))
                  .map((column, index) => {
                    let style: any = {};
                    if (column.maxWidth) {
                      style.maxWidth = column.maxWidth;
                      style.whiteSpace = 'normal';
                    }
                    if (column.minWidth) {
                      style.minWidth = column.minWidth;
                    }
                    return (
                      <td key={index} style={style}>
                        {column.pluralContent
                          ? column.pluralContent
                          : column.content}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
