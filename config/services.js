module.exports = {
    /**
     * Load application providers.
     */
    'providers': [
        modules_path() + '/ivyframework/src/Config/ServiceProvider',
        modules_path() + '/ivyframework/src/Pipe/ServiceProvider',
        modules_path() + '/ivyframework/src/Middleware/ServiceProvider',
        modules_path() + '/ivyframework/src/Router/ServiceProvider',
        modules_path() + '/ivyframework/src/Console/ServiceProvider'
    ],

    /**
     * Create a desired aliases.
     */
    'alias': {
        'Config': 'Ivy/Config',
        'Router': 'Ivy/Router'
    }
};