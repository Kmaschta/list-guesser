import parseHydraDocumentation from 'api-doc-parser/lib/hydra/parseHydraDocumentation';

export const (uri = '/') => parseHydraDocumentation(`https://demo.api-platform.com${uri}`);
