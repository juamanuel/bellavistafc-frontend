const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require ("mini-css-extract-plugin")
module.exports = {
    devServer: {
        port:9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env","react"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: {  minimize:true   }
                  } 
                ]
            },
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test:/\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: { 
                        limit: 10 * 1024,
                        name: 'assets/images/[name].[hash].[ext]'
                    }
                }
            },
            {
                test:/\.(woff|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: { 
                        limit: 10 * 1024,
                        name: 'assets/fonts/[name].[hash].[ext]'
                    }
                }
            },
            {
                test:/\.(mp4|webm)$/,
                use: {
                    loader: "url-loader",
                    options: {
                         limit: 10000,
                         name: 'videos/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        })
    ]
}