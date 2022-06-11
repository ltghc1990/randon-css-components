/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    FIREBASE_CONFIG: {
      apiKey: "AIzaSyDZASyOTqIMePu_R38DBPHTxtDcLgkX4vY",
      authDomain: "netninja-firebase9-b9803.firebaseapp.com",
      projectId: "netninja-firebase9-b9803",
      storageBucket: "netninja-firebase9-b9803.appspot.com",
      messagingSenderId: "755887136750",
      appId: "1:755887136750:web:c239560dc652e0791fb8ff",
    },
  },
};

module.exports = nextConfig;
