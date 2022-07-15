/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExceptionnalFees = /* GraphQL */ `
  query GetExceptionnalFees($id: ID!) {
    getExceptionnalFees(id: $id) {
      id
      name
      amount
      startAt
      duration
      frequencies
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listExceptionnalFees = /* GraphQL */ `
  query ListExceptionnalFees(
    $filter: ModelExceptionnalFeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExceptionnalFees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        amount
        startAt
        duration
        frequencies
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExceptionnalFees = /* GraphQL */ `
  query SyncExceptionnalFees(
    $filter: ModelExceptionnalFeesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExceptionnalFees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        amount
        startAt
        duration
        frequencies
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      name
      frequencies
      amount
      startAt
      endAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        frequencies
        amount
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChallenges = /* GraphQL */ `
  query SyncChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallenges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        frequencies
        amount
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getWage = /* GraphQL */ `
  query GetWage($id: ID!) {
    getWage(id: $id) {
      id
      name
      amount
      frequencies
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listWages = /* GraphQL */ `
  query ListWages(
    $filter: ModelWageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        frequencies
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWages = /* GraphQL */ `
  query SyncWages(
    $filter: ModelWageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        amount
        frequencies
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPricing = /* GraphQL */ `
  query GetPricing($id: ID!) {
    getPricing(id: $id) {
      id
      amount
      frequencies
      duration
      subscriptionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPricings = /* GraphQL */ `
  query ListPricings(
    $filter: ModelPricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPricings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        frequencies
        duration
        subscriptionsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPricings = /* GraphQL */ `
  query SyncPricings(
    $filter: ModelPricingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPricings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        amount
        frequencies
        duration
        subscriptionsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSubscriptions = /* GraphQL */ `
  query GetSubscriptions($id: ID!) {
    getSubscriptions(id: $id) {
      id
      name
      Pricings {
        nextToken
        startedAt
      }
      startAt
      referer
      endAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startAt
        referer
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubscriptions = /* GraphQL */ `
  query SyncSubscriptions(
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        startAt
        referer
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
