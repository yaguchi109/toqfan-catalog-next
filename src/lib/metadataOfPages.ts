import { gql } from 'graphql-request';
import siteData, { MetadataOfPage } from 'src/commons/lib/siteData';
import { getSerialNumberName } from './serialNumberName';

const pathEndSlash = siteData.pathEndSlash;
const metadataOfEmptyPage = siteData.metadataOfEmptyPage;

export const getMetadataOfSerialPage = (
  serial?: MetadataOfSerialPageFragment
): MetadataOfPage => {
  if (!serial) {
    return metadataOfEmptyPage;
  }
  const page: MetadataOfPage = {
    title: serial.title,
    linkType: 'link',
    path: `/serial/${encodeURIComponent(serial.id)}${pathEndSlash}`,
  };
  return page;
};

import { MetadataOfSerialPageFragment } from 'src/graphql/types.d';
export const metadataOfSerialPageFragment = gql`
  fragment MetadataOfSerialPage on Serial {
    id
    title
  }
`;

export const getMetadataOfTagPage = (
  tag?: MetadataOfTagPageFragment
): MetadataOfPage => {
  if (!tag) {
    return metadataOfEmptyPage;
  }
  const page: MetadataOfPage = {
    title: `タグ「${tag.title}」を含む書誌`,
    linkType: 'link',
    path: `/tag/${encodeURIComponent(tag.id)}${pathEndSlash}`,
  };
  return page;
};

import { MetadataOfTagPageFragment } from 'src/graphql/types.d';
export const metadataOfTagPageFragment = gql`
  fragment MetadataOfTagPage on Tag {
    id
    title
  }
`;

export const getMetadataOfArticlePage = (
  article?: MetadataOfArticlePageFragment
): MetadataOfPage => {
  if (!article) {
    return metadataOfEmptyPage;
  }
  const page: MetadataOfPage = {
    title: article.title,
    linkType: 'link',
    path: `/article/${encodeURIComponent(article.id)}${pathEndSlash}`,
  };
  return page;
};

import { MetadataOfArticlePageFragment } from 'src/graphql/types.d';
export const metadataOfArticlePageFragment = gql`
  fragment MetadataOfArticlePage on Article {
    id
    title
  }
`;

export const getMetadataOfSerialNumberPage = (
  serialNumber?: MetadataOfSerialNumberPageFragment
): MetadataOfPage => {
  if (!serialNumber) {
    return metadataOfEmptyPage;
  }
  const page: MetadataOfPage = {
    title: `${
      getMetadataOfSerialPage(serialNumber.serial || undefined).title
    } ${getSerialNumberName(serialNumber)}`,
    linkType: 'link',
    path: `/serialnumber/${encodeURIComponent(serialNumber.id)}${pathEndSlash}`,
  };
  return page;
};

import { MetadataOfSerialNumberPageFragment } from 'src/graphql/types.d';
export const metadataOfSerialNumberPageFragment = gql`
  fragment MetadataOfSerialNumberPage on SerialNumber {
    id
    ...SerialNumberName
    serial: serialBySerialId {
      ...MetadataOfSerialPage
    }
  }
  ${metadataOfSerialPageFragment}
`;
