export const Component: React.FC = ({ children }) => {
  return (
    <div className='tabs is-boxed'>
      <ul>{children}</ul>
    </div>
  );
};
export default Component;
