module.exports = {
    /**
     * Load application providers.
     */
    'providers': [
        modules_path() + '/ivy-framework/src/Config/ServiceProvider',
        modules_path() + '/ivy-framework/src/Pipe/ServiceProvider',
        modules_path() + '/ivy-framework/src/Middleware/ServiceProvider',
        modules_path() + '/ivy-framework/src/Router/ServiceProvider'
    ],

    /**
     * Create a desired aliases.
     */
    'alias': {
        'Config': 'Ivy/Config',
        'Router': 'Ivy/Router'
    }
};