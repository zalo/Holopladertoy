# [Holopladertoy](https://www.shadertoy.com/view/ttXSDN)

A bookmarklet for connecting [Shadertoys](https://www.shadertoy.com/view/ttXSDN) to your [Looking Glass display](https://lookingglassfactory.com/).

[This shader is an example of one that takes advantage of this bookmarklet.](https://www.shadertoy.com/view/ttXSDN)

Save <a href="javascript:{var s=document.createElement('script');s.src='https://zalo.github.io/Holopladertoy/bookmarklet.js',document.body.appendChild(s);};void(0);">this bookmarklet</a> to your browser:
```
javascript:{var s=document.createElement("script");s.src="https://zalo.github.io/Holopladertoy/bookmarklet.js",document.body.appendChild(s);};void(0);
```

## How it works

When the bookmarklet is activated, it injects a script that connects to the Holoplay service, grabs the current device's calibration, and injects it into the Shadertoy text box.


## Credits

Based on [Holoplay.js](https://docs.lookingglassfactory.com/developer-tools/three/).
