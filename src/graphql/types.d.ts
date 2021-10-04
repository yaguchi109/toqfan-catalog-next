import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
};

export type Article = Node & {
  __typename?: 'Article';
  /** Reads a single `BookResource` that is related to this `Article`. */
  bookResourceById?: Maybe<BookResource>;
  id: Scalars['Int'];
  ndl?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  page: Scalars['Int'];
  pages: Scalars['String'];
  /** Reads a single `SerialNumber` that is related to this `Article`. */
  serialNumberBySerialNumberId?: Maybe<SerialNumber>;
  serialNumberId: Scalars['Int'];
  subjoinder: Scalars['String'];
  title: Scalars['String'];
};

/** A condition to be used against `Article` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ArticleCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ndl` field. */
  ndl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `page` field. */
  page?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pages` field. */
  pages?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `serialNumberId` field. */
  serialNumberId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `subjoinder` field. */
  subjoinder?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Article` */
export type ArticleInput = {
  id: Scalars['Int'];
  ndl?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
  pages?: Maybe<Scalars['String']>;
  serialNumberId: Scalars['Int'];
  subjoinder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Article`. Fields that are set will be updated. */
export type ArticlePatch = {
  id?: Maybe<Scalars['Int']>;
  ndl?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['String']>;
  serialNumberId?: Maybe<Scalars['Int']>;
  subjoinder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Article` values. */
export type ArticlesConnection = {
  __typename?: 'ArticlesConnection';
  /** A list of edges which contains the `Article` and cursor to aid in pagination. */
  edges: Array<ArticlesEdge>;
  /** A list of `Article` objects. */
  nodes: Array<Maybe<Article>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Article` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Article` edge in the connection. */
export type ArticlesEdge = {
  __typename?: 'ArticlesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Article` at the end of the edge. */
  node?: Maybe<Article>;
};

/** Methods to use when ordering `Article`. */
export enum ArticlesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NdlAsc = 'NDL_ASC',
  NdlDesc = 'NDL_DESC',
  PagesAsc = 'PAGES_ASC',
  PagesDesc = 'PAGES_DESC',
  PageAsc = 'PAGE_ASC',
  PageDesc = 'PAGE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SerialNumberIdAsc = 'SERIAL_NUMBER_ID_ASC',
  SerialNumberIdDesc = 'SERIAL_NUMBER_ID_DESC',
  SubjoinderAsc = 'SUBJOINDER_ASC',
  SubjoinderDesc = 'SUBJOINDER_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type Author = Node & {
  __typename?: 'Author';
  /** Reads a single `BookResource` that is related to this `Author`. */
  bookResourceById?: Maybe<BookResource>;
  id: Scalars['Int'];
  name: Scalars['String'];
  nameTranscription: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  order: Scalars['Int'];
  subjoinder: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

/** A condition to be used against `Author` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AuthorCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameTranscription` field. */
  nameTranscription?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `order` field. */
  order?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `subjoinder` field. */
  subjoinder?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Author` */
export type AuthorInput = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameTranscription?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  subjoinder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Author`. Fields that are set will be updated. */
export type AuthorPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nameTranscription?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  subjoinder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Author` values. */
export type AuthorsConnection = {
  __typename?: 'AuthorsConnection';
  /** A list of edges which contains the `Author` and cursor to aid in pagination. */
  edges: Array<AuthorsEdge>;
  /** A list of `Author` objects. */
  nodes: Array<Maybe<Author>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Author` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Author` edge in the connection. */
export type AuthorsEdge = {
  __typename?: 'AuthorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Author` at the end of the edge. */
  node?: Maybe<Author>;
};

/** Methods to use when ordering `Author`. */
export enum AuthorsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameTranscriptionAsc = 'NAME_TRANSCRIPTION_ASC',
  NameTranscriptionDesc = 'NAME_TRANSCRIPTION_DESC',
  Natural = 'NATURAL',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubjoinderAsc = 'SUBJOINDER_ASC',
  SubjoinderDesc = 'SUBJOINDER_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type BookResource = Node & {
  __typename?: 'BookResource';
  /** Reads a single `Article` that is related to this `BookResource`. */
  articleById?: Maybe<Article>;
  /** Reads and enables pagination through a set of `Author`. */
  authorsById: AuthorsConnection;
  /** Reads and enables pagination through a set of `Author`. */
  authorsByIdList: Array<Author>;
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Serial` that is related to this `BookResource`. */
  serialById?: Maybe<Serial>;
  /** Reads a single `SerialNumber` that is related to this `BookResource`. */
  serialNumberById?: Maybe<SerialNumber>;
  /** Reads and enables pagination through a set of `TagMap`. */
  tagMapsByResourceId: TagMapsConnection;
  /** Reads and enables pagination through a set of `TagMap`. */
  tagMapsByResourceIdList: Array<TagMap>;
};


export type BookResourceAuthorsByIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<AuthorCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};


export type BookResourceAuthorsByIdListArgs = {
  condition?: Maybe<AuthorCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};


export type BookResourceTagMapsByResourceIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<TagMapCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};


export type BookResourceTagMapsByResourceIdListArgs = {
  condition?: Maybe<TagMapCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};

/**
 * A condition to be used against `BookResource` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type BookResourceCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `BookResource` */
export type BookResourceInput = {
  id: Scalars['Int'];
};

/** Represents an update to a `BookResource`. Fields that are set will be updated. */
export type BookResourcePatch = {
  id?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `BookResource` values. */
export type BookResourcesConnection = {
  __typename?: 'BookResourcesConnection';
  /** A list of edges which contains the `BookResource` and cursor to aid in pagination. */
  edges: Array<BookResourcesEdge>;
  /** A list of `BookResource` objects. */
  nodes: Array<Maybe<BookResource>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BookResource` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `BookResource` edge in the connection. */
export type BookResourcesEdge = {
  __typename?: 'BookResourcesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `BookResource` at the end of the edge. */
  node?: Maybe<BookResource>;
};

/** Methods to use when ordering `BookResource`. */
export enum BookResourcesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Article` mutation. */
export type CreateArticleInput = {
  /** The `Article` to be created by this mutation. */
  article: ArticleInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The output of our create `Article` mutation. */
export type CreateArticlePayload = {
  __typename?: 'CreateArticlePayload';
  /** The `Article` that was created by this mutation. */
  article?: Maybe<Article>;
  /** An edge for our `Article`. May be used by Relay 1. */
  articleEdge?: Maybe<ArticlesEdge>;
  /** Reads a single `BookResource` that is related to this `Article`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `SerialNumber` that is related to this `Article`. */
  serialNumberBySerialNumberId?: Maybe<SerialNumber>;
};


/** The output of our create `Article` mutation. */
export type CreateArticlePayloadArticleEdgeArgs = {
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};

/** All input for the create `Author` mutation. */
export type CreateAuthorInput = {
  /** The `Author` to be created by this mutation. */
  author: AuthorInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The output of our create `Author` mutation. */
export type CreateAuthorPayload = {
  __typename?: 'CreateAuthorPayload';
  /** The `Author` that was created by this mutation. */
  author?: Maybe<Author>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
  /** Reads a single `BookResource` that is related to this `Author`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Author` mutation. */
export type CreateAuthorPayloadAuthorEdgeArgs = {
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};

/** All input for the create `BookResource` mutation. */
export type CreateBookResourceInput = {
  /** The `BookResource` to be created by this mutation. */
  bookResource: BookResourceInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The output of our create `BookResource` mutation. */
export type CreateBookResourcePayload = {
  __typename?: 'CreateBookResourcePayload';
  /** The `BookResource` that was created by this mutation. */
  bookResource?: Maybe<BookResource>;
  /** An edge for our `BookResource`. May be used by Relay 1. */
  bookResourceEdge?: Maybe<BookResourcesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `BookResource` mutation. */
export type CreateBookResourcePayloadBookResourceEdgeArgs = {
  orderBy?: Maybe<Array<BookResourcesOrderBy>>;
};

/** All input for the create `Serial` mutation. */
export type CreateSerialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Serial` to be created by this mutation. */
  serial: SerialInput;
};

/** All input for the create `SerialNumber` mutation. */
export type CreateSerialNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SerialNumber` to be created by this mutation. */
  serialNumber: SerialNumberInput;
};

/** The output of our create `SerialNumber` mutation. */
export type CreateSerialNumberPayload = {
  __typename?: 'CreateSerialNumberPayload';
  /** Reads a single `BookResource` that is related to this `SerialNumber`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Serial` that is related to this `SerialNumber`. */
  serialBySerialId?: Maybe<Serial>;
  /** The `SerialNumber` that was created by this mutation. */
  serialNumber?: Maybe<SerialNumber>;
  /** An edge for our `SerialNumber`. May be used by Relay 1. */
  serialNumberEdge?: Maybe<SerialNumbersEdge>;
};


/** The output of our create `SerialNumber` mutation. */
export type CreateSerialNumberPayloadSerialNumberEdgeArgs = {
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};

/** The output of our create `Serial` mutation. */
export type CreateSerialPayload = {
  __typename?: 'CreateSerialPayload';
  /** Reads a single `BookResource` that is related to this `Serial`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Serial` that was created by this mutation. */
  serial?: Maybe<Serial>;
  /** An edge for our `Serial`. May be used by Relay 1. */
  serialEdge?: Maybe<SerialsEdge>;
};


/** The output of our create `Serial` mutation. */
export type CreateSerialPayloadSerialEdgeArgs = {
  orderBy?: Maybe<Array<SerialsOrderBy>>;
};

/** All input for the create `Tag` mutation. */
export type CreateTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tag` to be created by this mutation. */
  tag: TagInput;
};

/** All input for the create `TagMap` mutation. */
export type CreateTagMapInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TagMap` to be created by this mutation. */
  tagMap: TagMapInput;
};

/** The output of our create `TagMap` mutation. */
export type CreateTagMapPayload = {
  __typename?: 'CreateTagMapPayload';
  /** Reads a single `BookResource` that is related to this `TagMap`. */
  bookResourceByResourceId?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Tag` that is related to this `TagMap`. */
  tagByTagId?: Maybe<Tag>;
  /** The `TagMap` that was created by this mutation. */
  tagMap?: Maybe<TagMap>;
  /** An edge for our `TagMap`. May be used by Relay 1. */
  tagMapEdge?: Maybe<TagMapsEdge>;
};


/** The output of our create `TagMap` mutation. */
export type CreateTagMapPayloadTagMapEdgeArgs = {
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};

/** The output of our create `Tag` mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Tag` that was created by this mutation. */
  tag?: Maybe<Tag>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our create `Tag` mutation. */
export type CreateTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>;
};

/** All input for the `deleteArticleById` mutation. */
export type DeleteArticleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteArticle` mutation. */
export type DeleteArticleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Article` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Article` mutation. */
export type DeleteArticlePayload = {
  __typename?: 'DeleteArticlePayload';
  /** The `Article` that was deleted by this mutation. */
  article?: Maybe<Article>;
  /** An edge for our `Article`. May be used by Relay 1. */
  articleEdge?: Maybe<ArticlesEdge>;
  /** Reads a single `BookResource` that is related to this `Article`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedArticleId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `SerialNumber` that is related to this `Article`. */
  serialNumberBySerialNumberId?: Maybe<SerialNumber>;
};


/** The output of our delete `Article` mutation. */
export type DeleteArticlePayloadArticleEdgeArgs = {
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};

/** All input for the `deleteAuthorByIdAndOrder` mutation. */
export type DeleteAuthorByIdAndOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  order: Scalars['Int'];
};

/** All input for the `deleteAuthor` mutation. */
export type DeleteAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Author` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Author` mutation. */
export type DeleteAuthorPayload = {
  __typename?: 'DeleteAuthorPayload';
  /** The `Author` that was deleted by this mutation. */
  author?: Maybe<Author>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
  /** Reads a single `BookResource` that is related to this `Author`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAuthorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Author` mutation. */
export type DeleteAuthorPayloadAuthorEdgeArgs = {
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};

/** All input for the `deleteBookResourceById` mutation. */
export type DeleteBookResourceByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteBookResource` mutation. */
export type DeleteBookResourceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `BookResource` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `BookResource` mutation. */
export type DeleteBookResourcePayload = {
  __typename?: 'DeleteBookResourcePayload';
  /** The `BookResource` that was deleted by this mutation. */
  bookResource?: Maybe<BookResource>;
  /** An edge for our `BookResource`. May be used by Relay 1. */
  bookResourceEdge?: Maybe<BookResourcesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedBookResourceId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `BookResource` mutation. */
export type DeleteBookResourcePayloadBookResourceEdgeArgs = {
  orderBy?: Maybe<Array<BookResourcesOrderBy>>;
};

/** All input for the `deleteSerialById` mutation. */
export type DeleteSerialByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteSerial` mutation. */
export type DeleteSerialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Serial` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSerialNumberById` mutation. */
export type DeleteSerialNumberByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteSerialNumber` mutation. */
export type DeleteSerialNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SerialNumber` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `SerialNumber` mutation. */
export type DeleteSerialNumberPayload = {
  __typename?: 'DeleteSerialNumberPayload';
  /** Reads a single `BookResource` that is related to this `SerialNumber`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSerialNumberId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Serial` that is related to this `SerialNumber`. */
  serialBySerialId?: Maybe<Serial>;
  /** The `SerialNumber` that was deleted by this mutation. */
  serialNumber?: Maybe<SerialNumber>;
  /** An edge for our `SerialNumber`. May be used by Relay 1. */
  serialNumberEdge?: Maybe<SerialNumbersEdge>;
};


/** The output of our delete `SerialNumber` mutation. */
export type DeleteSerialNumberPayloadSerialNumberEdgeArgs = {
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};

/** The output of our delete `Serial` mutation. */
export type DeleteSerialPayload = {
  __typename?: 'DeleteSerialPayload';
  /** Reads a single `BookResource` that is related to this `Serial`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSerialId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Serial` that was deleted by this mutation. */
  serial?: Maybe<Serial>;
  /** An edge for our `Serial`. May be used by Relay 1. */
  serialEdge?: Maybe<SerialsEdge>;
};


/** The output of our delete `Serial` mutation. */
export type DeleteSerialPayloadSerialEdgeArgs = {
  orderBy?: Maybe<Array<SerialsOrderBy>>;
};

/** All input for the `deleteTagById` mutation. */
export type DeleteTagByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteTag` mutation. */
export type DeleteTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tag` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTagMapByResourceIdAndTagId` mutation. */
export type DeleteTagMapByResourceIdAndTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  resourceId: Scalars['Int'];
  tagId: Scalars['Int'];
};

/** All input for the `deleteTagMap` mutation. */
export type DeleteTagMapInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TagMap` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `TagMap` mutation. */
export type DeleteTagMapPayload = {
  __typename?: 'DeleteTagMapPayload';
  /** Reads a single `BookResource` that is related to this `TagMap`. */
  bookResourceByResourceId?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTagMapId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Tag` that is related to this `TagMap`. */
  tagByTagId?: Maybe<Tag>;
  /** The `TagMap` that was deleted by this mutation. */
  tagMap?: Maybe<TagMap>;
  /** An edge for our `TagMap`. May be used by Relay 1. */
  tagMapEdge?: Maybe<TagMapsEdge>;
};


/** The output of our delete `TagMap` mutation. */
export type DeleteTagMapPayloadTagMapEdgeArgs = {
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};

/** The output of our delete `Tag` mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTagId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Tag` that was deleted by this mutation. */
  tag?: Maybe<Tag>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our delete `Tag` mutation. */
export type DeleteTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Article`. */
  createArticle?: Maybe<CreateArticlePayload>;
  /** Creates a single `Author`. */
  createAuthor?: Maybe<CreateAuthorPayload>;
  /** Creates a single `BookResource`. */
  createBookResource?: Maybe<CreateBookResourcePayload>;
  /** Creates a single `Serial`. */
  createSerial?: Maybe<CreateSerialPayload>;
  /** Creates a single `SerialNumber`. */
  createSerialNumber?: Maybe<CreateSerialNumberPayload>;
  /** Creates a single `Tag`. */
  createTag?: Maybe<CreateTagPayload>;
  /** Creates a single `TagMap`. */
  createTagMap?: Maybe<CreateTagMapPayload>;
  /** Deletes a single `Article` using its globally unique id. */
  deleteArticle?: Maybe<DeleteArticlePayload>;
  /** Deletes a single `Article` using a unique key. */
  deleteArticleById?: Maybe<DeleteArticlePayload>;
  /** Deletes a single `Author` using its globally unique id. */
  deleteAuthor?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Author` using a unique key. */
  deleteAuthorByIdAndOrder?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `BookResource` using its globally unique id. */
  deleteBookResource?: Maybe<DeleteBookResourcePayload>;
  /** Deletes a single `BookResource` using a unique key. */
  deleteBookResourceById?: Maybe<DeleteBookResourcePayload>;
  /** Deletes a single `Serial` using its globally unique id. */
  deleteSerial?: Maybe<DeleteSerialPayload>;
  /** Deletes a single `Serial` using a unique key. */
  deleteSerialById?: Maybe<DeleteSerialPayload>;
  /** Deletes a single `SerialNumber` using its globally unique id. */
  deleteSerialNumber?: Maybe<DeleteSerialNumberPayload>;
  /** Deletes a single `SerialNumber` using a unique key. */
  deleteSerialNumberById?: Maybe<DeleteSerialNumberPayload>;
  /** Deletes a single `Tag` using its globally unique id. */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Deletes a single `Tag` using a unique key. */
  deleteTagById?: Maybe<DeleteTagPayload>;
  /** Deletes a single `TagMap` using its globally unique id. */
  deleteTagMap?: Maybe<DeleteTagMapPayload>;
  /** Deletes a single `TagMap` using a unique key. */
  deleteTagMapByResourceIdAndTagId?: Maybe<DeleteTagMapPayload>;
  /** Updates a single `Article` using its globally unique id and a patch. */
  updateArticle?: Maybe<UpdateArticlePayload>;
  /** Updates a single `Article` using a unique key and a patch. */
  updateArticleById?: Maybe<UpdateArticlePayload>;
  /** Updates a single `Author` using its globally unique id and a patch. */
  updateAuthor?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Author` using a unique key and a patch. */
  updateAuthorByIdAndOrder?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `BookResource` using its globally unique id and a patch. */
  updateBookResource?: Maybe<UpdateBookResourcePayload>;
  /** Updates a single `BookResource` using a unique key and a patch. */
  updateBookResourceById?: Maybe<UpdateBookResourcePayload>;
  /** Updates a single `Serial` using its globally unique id and a patch. */
  updateSerial?: Maybe<UpdateSerialPayload>;
  /** Updates a single `Serial` using a unique key and a patch. */
  updateSerialById?: Maybe<UpdateSerialPayload>;
  /** Updates a single `SerialNumber` using its globally unique id and a patch. */
  updateSerialNumber?: Maybe<UpdateSerialNumberPayload>;
  /** Updates a single `SerialNumber` using a unique key and a patch. */
  updateSerialNumberById?: Maybe<UpdateSerialNumberPayload>;
  /** Updates a single `Tag` using its globally unique id and a patch. */
  updateTag?: Maybe<UpdateTagPayload>;
  /** Updates a single `Tag` using a unique key and a patch. */
  updateTagById?: Maybe<UpdateTagPayload>;
  /** Updates a single `TagMap` using its globally unique id and a patch. */
  updateTagMap?: Maybe<UpdateTagMapPayload>;
  /** Updates a single `TagMap` using a unique key and a patch. */
  updateTagMapByResourceIdAndTagId?: Maybe<UpdateTagMapPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookResourceArgs = {
  input: CreateBookResourceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSerialArgs = {
  input: CreateSerialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSerialNumberArgs = {
  input: CreateSerialNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTagMapArgs = {
  input: CreateTagMapInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArticleArgs = {
  input: DeleteArticleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArticleByIdArgs = {
  input: DeleteArticleByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorArgs = {
  input: DeleteAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorByIdAndOrderArgs = {
  input: DeleteAuthorByIdAndOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookResourceArgs = {
  input: DeleteBookResourceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookResourceByIdArgs = {
  input: DeleteBookResourceByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSerialArgs = {
  input: DeleteSerialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSerialByIdArgs = {
  input: DeleteSerialByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSerialNumberArgs = {
  input: DeleteSerialNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSerialNumberByIdArgs = {
  input: DeleteSerialNumberByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagByIdArgs = {
  input: DeleteTagByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagMapArgs = {
  input: DeleteTagMapInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagMapByResourceIdAndTagIdArgs = {
  input: DeleteTagMapByResourceIdAndTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArticleArgs = {
  input: UpdateArticleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArticleByIdArgs = {
  input: UpdateArticleByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorArgs = {
  input: UpdateAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorByIdAndOrderArgs = {
  input: UpdateAuthorByIdAndOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookResourceArgs = {
  input: UpdateBookResourceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookResourceByIdArgs = {
  input: UpdateBookResourceByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSerialArgs = {
  input: UpdateSerialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSerialByIdArgs = {
  input: UpdateSerialByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSerialNumberArgs = {
  input: UpdateSerialNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSerialNumberByIdArgs = {
  input: UpdateSerialNumberByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagByIdArgs = {
  input: UpdateTagByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagMapArgs = {
  input: UpdateTagMapInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagMapByResourceIdAndTagIdArgs = {
  input: UpdateTagMapByResourceIdAndTagIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Article`. */
  allArticles?: Maybe<ArticlesConnection>;
  /** Reads a set of `Article`. */
  allArticlesList?: Maybe<Array<Article>>;
  /** Reads and enables pagination through a set of `Author`. */
  allAuthors?: Maybe<AuthorsConnection>;
  /** Reads a set of `Author`. */
  allAuthorsList?: Maybe<Array<Author>>;
  /** Reads and enables pagination through a set of `BookResource`. */
  allBookResources?: Maybe<BookResourcesConnection>;
  /** Reads a set of `BookResource`. */
  allBookResourcesList?: Maybe<Array<BookResource>>;
  /** Reads and enables pagination through a set of `SerialNumber`. */
  allSerialNumbers?: Maybe<SerialNumbersConnection>;
  /** Reads a set of `SerialNumber`. */
  allSerialNumbersList?: Maybe<Array<SerialNumber>>;
  /** Reads and enables pagination through a set of `Serial`. */
  allSerials?: Maybe<SerialsConnection>;
  /** Reads a set of `Serial`. */
  allSerialsList?: Maybe<Array<Serial>>;
  /** Reads and enables pagination through a set of `TagMap`. */
  allTagMaps?: Maybe<TagMapsConnection>;
  /** Reads a set of `TagMap`. */
  allTagMapsList?: Maybe<Array<TagMap>>;
  /** Reads and enables pagination through a set of `Tag`. */
  allTags?: Maybe<TagsConnection>;
  /** Reads a set of `Tag`. */
  allTagsList?: Maybe<Array<Tag>>;
  /** Reads a single `Article` using its globally unique `ID`. */
  article?: Maybe<Article>;
  articleById?: Maybe<Article>;
  /** Reads a single `Author` using its globally unique `ID`. */
  author?: Maybe<Author>;
  authorByIdAndOrder?: Maybe<Author>;
  /** Reads a single `BookResource` using its globally unique `ID`. */
  bookResource?: Maybe<BookResource>;
  bookResourceById?: Maybe<BookResource>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Serial` using its globally unique `ID`. */
  serial?: Maybe<Serial>;
  serialById?: Maybe<Serial>;
  /** Reads a single `SerialNumber` using its globally unique `ID`. */
  serialNumber?: Maybe<SerialNumber>;
  serialNumberById?: Maybe<SerialNumber>;
  /** Reads a single `Tag` using its globally unique `ID`. */
  tag?: Maybe<Tag>;
  tagById?: Maybe<Tag>;
  /** Reads a single `TagMap` using its globally unique `ID`. */
  tagMap?: Maybe<TagMap>;
  tagMapByResourceIdAndTagId?: Maybe<TagMap>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArticlesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<ArticleCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArticlesListArgs = {
  condition?: Maybe<ArticleCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAuthorsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<AuthorCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAuthorsListArgs = {
  condition?: Maybe<AuthorCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBookResourcesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<BookResourceCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BookResourcesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBookResourcesListArgs = {
  condition?: Maybe<BookResourceCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BookResourcesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSerialNumbersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<SerialNumberCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSerialNumbersListArgs = {
  condition?: Maybe<SerialNumberCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSerialsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<SerialCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SerialsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSerialsListArgs = {
  condition?: Maybe<SerialCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SerialsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagMapsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<TagMapCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagMapsListArgs = {
  condition?: Maybe<TagMapCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<TagCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagsListArgs = {
  condition?: Maybe<TagCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryArticleArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArticleByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorByIdAndOrderArgs = {
  id: Scalars['Int'];
  order: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookResourceArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookResourceByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySerialArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySerialByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySerialNumberArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySerialNumberByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagMapArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagMapByResourceIdAndTagIdArgs = {
  resourceId: Scalars['Int'];
  tagId: Scalars['Int'];
};

export type Serial = Node & {
  __typename?: 'Serial';
  /** Reads a single `BookResource` that is related to this `Serial`. */
  bookResourceById?: Maybe<BookResource>;
  id: Scalars['Int'];
  ndl?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `SerialNumber`. */
  serialNumbersBySerialId: SerialNumbersConnection;
  /** Reads and enables pagination through a set of `SerialNumber`. */
  serialNumbersBySerialIdList: Array<SerialNumber>;
  subjoinder: Scalars['String'];
  title: Scalars['String'];
};


export type SerialSerialNumbersBySerialIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<SerialNumberCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};


export type SerialSerialNumbersBySerialIdListArgs = {
  condition?: Maybe<SerialNumberCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};

/** A condition to be used against `Serial` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SerialCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ndl` field. */
  ndl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `subjoinder` field. */
  subjoinder?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Serial` */
export type SerialInput = {
  id: Scalars['Int'];
  ndl?: Maybe<Scalars['String']>;
  subjoinder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SerialNumber = Node & {
  __typename?: 'SerialNumber';
  /** Reads and enables pagination through a set of `Article`. */
  articlesBySerialNumberId: ArticlesConnection;
  /** Reads and enables pagination through a set of `Article`. */
  articlesBySerialNumberIdList: Array<Article>;
  /** Reads a single `BookResource` that is related to this `SerialNumber`. */
  bookResourceById?: Maybe<BookResource>;
  date: Scalars['String'];
  id: Scalars['Int'];
  issued: Scalars['String'];
  ndl?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  number?: Maybe<Scalars['Int']>;
  /** Reads a single `Serial` that is related to this `SerialNumber`. */
  serialBySerialId?: Maybe<Serial>;
  serialId: Scalars['Int'];
  serialNumber?: Maybe<Scalars['Int']>;
  specialTopic: Scalars['String'];
  subjoinder: Scalars['String'];
  vol?: Maybe<Scalars['Int']>;
};


export type SerialNumberArticlesBySerialNumberIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<ArticleCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};


export type SerialNumberArticlesBySerialNumberIdListArgs = {
  condition?: Maybe<ArticleCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};

/**
 * A condition to be used against `SerialNumber` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SerialNumberCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `issued` field. */
  issued?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `ndl` field. */
  ndl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `number` field. */
  number?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `serialId` field. */
  serialId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `serialNumber` field. */
  serialNumber?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `specialTopic` field. */
  specialTopic?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `subjoinder` field. */
  subjoinder?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `vol` field. */
  vol?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `SerialNumber` */
export type SerialNumberInput = {
  date?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  issued?: Maybe<Scalars['String']>;
  ndl?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  serialId: Scalars['Int'];
  serialNumber?: Maybe<Scalars['Int']>;
  specialTopic?: Maybe<Scalars['String']>;
  subjoinder?: Maybe<Scalars['String']>;
  vol?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `SerialNumber`. Fields that are set will be updated. */
export type SerialNumberPatch = {
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  issued?: Maybe<Scalars['String']>;
  ndl?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  serialId?: Maybe<Scalars['Int']>;
  serialNumber?: Maybe<Scalars['Int']>;
  specialTopic?: Maybe<Scalars['String']>;
  subjoinder?: Maybe<Scalars['String']>;
  vol?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `SerialNumber` values. */
export type SerialNumbersConnection = {
  __typename?: 'SerialNumbersConnection';
  /** A list of edges which contains the `SerialNumber` and cursor to aid in pagination. */
  edges: Array<SerialNumbersEdge>;
  /** A list of `SerialNumber` objects. */
  nodes: Array<Maybe<SerialNumber>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SerialNumber` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SerialNumber` edge in the connection. */
export type SerialNumbersEdge = {
  __typename?: 'SerialNumbersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SerialNumber` at the end of the edge. */
  node?: Maybe<SerialNumber>;
};

/** Methods to use when ordering `SerialNumber`. */
export enum SerialNumbersOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IssuedAsc = 'ISSUED_ASC',
  IssuedDesc = 'ISSUED_DESC',
  Natural = 'NATURAL',
  NdlAsc = 'NDL_ASC',
  NdlDesc = 'NDL_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SerialIdAsc = 'SERIAL_ID_ASC',
  SerialIdDesc = 'SERIAL_ID_DESC',
  SerialNumberAsc = 'SERIAL_NUMBER_ASC',
  SerialNumberDesc = 'SERIAL_NUMBER_DESC',
  SpecialTopicAsc = 'SPECIAL_TOPIC_ASC',
  SpecialTopicDesc = 'SPECIAL_TOPIC_DESC',
  SubjoinderAsc = 'SUBJOINDER_ASC',
  SubjoinderDesc = 'SUBJOINDER_DESC',
  VolAsc = 'VOL_ASC',
  VolDesc = 'VOL_DESC'
}

