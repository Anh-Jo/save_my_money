import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Frequencies {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
  WEEKLY = "WEEKLY",
  DAILY = "DAILY"
}



type ExceptionnalFeesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PricingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubscriptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ExceptionnalFees {
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: number | null;
  readonly startAt?: number | null;
  readonly duration?: number | null;
  readonly frequencies?: Frequencies | keyof typeof Frequencies | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ExceptionnalFees, ExceptionnalFeesMetaData>);
  static copyOf(source: ExceptionnalFees, mutator: (draft: MutableModel<ExceptionnalFees, ExceptionnalFeesMetaData>) => MutableModel<ExceptionnalFees, ExceptionnalFeesMetaData> | void): ExceptionnalFees;
}

export declare class Challenge {
  readonly id: string;
  readonly name?: string | null;
  readonly frequencies?: Frequencies | keyof typeof Frequencies | null;
  readonly amount?: string | null;
  readonly startAt?: number | null;
  readonly endAt?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Challenge, ChallengeMetaData>);
  static copyOf(source: Challenge, mutator: (draft: MutableModel<Challenge, ChallengeMetaData>) => MutableModel<Challenge, ChallengeMetaData> | void): Challenge;
}

export declare class Wage {
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: string | null;
  readonly frequencies?: Frequencies | keyof typeof Frequencies | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Wage, WageMetaData>);
  static copyOf(source: Wage, mutator: (draft: MutableModel<Wage, WageMetaData>) => MutableModel<Wage, WageMetaData> | void): Wage;
}

export declare class Pricing {
  readonly id: string;
  readonly amount?: string | null;
  readonly frequencies?: Frequencies | keyof typeof Frequencies | null;
  readonly duration?: number | null;
  readonly subscriptionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pricing, PricingMetaData>);
  static copyOf(source: Pricing, mutator: (draft: MutableModel<Pricing, PricingMetaData>) => MutableModel<Pricing, PricingMetaData> | void): Pricing;
}

export declare class Subscriptions {
  readonly id: string;
  readonly name?: string | null;
  readonly Pricings?: (Pricing | null)[] | null;
  readonly startAt?: number | null;
  readonly referer?: string | null;
  readonly endAt?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Subscriptions, SubscriptionsMetaData>);
  static copyOf(source: Subscriptions, mutator: (draft: MutableModel<Subscriptions, SubscriptionsMetaData>) => MutableModel<Subscriptions, SubscriptionsMetaData> | void): Subscriptions;
}