import Link from 'next/link';
import { MetadataOfPage } from 'src/commons/lib/siteData';
import useIsActive from 'src/commons/lib/useIsActive';

export interface DataOfMenuLabelAndList {
  key: string;
  label?: string;
  menuList: DataOfMenuList;
}
export interface DataOfMenuList {
  pages: readonly MetadataOfPage[];
  activePage?: MetadataOfPage;
  subMenuList?: DataOfMenuList;
}

interface MenuProps {
  data: readonly DataOfMenuLabelAndList[];
}
const Component: React.FC<MenuProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <MenuLabelAndList key={item.key} data={item} />
      ))}
    </>
  );
};
export default Component;

interface MenuLabelAndListProps {
  data: DataOfMenuLabelAndList;
}
const MenuLabelAndList: React.FC<MenuLabelAndListProps> = ({ data }) => {
  return (
    <>
      {data.label && <p className='menu-label'>{data.label}</p>}
      <MenuList data={data.menuList} />
    </>
  );
};

interface MenuListProps {
  data: DataOfMenuList;
}
const MenuList: React.FC<MenuListProps> = ({ data }) => {
  return (
    <ul className='menu-list'>
      {data.pages.map((page) => (
        <MenuItem
          key={page.path}
          page={page}
          activePage={data.activePage}
          subMenuList={data.subMenuList}
        />
      ))}
    </ul>
  );
};

interface MenuItemProps {
  page: MetadataOfPage;
  activePage?: MetadataOfPage;
  subMenuList?: DataOfMenuList;
}
const MenuItem: React.FC<MenuItemProps> = ({
  page,
  activePage,
  subMenuList,
}) => {
  const isActivePage = subMenuList && page.path === activePage?.path;
  return (
    <li>
      <MenuLink page={page} />
      {isActivePage && <MenuList data={subMenuList} />}
    </li>
  );
};

interface MenuLinkProps {
  page: MetadataOfPage;
}
const MenuLink: React.FC<MenuLinkProps> = ({ page }) => {
  const href = page.path;
  const isActive = useIsActive(href);
  const className = isActive ? 'is-active' : '';
  const title = page.menuTitle
    ? page.menuTitle
    : page.contentTitle
    ? page.contentTitle
    : page.title;

  if (page.linkType === 'a') {
    return (
      <a href={href} className={className}>
        {title}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={className}>{title}</a>
    </Link>
  );
};
