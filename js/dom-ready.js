// Helper to execute code when DOM is ready
export function domReady(callback) {
    document.readyState === 'loading' 
        ? document.addEventListener('DOMContentLoaded', callback)
        : callback();
}