import { AuthorsFragment } from 'src/graphql/types.d';

interface Props {
  authors?: readonly AuthorsFragment[];
}
const Component: React.FC<Props> = ({ authors = [] }) => (
  <>
    {authors &&
      authors.map((author, index) => (
        <span className='author' key={author.order}>
          {0 < index && '、'}
          {0 < author.nameTranscription.length ? (
            <span title={author.nameTranscription}>{author.name}</span>
          ) : (
            author.name
          )}
          {author.type}
        </span>
      ))}
  </>
);
export default Component;
