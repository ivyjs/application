module.exports = {
    /**
     * Load application providers.
     */
    'providers': [
        modules_path() + '/ivy-framework/src/Router/ServiceProvider',
        modules_path() + '/ivy-framework/src/Config/ServiceProvider'
    ],

    /**
     * Create a desired aliases.
     */
    'alias': {
        'Config': 'Ivy/Config',
        'Router': 'Ivy/Router'
    }
};