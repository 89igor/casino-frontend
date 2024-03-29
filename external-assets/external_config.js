// =========================================================
// get config from URL parameters
// =========================================================

function getQueryParams(qs) {
   qs = qs.split('+').join(' ');
   var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
   while (tokens = re.exec(qs)) params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
   return params;
}

var query = {}
try { query = getQueryParams(document.location.search); } catch (e) { }
// console.log(query.gameName);


// =========================================================
// Hard coded configs
// =========================================================

window._EXTERNAL_CONFIGS = {
   // externalServerIP: 'http://167.94.7.237:13000',    // comment out this line to switch to default URL at server.baohule.com
   // externalGameIP: 'http://167.94.7.237:13001',    // comment out this line to switch to default URL at broadcast.baohule.com
   isEmbeddedToWeb: false,
   autoLoadGameSceneName: query.gameName,      // "game_baijialeQZ" or "game_bairenniuniu"
   autoLoginCredential: {
      username: 'robot1',
      userid: 1,
      sign: 'ASKFO312r2fno22d',
   }
};
