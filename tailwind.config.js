/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../Proyecto 2/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'layout': "url('https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    }
  },
  plugins: [],
}