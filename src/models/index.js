// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Frequencies = {
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY",
  "WEEKLY": "WEEKLY",
  "DAILY": "DAILY"
};

const { ExceptionnalFees, Challenge, Wage, Pricing, Subscriptions } = initSchema(schema);

export {
  ExceptionnalFees,
  Challenge,
  Wage,
  Pricing,
  Subscriptions,
  Frequencies
};