/** Represents an update to a `Serial`. Fields that are set will be updated. */
export type SerialPatch = {
  id?: Maybe<Scalars['Int']>;
  ndl?: Maybe<Scalars['String']>;
  subjoinder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Serial` values. */
export type SerialsConnection = {
  __typename?: 'SerialsConnection';
  /** A list of edges which contains the `Serial` and cursor to aid in pagination. */
  edges: Array<SerialsEdge>;
  /** A list of `Serial` objects. */
  nodes: Array<Maybe<Serial>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Serial` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Serial` edge in the connection. */
export type SerialsEdge = {
  __typename?: 'SerialsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Serial` at the end of the edge. */
  node?: Maybe<Serial>;
};

/** Methods to use when ordering `Serial`. */
export enum SerialsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NdlAsc = 'NDL_ASC',
  NdlDesc = 'NDL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubjoinderAsc = 'SUBJOINDER_ASC',
  SubjoinderDesc = 'SUBJOINDER_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `TagMap`. */
  tagMapsByTagId: TagMapsConnection;
  /** Reads and enables pagination through a set of `TagMap`. */
  tagMapsByTagIdList: Array<TagMap>;
  title: Scalars['String'];
};


export type TagTagMapsByTagIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<TagMapCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};


export type TagTagMapsByTagIdListArgs = {
  condition?: Maybe<TagMapCondition>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};

