import * as marked from 'marked';

const SanitizeState = require('marked-sanitizer-github').default

const sanitizeState = new SanitizeState()
// if something is not right while sanitizing, log
sanitizeState.onDetectedBroken = (reason: string, tag: string) => {
    console.error(`Broken HTML around '${tag}' tag: ${reason}`);
}

/**
 * we need to reset the sanitizer's state before using it each time when calling marked
 *
 * import marked, { getSanitizer } from '<relative-path-to-here>'
 * marked(content, { sanitizer: getSanitizer() })
 */
export const getSanitizer = () => {
    sanitizeState.reset()
    return sanitizeState.getSanitizer()
}

// always sanitize, but provide the sanitizer each time `marked` is being called
marked.setOptions({
    sanitize: true,
})

export default marked;  // https://github.com/styleguidist/react-docgen-typescript/issues/92