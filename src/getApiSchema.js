import parseHydraDocumentation from 'api-doc-parser/lib/hydra/parseHydraDocumentation';

export default (uri = '/') => parseHydraDocumentation(`https://demo.api-platform.com${uri}`);
