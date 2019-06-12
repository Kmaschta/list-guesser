import getApiSchema from './getApiSchema';

import books from './data/books';

const dataProvider = (type, resource, params) => {
    console.warn('data provider', resource, params)
    if (type === 'INTROSPECT') {
        return getApiSchema();
    }

    if (type === 'GET_LIST') {
        return books;
    }
}

export default dataProvider;
