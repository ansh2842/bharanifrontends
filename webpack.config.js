const path = require('path');
module.exports ={

    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "https": require.resolve("https-browserify"),
            "crypto": false,
            "assert": false,
            "stream": false,
            "querystring": false,
            "fs": false,
            "path": false,
        },
       
        
    }
}
