/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'body':["PingFang SC", "helvetica neue", "arial", "阿里巴巴普惠体", "思源黑体 CN", "microsoft yahei ui", "microsoft yahei", "sans-serif"]
    }
  },
  plugins: [],    
}

