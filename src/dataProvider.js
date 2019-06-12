import getApiSchema from './getApiSchema';
import jsonRestProvider from 'ra-data-fakerest';
import books from './data/books';
import data from './data';

const fakeDataProvider = jsonRestProvider(data, true);

const dataProvider = (type, resource, params) => {
  if (type === 'INTROSPECT') {
      return Promise.resolve(getApiSchema());
  }

  return fakeDataProvider(type, resource, params);
}

export default dataProvider;
