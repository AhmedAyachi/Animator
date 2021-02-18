module.exports=function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins:[
            ["module-resolver",{
                alias:{
                    "react-native-router":"./React-native-router",
                    "actions":"./src/Store/Actions",
                    "assets":"./src/Assets",
                    "routes":"./src/Routes",
                    "estate":"./src/Estate",
                    "components":"./src/Components",
                    "afile":"./src/ANativeFile.js",
                }
            }],
        ],
    };
};
