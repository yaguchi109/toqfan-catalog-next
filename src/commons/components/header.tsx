import React, { useState } from 'react';
import Link from 'next/link';
import useIsActive from 'src/commons/lib/useIsActive';
import siteData, { MetadataOfPage } from 'src/commons/lib/siteData';
import PageLink from 'src/commons/components/pageLink';

interface Props {
  title: string;
  showNavbarBrand: boolean;
  isTopPage: boolean;
}
const Component: React.FC<Props> = ({ title, showNavbarBrand, isTopPage }) => {
  return (
    <header className='hero is-primary'>
      <HeroHead showNavbarBrand={showNavbarBrand} isTopPage={isTopPage} />
      <HeroBody title={title} />
    </header>
  );
};
export default Component;

interface HeroHeadProps {
  showNavbarBrand: boolean;
  isTopPage: boolean;
}
const HeroHead: React.FC<HeroHeadProps> = ({ showNavbarBrand, isTopPage }) => {
  const [isBurgerActive, burgerToggle] = useState(false);
  const parentPagesMeta = siteData.parentPages;
  const metadataOfTopPage = siteData.topPage;
  const brandPage =
    0 === parentPagesMeta.length ? metadataOfTopPage : parentPagesMeta[0];
  if (isTopPage && 0 === parentPagesMeta.length) {
    showNavbarBrand = false;
  }
  const globalNavigations = siteData.globalNavigations;
  return (
    <div className='hero-head'>
      <nav className='navbar'>
        <div className='container'>
          <NavbarBrand
            showNavbarBrand={showNavbarBrand}
            brandPage={brandPage}
            isBurgerActive={isBurgerActive}
            burgerToggle={burgerToggle}
          />
          <div
            id='navbarMenuHero'
            className={['navbar-menu', isBurgerActive ? ' is-active' : ''].join(
              ''
            )}
          >
            <div className='navbar-end'>
              {globalNavigations.map((globalNavigation, index) => (
                <NavbarItem key={index} globalNavigation={globalNavigation} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

interface NavbarBrandProps {
  showNavbarBrand: boolean;
  brandPage: MetadataOfPage;
  isBurgerActive: boolean;
  burgerToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarBrand: React.FC<NavbarBrandProps> = ({
  showNavbarBrand,
  brandPage,
  isBurgerActive,
  burgerToggle,
}) => {
  return (
    <div className='navbar-brand'>
      {showNavbarBrand && (
        <PageLink className='navbar-item' page={brandPage}>
          {brandPage.title}
        </PageLink>
      )}
      <span
        className={[
          'navbar-burger burger',
          isBurgerActive ? 'is-active' : '',
        ].join(' ')}
        role={'button'}
        tabIndex={0}
        data-target={'navbarMenuHero'}
        onClick={() => burgerToggle(!isBurgerActive)}
        onKeyPress={() => burgerToggle(!isBurgerActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  );
};

interface NavbarItemProps {
  globalNavigation: { linkType: string; path: string; title: string };
}
const NavbarItem: React.FC<NavbarItemProps> = ({ globalNavigation }) => {
  const isActive = useIsActive(globalNavigation.path);
  const activeClassName = isActive ? 'is-active' : '';
  return (
    <>
      {globalNavigation.linkType !== 'link' && (
        <a className='navbar-item' href={globalNavigation.path}>
          {globalNavigation.title}
        </a>
      )}
      {globalNavigation.linkType === 'link' && (
        <Link href={globalNavigation.path}>
          <a className={`navbar-item ${activeClassName}`}>
            {globalNavigation.title}
          </a>
        </Link>
      )}
    </>
  );
};

interface HeroBodyProps {
  title: string;
}
const HeroBody: React.FC<HeroBodyProps> = ({ title }) => (
  <div className='hero-body'>
    <style jsx>{`
      :global(#__next) h1 {
        font-feature-settings: 'palt';
      }
    `}</style>
    <div className='container'>
      <h1 className='title'>{title}</h1>
    </div>
  </div>
);
