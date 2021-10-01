import type { NextPage } from 'next';

interface Props {
  ndl?: string;
}
const Component: NextPage<Props> = ({ ndl }) => (
  <>
    {ndl && (
      <a href={`https://id.ndl.go.jp/bib/${encodeURIComponent(ndl)}`}>{ndl}</a>
    )}
  </>
);
export default Component;
