var flarum = require('flarum-gulp');

flarum({
    modules: {
        'datitisev/dashboard': [
            'src/**/*.js'
        ]
    }
});