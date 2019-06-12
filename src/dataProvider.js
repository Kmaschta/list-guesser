import getApiSchema from './getApiSchema';

import books from './data/books';

const dataProvider = (type, resource, params) => {
    console.warn('data provider', resource, params)
    if (type === 'INTROSPECT') {
        return Promise.resolve(getApiSchema());
    }

    if (type === 'GET_LIST') {
        return Promise.resolve(books);
    }
}

export default dataProvider;
