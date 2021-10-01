import { parentPages, infoPage, globalNavigations } from 'siteData.config';

export interface MetadataOfPage {
  isRedirect?: boolean;

  linkType: string;
  path: string;

  menuTitle?: string;
  contentTitle?: string;
  pageTypeTitle?: string;
  title: string;
}

export interface MetadataOfCanRedirectPage extends MetadataOfPage {
  pageTypeTitle: string;
  isRedirect: boolean;
}

const topPage: MetadataOfPage = {
  title: process.env.NEXT_PUBLIC_TOPPAGE_TITLE || '',
  linkType: 'link',
  path: '/',
};

const author = {
  label: process.env.NEXT_PUBLIC_AUTHOR_LABEL || '',
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME || '',
  mailAddress: process.env.NEXT_PUBLIC_AUTHOR_MAILADDRESS || '',
};

const timeZoneHour =
  1000 * 60 * 60 * Number(process.env.NEXT_PUBLIC_TIMEZONE_HOUR);
const timeZoneMinute =
  1000 * 60 * Number(process.env.NEXT_PUBLIC_TIMEZONE_MINUTE);
const getDate = () => {
  const now = new Date();
  now.setTime(now.getTime() + timeZoneHour + timeZoneMinute);
  return now.toISOString().substr(0, 10);
};

const lastModified = {
  label: process.env.NEXT_PUBLIC_LAST_MODIFIED_LABEL || '',
  date: getDate(),
};

const metadataOfEmptyPage: MetadataOfCanRedirectPage = {
  isRedirect: false,
  linkType: '',
  path: '',
  pageTypeTitle: '',
  title: '',
};

const data = {
  infoPage: infoPage,
  parentPages: parentPages,
  siteUri: process.env.NEXT_PUBLIC_SITE_URI || '',
  globalNavigations: globalNavigations,
  topPage: topPage,
  author: author,
  lastModified: lastModified,
  notFoundPageTitle: process.env.NEXT_PUBLIC_NOTFOUND_PAGE_TITLE || '',
  languageCode: process.env.NEXT_PUBLIC_LANGUAGE_CODE || '',
  pathEndSlash: '/',
  metadataOfEmptyPage: metadataOfEmptyPage,
};
export default data;
