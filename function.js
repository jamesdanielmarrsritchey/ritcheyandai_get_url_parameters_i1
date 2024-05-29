/**
 * This function gets parameters from the current URL and assigns them to global variables.
 * Each parameter name becomes a global variable name, and its value becomes the variable's value.
 * 
 * Usage:
 * 1. Call this function without any arguments.
 * 2. After calling the function, you can access the URL parameters as global variables.
 * 
 * Example:
 * If your URL is "http://example.com?param1=value1&param2=value2", after calling this function,
 * you can access "value1" with the variable param1, and "value2" with the variable param2.
 */
function getParamsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of params.entries()) {
        window[key] = value;
    }
}