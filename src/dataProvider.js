import hydraDataProvider from '@api-platform/admin/lib/hydra/hydraClient';
import apiDocumentationParser from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';

const ENTRYPOINT = 'https://10.7.58.44:8443';

const dataProvider = hydraDataProvider({ entrypoint: ENTRYPOINT });

const enhancedDataProvider = (type, resource, params) => {
    console.warn('data provider', type, resource, params);

    if (type === 'INTROSPECT') {
        return getApiSchema(ENTRYPOINT);
    }

    return dataProvider(type, resource, params)
}

export default enhancedDataProvider;
