export const getBasePath = (path: string) => { const basePath = '/blayblay'; return path.startsWith('/') ? basePath + path : basePath + '/' + path; };
