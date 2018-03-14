var injectBabelPlugin = require('react-app-rewired').injectBabelPlugin;

module.exports = function override(config, env) {
    config = injectBabelPlugin('babel-plugin-emotion', config);
    return config;
};