/** A condition to be used against `Tag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Tag` */
export type TagInput = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type TagMap = Node & {
  __typename?: 'TagMap';
  /** Reads a single `BookResource` that is related to this `TagMap`. */
  bookResourceByResourceId?: Maybe<BookResource>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  resourceId: Scalars['Int'];
  /** Reads a single `Tag` that is related to this `TagMap`. */
  tagByTagId?: Maybe<Tag>;
  tagId: Scalars['Int'];
};

/** A condition to be used against `TagMap` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagMapCondition = {
  /** Checks for equality with the object’s `resourceId` field. */
  resourceId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `TagMap` */
export type TagMapInput = {
  resourceId: Scalars['Int'];
  tagId: Scalars['Int'];
};

/** Represents an update to a `TagMap`. Fields that are set will be updated. */
export type TagMapPatch = {
  resourceId?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `TagMap` values. */
export type TagMapsConnection = {
  __typename?: 'TagMapsConnection';
  /** A list of edges which contains the `TagMap` and cursor to aid in pagination. */
  edges: Array<TagMapsEdge>;
  /** A list of `TagMap` objects. */
  nodes: Array<Maybe<TagMap>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TagMap` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TagMap` edge in the connection. */
export type TagMapsEdge = {
  __typename?: 'TagMapsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TagMap` at the end of the edge. */
  node?: Maybe<TagMap>;
};

/** Methods to use when ordering `TagMap`. */
export enum TagMapsOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ResourceIdAsc = 'RESOURCE_ID_ASC',
  ResourceIdDesc = 'RESOURCE_ID_DESC',
  TagIdAsc = 'TAG_ID_ASC',
  TagIdDesc = 'TAG_ID_DESC'
}

/** Represents an update to a `Tag`. Fields that are set will be updated. */
export type TagPatch = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Tag` values. */
export type TagsConnection = {
  __typename?: 'TagsConnection';
  /** A list of edges which contains the `Tag` and cursor to aid in pagination. */
  edges: Array<TagsEdge>;
  /** A list of `Tag` objects. */
  nodes: Array<Maybe<Tag>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Tag` edge in the connection. */
export type TagsEdge = {
  __typename?: 'TagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tag` at the end of the edge. */
  node?: Maybe<Tag>;
};

/** Methods to use when ordering `Tag`. */
export enum TagsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** All input for the `updateArticleById` mutation. */
export type UpdateArticleByIdInput = {
  /** An object where the defined keys will be set on the `Article` being updated. */
  articlePatch: ArticlePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateArticle` mutation. */
export type UpdateArticleInput = {
  /** An object where the defined keys will be set on the `Article` being updated. */
  articlePatch: ArticlePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Article` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Article` mutation. */
export type UpdateArticlePayload = {
  __typename?: 'UpdateArticlePayload';
  /** The `Article` that was updated by this mutation. */
  article?: Maybe<Article>;
  /** An edge for our `Article`. May be used by Relay 1. */
  articleEdge?: Maybe<ArticlesEdge>;
  /** Reads a single `BookResource` that is related to this `Article`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `SerialNumber` that is related to this `Article`. */
  serialNumberBySerialNumberId?: Maybe<SerialNumber>;
};


/** The output of our update `Article` mutation. */
export type UpdateArticlePayloadArticleEdgeArgs = {
  orderBy?: Maybe<Array<ArticlesOrderBy>>;
};

/** All input for the `updateAuthorByIdAndOrder` mutation. */
export type UpdateAuthorByIdAndOrderInput = {
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  order: Scalars['Int'];
};

/** All input for the `updateAuthor` mutation. */
export type UpdateAuthorInput = {
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Author` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Author` mutation. */
export type UpdateAuthorPayload = {
  __typename?: 'UpdateAuthorPayload';
  /** The `Author` that was updated by this mutation. */
  author?: Maybe<Author>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
  /** Reads a single `BookResource` that is related to this `Author`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Author` mutation. */
export type UpdateAuthorPayloadAuthorEdgeArgs = {
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};

/** All input for the `updateBookResourceById` mutation. */
export type UpdateBookResourceByIdInput = {
  /** An object where the defined keys will be set on the `BookResource` being updated. */
  bookResourcePatch: BookResourcePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateBookResource` mutation. */
export type UpdateBookResourceInput = {
  /** An object where the defined keys will be set on the `BookResource` being updated. */
  bookResourcePatch: BookResourcePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `BookResource` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `BookResource` mutation. */
export type UpdateBookResourcePayload = {
  __typename?: 'UpdateBookResourcePayload';
  /** The `BookResource` that was updated by this mutation. */
  bookResource?: Maybe<BookResource>;
  /** An edge for our `BookResource`. May be used by Relay 1. */
  bookResourceEdge?: Maybe<BookResourcesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `BookResource` mutation. */
export type UpdateBookResourcePayloadBookResourceEdgeArgs = {
  orderBy?: Maybe<Array<BookResourcesOrderBy>>;
};

/** All input for the `updateSerialById` mutation. */
export type UpdateSerialByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Serial` being updated. */
  serialPatch: SerialPatch;
};

/** All input for the `updateSerial` mutation. */
export type UpdateSerialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Serial` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Serial` being updated. */
  serialPatch: SerialPatch;
};

/** All input for the `updateSerialNumberById` mutation. */
export type UpdateSerialNumberByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `SerialNumber` being updated. */
  serialNumberPatch: SerialNumberPatch;
};

/** All input for the `updateSerialNumber` mutation. */
export type UpdateSerialNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SerialNumber` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SerialNumber` being updated. */
  serialNumberPatch: SerialNumberPatch;
};

/** The output of our update `SerialNumber` mutation. */
export type UpdateSerialNumberPayload = {
  __typename?: 'UpdateSerialNumberPayload';
  /** Reads a single `BookResource` that is related to this `SerialNumber`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Serial` that is related to this `SerialNumber`. */
  serialBySerialId?: Maybe<Serial>;
  /** The `SerialNumber` that was updated by this mutation. */
  serialNumber?: Maybe<SerialNumber>;
  /** An edge for our `SerialNumber`. May be used by Relay 1. */
  serialNumberEdge?: Maybe<SerialNumbersEdge>;
};


/** The output of our update `SerialNumber` mutation. */
export type UpdateSerialNumberPayloadSerialNumberEdgeArgs = {
  orderBy?: Maybe<Array<SerialNumbersOrderBy>>;
};

/** The output of our update `Serial` mutation. */
export type UpdateSerialPayload = {
  __typename?: 'UpdateSerialPayload';
  /** Reads a single `BookResource` that is related to this `Serial`. */
  bookResourceById?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Serial` that was updated by this mutation. */
  serial?: Maybe<Serial>;
  /** An edge for our `Serial`. May be used by Relay 1. */
  serialEdge?: Maybe<SerialsEdge>;
};


/** The output of our update `Serial` mutation. */
export type UpdateSerialPayloadSerialEdgeArgs = {
  orderBy?: Maybe<Array<SerialsOrderBy>>;
};

/** All input for the `updateTagById` mutation. */
export type UpdateTagByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
};

/** All input for the `updateTag` mutation. */
export type UpdateTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tag` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
};

