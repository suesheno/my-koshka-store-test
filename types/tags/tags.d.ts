export interface tagsQueryType {
    tags: {
        data: {
          attributes: STRAPI_TAG;
        }
      }
  }

type STRAPI_TAG = {
    claimed: Maybe<Scalars['Boolean']>;
    active: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['Date']>;
    id: Scalars['ID'];
    pet?: Maybe<STRAPI_PET>;
    tag: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['Date']>;
};