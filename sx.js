(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.alertBlock = function(text) {
        alert(text);
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ','alert %s', 'alertBlock']
        ]
    };
    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});