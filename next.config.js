/** @type {import('next').NextConfig} */

// {
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// }

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig