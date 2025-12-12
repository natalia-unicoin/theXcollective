/**
 * Utility function to get the correct image path
 * Handles base path for GitHub Pages deployment
 */
export const getImagePath = (path: string): string => {
    const basePath = process.env.NODE_ENV === 'production' ? '/theXcollective' : '';

    // If path starts with '/', prepend basePath
    if (path.startsWith('/')) {
        return `${basePath}${path}`;
    }

    // If path doesn't start with '/', prepend basePath and '/'
    return `${basePath}/${path}`;
};
