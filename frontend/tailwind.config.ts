import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   extend: {

    container: {
       
      center: true,
      
      padding: {
        DEFAULT: '10px',  
        md: '64px',
        lg: '32px',
        xl: '20px',       
       
      },
     
    
    },

   
   }

      
  },
  plugins: [],
}
export default config