/** All input for the `updateTagMapByResourceIdAndTagId` mutation. */
export type UpdateTagMapByResourceIdAndTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  resourceId: Scalars['Int'];
  tagId: Scalars['Int'];
  /** An object where the defined keys will be set on the `TagMap` being updated. */
  tagMapPatch: TagMapPatch;
};

/** All input for the `updateTagMap` mutation. */
export type UpdateTagMapInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TagMap` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TagMap` being updated. */
  tagMapPatch: TagMapPatch;
};

/** The output of our update `TagMap` mutation. */
export type UpdateTagMapPayload = {
  __typename?: 'UpdateTagMapPayload';
  /** Reads a single `BookResource` that is related to this `TagMap`. */
  bookResourceByResourceId?: Maybe<BookResource>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Tag` that is related to this `TagMap`. */
  tagByTagId?: Maybe<Tag>;
  /** The `TagMap` that was updated by this mutation. */
  tagMap?: Maybe<TagMap>;
  /** An edge for our `TagMap`. May be used by Relay 1. */
  tagMapEdge?: Maybe<TagMapsEdge>;
};


/** The output of our update `TagMap` mutation. */
export type UpdateTagMapPayloadTagMapEdgeArgs = {
  orderBy?: Maybe<Array<TagMapsOrderBy>>;
};

/** The output of our update `Tag` mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Tag` that was updated by this mutation. */
  tag?: Maybe<Tag>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our update `Tag` mutation. */
export type UpdateTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>;
};

