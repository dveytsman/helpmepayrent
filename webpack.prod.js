// Import the 'path' module to handle and transform file paths
// const path = require("path");

// module.exports = {
//   // The entry point of the application, where Webpack starts bundling
//   entry: "./src/index.js",
//   // The output configuration for the bundled file
//   output: {
//     // The name of the output file
//     filename: "bundle.js",
//     // The absolute path for the output directory
//     path: path.resolve(__dirname, "build"),
//     // The public URL for the output files
//     publicPath: "/", // This ensures the app works correctly when deployed to GitHub Pages
//   },
//   // Mode of the build process - can be 'development' or 'production'
//   mode: "production", // Change to 'production' for deployment
//   // Module configuration with rules for how different files should be processed
//   module: {
//     rules: [
//       {
//         // A regular expression to test for .js or .jsx files
//         test: /\.(js|jsx)$/,
//         // Exclude files in the 'node_modules' directory from being processed by Babel
//         exclude: /node_modules/,
//         // Use 'babel-loader' to transpile JavaScript/JSX files
//         use: {
//           loader: "babel-loader",
//           // Options for 'babel-loader'
//           options: {
//             // Presets used by Babel to transpile the code
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         // A regular expression to test for image files (png, jpeg, gif, svg)
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         // Use 'file-loader' to handle image files
//         use: [
//           {
//             loader: "file-loader",
//             // Options for 'file-loader'
//             options: {
//               // The naming pattern for the output files
//               name: "[path][name].[ext]",
//               // The output directory for image files
//               outputPath: "images/",
//               // The public URL for image files
//               publicPath: "images/",
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   // Resolve configuration to specify file extensions that Webpack will process
//   resolve: {
//     extensions: [".js", ".jsx"], // Add other extensions if needed
//   },
//   // Configuration for the development server
//   devServer: {
//     // Specify the directory for serving static files
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     // Enable gzip compression for the served files
//     compress: true,
//     // The port on which the development server will run
//     port: 9000,
//     // Automatically open the default browser when the server starts
//     open: true,
//   },
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: process.env.PUBLIC_URL || "/",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        // A regular expression to test for image files (png, jpeg, gif, svg)
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      templateParameters: {
        PUBLIC_URL: process.env.PUBLIC_URL || "/",
      },
    }),
    new webpack.DefinePlugin({
      "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL || ""),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
};
