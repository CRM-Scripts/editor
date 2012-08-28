DataSift Query Editor
======

DataSift Query Editor is a visual editor for the CSDL.

More details here: (insert link to docs)

Usage
======

#### index.html
    <html>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	    <link rel="stylesheet" type="text/css" href="../minified/jcsdl.min.css" />
	    <script type="text/javascript" src="../minified/jcsdl.definition.js"></script>
	    <script type="text/javascript" src="../minified/jcsdl.min.js"></script>
	    <script type="text/javascript" src="index.js"></script>
	</html>

    <body>
        <div id="editor"></div>
    </body>
    </html>

#### index.js

	// returns editor instance
    var editor = new JCSDL.GUI('#editor', {
    	// options
    });
    var code = ''; // read code from somewhere
    editor.loadJCSDL(code);

Or as jQuery plugin:

	// returns jQuery object (for chaining)
    $("#editor").jcsdlGui({
    	// options
    });
    var code = ''; // read code from somewhere
    $("#editor").jcsdlGui('loadJCSDL', code);

Options
======

You can pass an object literal as the 2nd argument of the constructor (or 1st argument when using the editor as jQuery-plugin).

    {
    	save : function(code) {
    		// function to execute when user clicks the save button
    	},

    	hideTargets : ['facebook'], // array of targets to hide
    	
    	cancelButton : true, // false if you want to hide the cancel button, selector or jQuery object if you want to use your own
    	saveButton : null, // false if you want to hide the save button, selector or jQuery object if you want to use your own
    	
    	googleMapsApiKey : '', // your own Google Maps API key
    	mapsMarker : 'jcsdl/img/maps-marker.png', // path to the maps-marker.png if it doesn't work for you

    	// event hooks - functions called on various events happening in the editor
    	// 'this' always refers to the editor instance
    	cancel : function() {
    		this.hide();
    	},
    	invalidJCSDL : function(code) {},
    	logicChange : function(logic) {},
    	viewModeChange : function(mode) {},
    	filterNew : function() {},
    	filterEdit : function(filter) {},
    	filterDelete : function(filter) {},
    	filterSave : function(filter) {},
    	filterCancel : function(filter) {},
    	targetSelect : function(target) {},
    	operatorSelect : function(operator) {},
    	caseSensitivityChange : function(on) {}
    }


Development
======

To "build" (minify JS, CSS, copy appropriate files) just do the following in shell:

	$ php minify.php

This will minify all required JavaScripts and styles from `src/` and put it into `minified/`.