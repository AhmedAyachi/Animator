module.exports=function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins:[
            ["module-resolver",{
                alias:{
                    "assets":"./src/Assets",
                    "routes":"./src/Routes",
                    "components":"./src/Components",
                    "afile":"./src/ANativeFile.js",
                }
            }],
        ],
    };
};
