// Anything exported from this file is importable by other in-browser modules.
const apiCache = new Map();

export function getData(url: string) {
    const data = apiCache.get(url);

    if(data) {
        return Promise.resolve(data);
    }
    else {
        return new Promise((resolve) => {
            const result = {
                data: 10
            };
            apiCache.set(url,result);
            resolve(result);
        })
    }
}
