const rp = require('request-promise-native');

const { DISPATCH_URL } = require('../../../../../config/environment');

exports.create = async (data) => {
  if (!data) return Promise.reject({ code: 400, messaage: '' });
  const order = rp({
    method: 'POST',
    uri: `${DISPATCH_URL}/api/orders/sync`,
    body: data,
    json: true,
  });

  return order;
};

exports.show = async (orderId) => {
  if (!orderId) return Promise.reject({ code: 400, messaage: 'OrderId Not Found' });
  const order = rp({
    method: 'GET',
    uri: `${DISPATCH_URL}/api/orders/${orderId}`,
    json: true,
  });

  return order;
};
