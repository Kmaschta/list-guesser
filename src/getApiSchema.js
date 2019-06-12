import hydraDataProvider from '@api-platform/admin/lib/hydra/hydraClient';

export default (entrypoint) => apiDocumentationParser(entrypoint)
    .then(({ api, customRoutes = [] }) => {
        const promises = api.resources.map(resource =>
            resource.getParameters(),
        );

        return Promise.all(promises).then(responses => {
            api.resources.forEach((resource, index) => {
                resource.parameters = responses[index];
            });

            return {
                api,
                customRoutes,
                hasError: false,
                loaded: true,
            };
        });
    },
    data => {
        if (data instanceof Error) {
            console.error(data);

            return {
                hasError: true,
                loaded: true,
            };
        }

        return {
            api: data.api,
            customRoutes: data.customRoutes,
            hasError: true,
            loaded: true,
        };
    }
