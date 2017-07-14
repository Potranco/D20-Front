function loadFile(ajax){
  if (typeof ajax === 'undefined') return false;
  
  var url = typeof ajax.url !== 'undefined' ? ajax.url : '';
  var method = typeof ajax.method !== 'undefined' ? ajax.method : '';
  var contentType = typeof ajax.contentType !== 'undefined' ? ajax.contentType : 'application/x-www-form-urlencoded';
  var params =  typeof ajax.params !== 'undefined' ? ajax.params : {};
  urlParams=parseJSONToParams(params);

  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();

    req.onload = function() {
      if ((req.status >= 200)&&(req.status<300)) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    switch (method) {
        case 'POST':
          req.open(method,url,true);
          req.setRequestHeader("Content-type", contentType);
          req.send(urlParams);
            break;
        case 'GET':
        default:
          req.open(method,url+'?'+urlParams,true);
          req.send();
            break;
    }
  });
}

function parseJSONToParams(obj) {
   var str = Object.keys(obj).map(function(key){ 
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); 
   }).join('&');
   return str;
}

