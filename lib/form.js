module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/form/version/3/do/query', params);
    },

    read: function(id) {
      return client.execute('/form/version/3/do/read/id/' + id);
    }

  };
};
