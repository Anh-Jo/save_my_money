/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExceptionnalFees = /* GraphQL */ `
  mutation CreateExceptionnalFees(
    $input: CreateExceptionnalFeesInput!
    $condition: ModelExceptionnalFeesConditionInput
  ) {
    createExceptionnalFees(input: $input, condition: $condition) {
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
export const updateExceptionnalFees = /* GraphQL */ `
  mutation UpdateExceptionnalFees(
    $input: UpdateExceptionnalFeesInput!
    $condition: ModelExceptionnalFeesConditionInput
  ) {
    updateExceptionnalFees(input: $input, condition: $condition) {
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
export const deleteExceptionnalFees = /* GraphQL */ `
  mutation DeleteExceptionnalFees(
    $input: DeleteExceptionnalFeesInput!
    $condition: ModelExceptionnalFeesConditionInput
  ) {
    deleteExceptionnalFees(input: $input, condition: $condition) {
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
export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
export const createWage = /* GraphQL */ `
  mutation CreateWage(
    $input: CreateWageInput!
    $condition: ModelWageConditionInput
  ) {
    createWage(input: $input, condition: $condition) {
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
export const updateWage = /* GraphQL */ `
  mutation UpdateWage(
    $input: UpdateWageInput!
    $condition: ModelWageConditionInput
  ) {
    updateWage(input: $input, condition: $condition) {
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
export const deleteWage = /* GraphQL */ `
  mutation DeleteWage(
    $input: DeleteWageInput!
    $condition: ModelWageConditionInput
  ) {
    deleteWage(input: $input, condition: $condition) {
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
export const createPricing = /* GraphQL */ `
  mutation CreatePricing(
    $input: CreatePricingInput!
    $condition: ModelPricingConditionInput
  ) {
    createPricing(input: $input, condition: $condition) {
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
export const updatePricing = /* GraphQL */ `
  mutation UpdatePricing(
    $input: UpdatePricingInput!
    $condition: ModelPricingConditionInput
  ) {
    updatePricing(input: $input, condition: $condition) {
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
export const deletePricing = /* GraphQL */ `
  mutation DeletePricing(
    $input: DeletePricingInput!
    $condition: ModelPricingConditionInput
  ) {
    deletePricing(input: $input, condition: $condition) {
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
export const createSubscriptions = /* GraphQL */ `
  mutation CreateSubscriptions(
    $input: CreateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    createSubscriptions(input: $input, condition: $condition) {
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
export const updateSubscriptions = /* GraphQL */ `
  mutation UpdateSubscriptions(
    $input: UpdateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    updateSubscriptions(input: $input, condition: $condition) {
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
export const deleteSubscriptions = /* GraphQL */ `
  mutation DeleteSubscriptions(
    $input: DeleteSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    deleteSubscriptions(input: $input, condition: $condition) {
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
