import { NextPage } from 'next';

export const Component: NextPage = ({ children }) => {
  return (
    <div className='tabs is-boxed'>
      <ul>{children}</ul>
    </div>
  );
};
export default Component;
