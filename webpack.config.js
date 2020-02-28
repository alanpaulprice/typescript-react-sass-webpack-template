const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": __dirname + "/src/scripts/index.tsx",
    "output": {
        "path": __dirname + '/dist',
        "filename": "js/[name].[chunkhash:8].bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.tsx?$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "transpileOnly": true
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    "plugins": [
        new PrettierPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "src/index.html"
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: "[name]-[contenthash:8].css"
            }
        )
    ]
}