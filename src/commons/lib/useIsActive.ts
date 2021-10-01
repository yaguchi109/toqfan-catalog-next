import { useRouter } from 'next/router';

export const useIsActive = (path: string) => {
  const p = useRouter().asPath;
  const i = p.indexOf('#');
  const currentPath = i < 0 ? p : p.substr(0, p.indexOf('#'));

  return path === currentPath || path === `${currentPath}/`;
};
export default useIsActive;
