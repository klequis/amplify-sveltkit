// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FormSubmission } = initSchema(schema);

export {
  FormSubmission
};