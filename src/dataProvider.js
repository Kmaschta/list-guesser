import hydraDataProvider from '@api-platform/admin/lib/hydra/hydraClient';

import getApiSchema from './getApiSchema';

const ENTRYPOINT = 'https://10.7.58.44:8443';

const dataProvider = hydraDataProvider({ entrypoint: ENTRYPOINT });

const enhancedDataProvider = (type, resource, params) => {
    console.warn('data provider', type, resource, params);

    if (type === 'INTROSPECT') {
        return getApiSchema(ENTRYPOINT);
    }

    if (type === 'GET_LIST') {
        return dataProvider(type, resource, params).then(({ data, total }) => ({
            data: data ? data.map(item => ({ ...item, id: item['@id'] })) : data,
            total
        }));
    }

    if (type === 'GET_ONE') {
        return dataProvider(type, resource, params).then(({ data }) => ({
            data: data ? { ...data, id: data['@id'] } : data
        }));
    }

    return dataProvider(type, resource, params)
}

export default enhancedDataProvider;
