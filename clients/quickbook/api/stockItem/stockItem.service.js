const rp = require('request-promise-native');

const { QUICKBOOK_URL } = require('../../../../config/environment');

exports.create = async (payload) => {
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to create  method',
    });
  }

  const stockItem = await rp({
    method: 'post',
    uri: `${QUICKBOOK_URL}/api/stockitems`,
    body: payload,
    json: true,
  });

  return stockItem;
};
