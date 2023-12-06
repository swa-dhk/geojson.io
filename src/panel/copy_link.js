//const HelpContent = require('../../data/help.md').default;
//const ApiContent = require('../../API.md').default;

module.exports = function () {
  //const html = `${HelpContent.html}<br><hr><br>${ApiContent.html}`;
  //this.innerHTML = 'Copied! ✅'; 
  navigator.clipboard.writeText(
	'https://swa-dhk.github.io/geojson.io/#data=data:application/json,'
	+encodeURIComponent(
		JSON.stringify(
			window.api.data.all().map
		)
	)
  );


  return false;
};
