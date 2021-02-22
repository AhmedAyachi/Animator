module.exports=function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins:[
            ["module-resolver",{
                alias:{
                    "actions":"./src/Store/Actions",
                    "assets":"./src/Assets",
                    "routes":"./src/Routes",
                    "estate":"./src/Estate",
                    "css":"./src/index.style.js",
                    "afile":"./src/ANativeFile.js",
                    "components":"./src/Components",
                }
            }],
        ],
    };
};
