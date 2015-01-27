var API = function(config) {
  this.prefix = config.prefix || 'http';
  this.port = config.port || 80;
  if(!config.url) {
    throw new Error('A url must be provided');
  }
  this.url = config.url;
};

API.prototype.fullUrl = function() {
  return this.prefix + this.url + ':' + this.port;
}

module.exports = {
  githubUserSearchApi: new API({
    prefix: 'https://',
    url: 'api.github.com',
    port: 443
  })
};