export type AuthorsFragment = { __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string };

export type ArticleFragment = { __typename?: 'Article', id: number, pages: string, title: string, ndl?: string | null | undefined, subjoinder: string, serialNumber?: { __typename?: 'SerialNumber', vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, id: number, serial?: { __typename?: 'Serial', id: number, title: string } | null | undefined } | null | undefined, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }>, tagMaps: Array<{ __typename?: 'TagMap', tag?: { __typename?: 'Tag', id: number, title: string } | null | undefined }> } | null | undefined };

export type SerialFragment = { __typename?: 'Serial', title: string, ndl?: string | null | undefined, subjoinder: string, id: number, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }> } | null | undefined, serialNumbersBySerialId: { __typename?: 'SerialNumbersConnection', totalCount: number } };

export type SerialNumberFragment = { __typename?: 'SerialNumber', id: number, issued: string, specialTopic: string, ndl?: string | null | undefined, subjoinder: string, vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }> } | null | undefined, articlesBySerialNumberId: { __typename?: 'ArticlesConnection', totalCount: number }, serial?: { __typename?: 'Serial', title: string, id: number } | null | undefined };

export type TagFragment = { __typename?: 'Tag', title: string, id: number, tagMapsByTagId: { __typename?: 'TagMapsConnection', totalCount: number } };

