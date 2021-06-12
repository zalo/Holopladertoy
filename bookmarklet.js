// Add this as your bookmarklet:
// javascript:{var s=document.createElement("script");s.src="https://zalo.github.io/Holopladertoy/bookmarklet.js",document.body.appendChild(s);};void(0);

// Execute on a delay in-case the body hasn't been constructed yet...
setTimeout(function() {
  // Don't initialize the bookmarklet again if there's already a StatusView
  var existingStatusView = document.getElementById("statusView");
  if(typeof(existingStatusView) === 'undefined' || existingStatusView === null){
    var i, s, ss = [
      'https://zalo.github.io/Holopladertoy/holoplay.min.js',
      'https://zalo.github.io/Holopladertoy/index.js'];
    //var i, s, ss = ['/Holoplay.min.js', '/index.js']; // The local testing version...
    for (i = 0; i != ss.length; i++) {
      s = document.createElement('script');
      s.src = ss[i];
      document.body.appendChild(s);
    }
  }
}, 100);
