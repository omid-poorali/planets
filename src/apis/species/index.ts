import * as mock from './mock';
import * as real from './real';

const getApis = () => {
  if (process.env.NODE_ENV === 'test') {
    return mock;
  }
  return real;
};

export const species = getApis();