export type MetadataOfSerialPageFragment = { __typename?: 'Serial', id: number, title: string };

export type MetadataOfTagPageFragment = { __typename?: 'Tag', id: number, title: string };

export type MetadataOfArticlePageFragment = { __typename?: 'Article', id: number, title: string };

export type MetadataOfSerialNumberPageFragment = { __typename?: 'SerialNumber', id: number, vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, serial?: { __typename?: 'Serial', id: number, title: string } | null | undefined };

export type SerialNumberNameFragment = { __typename?: 'SerialNumber', vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { __typename?: 'Query', serials?: Array<{ __typename?: 'Serial', title: string, ndl?: string | null | undefined, subjoinder: string, id: number, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }> } | null | undefined, serialNumbersBySerialId: { __typename?: 'SerialNumbersConnection', totalCount: number } }> | null | undefined, tags?: Array<{ __typename?: 'Tag', title: string, id: number, tagMapsByTagId: { __typename?: 'TagMapsConnection', totalCount: number } }> | null | undefined };

export type SerialPageQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SerialPageQuery = { __typename?: 'Query', serial?: { __typename?: 'Serial', title: string, ndl?: string | null | undefined, subjoinder: string, id: number, serialNumbers: Array<{ __typename?: 'SerialNumber', id: number, issued: string, specialTopic: string, ndl?: string | null | undefined, subjoinder: string, vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }> } | null | undefined, articlesBySerialNumberId: { __typename?: 'ArticlesConnection', totalCount: number }, serial?: { __typename?: 'Serial', title: string, id: number } | null | undefined }>, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }> } | null | undefined, serialNumbersBySerialId: { __typename?: 'SerialNumbersConnection', totalCount: number } } | null | undefined };

export type SerialPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type SerialPagePathsQuery = { __typename?: 'Query', items?: Array<{ __typename?: 'Serial', id: number, serialNumbersBySerialId: { __typename?: 'SerialNumbersConnection', totalCount: number } }> | null | undefined };

export type SerialNumberPageQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SerialNumberPageQuery = { __typename?: 'Query', serialNumber?: { __typename?: 'SerialNumber', id: number, issued: string, specialTopic: string, ndl?: string | null | undefined, subjoinder: string, vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, serial?: { __typename?: 'Serial', title: string, id: number } | null | undefined, articles: Array<{ __typename?: 'Article', id: number, pages: string, title: string, ndl?: string | null | undefined, subjoinder: string, serialNumber?: { __typename?: 'SerialNumber', vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, id: number, serial?: { __typename?: 'Serial', id: number, title: string } | null | undefined } | null | undefined, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }>, tagMaps: Array<{ __typename?: 'TagMap', tag?: { __typename?: 'Tag', id: number, title: string } | null | undefined }> } | null | undefined }>, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }> } | null | undefined, articlesBySerialNumberId: { __typename?: 'ArticlesConnection', totalCount: number } } | null | undefined };

export type SerialNumberPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type SerialNumberPagePathsQuery = { __typename?: 'Query', items?: Array<{ __typename?: 'SerialNumber', id: number, articlesBySerialNumberId: { __typename?: 'ArticlesConnection', totalCount: number } }> | null | undefined };

export type TagPageQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TagPageQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', id: number, title: string, tagMaps: Array<{ __typename?: 'TagMap', bookResource?: { __typename?: 'BookResource', article?: { __typename?: 'Article', id: number, pages: string, title: string, ndl?: string | null | undefined, subjoinder: string, serialNumber?: { __typename?: 'SerialNumber', issued: string, vol?: number | null | undefined, number?: number | null | undefined, serialNumber?: number | null | undefined, date: string, id: number, serial?: { __typename?: 'Serial', id: number, title: string } | null | undefined } | null | undefined, bookResource?: { __typename?: 'BookResource', authors: Array<{ __typename?: 'Author', order: number, name: string, nameTranscription: string, type: string, title: string, subjoinder: string }>, tagMaps: Array<{ __typename?: 'TagMap', tag?: { __typename?: 'Tag', id: number, title: string } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type TagPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagPagePathsQuery = { __typename?: 'Query', items?: Array<{ __typename?: 'Tag', id: number, tagMapsByTagId: { __typename?: 'TagMapsConnection', totalCount: number } }> | null | undefined };

