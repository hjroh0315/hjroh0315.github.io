(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_source = function(URL, callback) {
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              url: URL,
              dataType: 'jsonp',
              success: function( data ) {
                  //Call it back **RAW**
                  callback(data);
              }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'source for %s', 'get_source', 'google.com'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})({});
