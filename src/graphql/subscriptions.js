/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExceptionnalFees = /* GraphQL */ `
  subscription OnCreateExceptionnalFees($owner: String) {
    onCreateExceptionnalFees(owner: $owner) {
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
export const onUpdateExceptionnalFees = /* GraphQL */ `
  subscription OnUpdateExceptionnalFees($owner: String) {
    onUpdateExceptionnalFees(owner: $owner) {
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
export const onDeleteExceptionnalFees = /* GraphQL */ `
  subscription OnDeleteExceptionnalFees($owner: String) {
    onDeleteExceptionnalFees(owner: $owner) {
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
export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge($owner: String) {
    onCreateChallenge(owner: $owner) {
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
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge($owner: String) {
    onUpdateChallenge(owner: $owner) {
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
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge($owner: String) {
    onDeleteChallenge(owner: $owner) {
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
export const onCreateWage = /* GraphQL */ `
  subscription OnCreateWage($owner: String) {
    onCreateWage(owner: $owner) {
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
export const onUpdateWage = /* GraphQL */ `
  subscription OnUpdateWage($owner: String) {
    onUpdateWage(owner: $owner) {
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
export const onDeleteWage = /* GraphQL */ `
  subscription OnDeleteWage($owner: String) {
    onDeleteWage(owner: $owner) {
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
export const onCreatePricing = /* GraphQL */ `
  subscription OnCreatePricing($owner: String) {
    onCreatePricing(owner: $owner) {
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
export const onUpdatePricing = /* GraphQL */ `
  subscription OnUpdatePricing($owner: String) {
    onUpdatePricing(owner: $owner) {
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
export const onDeletePricing = /* GraphQL */ `
  subscription OnDeletePricing($owner: String) {
    onDeletePricing(owner: $owner) {
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
export const onCreateSubscriptions = /* GraphQL */ `
  subscription OnCreateSubscriptions($owner: String) {
    onCreateSubscriptions(owner: $owner) {
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
export const onUpdateSubscriptions = /* GraphQL */ `
  subscription OnUpdateSubscriptions($owner: String) {
    onUpdateSubscriptions(owner: $owner) {
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
export const onDeleteSubscriptions = /* GraphQL */ `
  subscription OnDeleteSubscriptions($owner: String) {
    onDeleteSubscriptions(owner: $owner) {
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
