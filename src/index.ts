import func from "@func/funcsMap";
import Database from '@database'

import('@/website/app');
import('@/database/mongo/connect');

var globals = {
  functions: func,
  database: new Database(),
};

export { globals };