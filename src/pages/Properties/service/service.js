var request = require("request");

var options = {
  method: 'GET',
  url: 'https://realtor.p.rapidapi.com/properties/detail',
  qs: {listing_id: '608763437', prop_status: 'for_sale', property_id: '4599450556'},
  headers: {
    'x-rapidapi-host': 'realtor.p.rapidapi.com',
    'x-rapidapi-key': '445356f5d8msh8d69aea21e1a809p10d900jsnf818d0339fca'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
