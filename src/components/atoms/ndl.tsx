interface Props {
  ndl?: string;
}
const Component: React.FC<Props> = ({ ndl }) => (
  <>
    {ndl && (
      <a href={`https://id.ndl.go.jp/bib/${encodeURIComponent(ndl)}`}>{ndl}</a>
    )}
  </>
);
export default Component;