export const SerialNumberNameFragmentDoc = gql`
    fragment SerialNumberName on SerialNumber {
  vol
  number
  serialNumber
  date
}
    `;
export const MetadataOfSerialPageFragmentDoc = gql`
    fragment MetadataOfSerialPage on Serial {
  id
  title
}
    `;
export const MetadataOfSerialNumberPageFragmentDoc = gql`
    fragment MetadataOfSerialNumberPage on SerialNumber {
  id
  ...SerialNumberName
  serial: serialBySerialId {
    ...MetadataOfSerialPage
  }
}
    ${SerialNumberNameFragmentDoc}
${MetadataOfSerialPageFragmentDoc}`;
export const AuthorsFragmentDoc = gql`
    fragment Authors on Author {
  order
  name
  nameTranscription
  type
  title
  subjoinder
}
    `;
export const MetadataOfTagPageFragmentDoc = gql`
    fragment MetadataOfTagPage on Tag {
  id
  title
}
    `;
export const ArticleFragmentDoc = gql`
    fragment Article on Article {
  id
  serialNumber: serialNumberBySerialNumberId {
    ...SerialNumberName
    ...MetadataOfSerialNumberPage
    serial: serialBySerialId {
      ...MetadataOfSerialPage
    }
  }
  pages
  title
  bookResource: bookResourceById {
    authors: authorsByIdList(orderBy: ORDER_ASC) {
      ...Authors
    }
    tagMaps: tagMapsByResourceIdList {
      tag: tagByTagId {
        ...MetadataOfTagPage
        id
        title
      }
    }
  }
  ndl
  subjoinder
}
    ${SerialNumberNameFragmentDoc}
${MetadataOfSerialNumberPageFragmentDoc}
${MetadataOfSerialPageFragmentDoc}
${AuthorsFragmentDoc}
${MetadataOfTagPageFragmentDoc}`;
export const SerialFragmentDoc = gql`
    fragment Serial on Serial {
  ...MetadataOfSerialPage
  title
  ndl
  subjoinder
  bookResource: bookResourceById {
    authors: authorsByIdList(orderBy: ORDER_ASC) {
      ...Authors
    }
  }
  serialNumbersBySerialId {
    totalCount
  }
}
    ${MetadataOfSerialPageFragmentDoc}
${AuthorsFragmentDoc}`;
export const SerialNumberFragmentDoc = gql`
    fragment SerialNumber on SerialNumber {
  id
  issued
  specialTopic
  ndl
  subjoinder
  bookResource: bookResourceById {
    authors: authorsByIdList(orderBy: ORDER_ASC) {
      ...Authors
    }
  }
  ...SerialNumberName
  ...MetadataOfSerialNumberPage
  articlesBySerialNumberId {
    totalCount
  }
  serial: serialBySerialId {
    title
    ...MetadataOfSerialPage
  }
}
    ${AuthorsFragmentDoc}
${SerialNumberNameFragmentDoc}
${MetadataOfSerialNumberPageFragmentDoc}
${MetadataOfSerialPageFragmentDoc}`;
export const TagFragmentDoc = gql`
    fragment Tag on Tag {
  ...MetadataOfTagPage
  title
  tagMapsByTagId {
    totalCount
  }
}
    ${MetadataOfTagPageFragmentDoc}`;
export const MetadataOfArticlePageFragmentDoc = gql`
    fragment MetadataOfArticlePage on Article {
  id
  title
}
    `;
export const IndexPageDocument = gql`
    query IndexPage {
  serials: allSerialsList(orderBy: TITLE_ASC) {
    ...Serial
  }
  tags: allTagsList(orderBy: TITLE_ASC) {
    ...Tag
  }
}
    ${SerialFragmentDoc}
${TagFragmentDoc}`;
export const SerialPageDocument = gql`
    query SerialPage($id: Int!) {
  serial: serialById(id: $id) {
    ...Serial
    serialNumbers: serialNumbersBySerialIdList(orderBy: ISSUED_ASC) {
      ...SerialNumber
    }
  }
}
    ${SerialFragmentDoc}
${SerialNumberFragmentDoc}`;
export const SerialPagePathsDocument = gql`
    query SerialPagePaths {
  items: allSerialsList {
    id
    serialNumbersBySerialId {
      totalCount
    }
  }
}
    `;
export const SerialNumberPageDocument = gql`
    query SerialNumberPage($id: Int!) {
  serialNumber: serialNumberById(id: $id) {
    ...MetadataOfSerialNumberPage
    serial: serialBySerialId {
      ...MetadataOfSerialPage
    }
    ...SerialNumber
    articles: articlesBySerialNumberIdList(orderBy: PAGE_ASC) {
      ...Article
    }
  }
}
    ${MetadataOfSerialNumberPageFragmentDoc}
${MetadataOfSerialPageFragmentDoc}
${SerialNumberFragmentDoc}
${ArticleFragmentDoc}`;
export const SerialNumberPagePathsDocument = gql`
    query SerialNumberPagePaths {
  items: allSerialNumbersList {
    id
    articlesBySerialNumberId {
      totalCount
    }
  }
}
    `;
export const TagPageDocument = gql`
    query TagPage($id: Int!) {
  tag: tagById(id: $id) {
    ...MetadataOfTagPage
    tagMaps: tagMapsByTagIdList {
      bookResource: bookResourceByResourceId {
        article: articleById {
          ...Article
          serialNumber: serialNumberBySerialNumberId {
            issued
          }
        }
      }
    }
  }
}
    ${MetadataOfTagPageFragmentDoc}
${ArticleFragmentDoc}`;
export const TagPagePathsDocument = gql`
    query TagPagePaths {
  items: allTagsList {
    id
    tagMapsByTagId {
      totalCount
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    IndexPage(variables?: IndexPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IndexPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IndexPageQuery>(IndexPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'IndexPage');
    },
    SerialPage(variables: SerialPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SerialPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SerialPageQuery>(SerialPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SerialPage');
    },
    SerialPagePaths(variables?: SerialPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SerialPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SerialPagePathsQuery>(SerialPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SerialPagePaths');
    },
    SerialNumberPage(variables: SerialNumberPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SerialNumberPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SerialNumberPageQuery>(SerialNumberPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SerialNumberPage');
    },
    SerialNumberPagePaths(variables?: SerialNumberPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SerialNumberPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SerialNumberPagePathsQuery>(SerialNumberPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SerialNumberPagePaths');
    },
    TagPage(variables: TagPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagPageQuery>(TagPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagPage');
    },
    TagPagePaths(variables?: TagPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagPagePathsQuery>(TagPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagPagePaths');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;