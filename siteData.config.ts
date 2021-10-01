import { MetadataOfPage } from 'src/commons/lib/siteData';

export const parentPages: MetadataOfPage[] = [
  {
    title: '東急編成写真・資料館',
    linkType: 'a',
    path: '/',
  },
];
export const infoPage: MetadataOfPage = {
  title: 'このサイトについて',
  linkType: 'a',
  path: '/2009/02/18/info/',
};
export const globalNavigations: MetadataOfPage[] = [
  {
    linkType: 'a',
    path: '/2008/05/16/photodb/',
    title: '写真データベース',
  },
  {
    linkType: 'a',
    path: '/blog/2007/08/01/photo-topic',
    title: 'フォトニュース・ギャラリー',
  },
  { linkType: 'a', path: '/blog/2008/07/31/data', title: '資料' },
  { linkType: 'a', path: '/2008/07/31/data/', title: '資料2' },
  { linkType: 'a', path: '/2021/09/22/shareki/', title: '車歴データベース' },
  { linkType: 'a', path: '/blog/2010/03/04/000039', title: '書誌' },
];
