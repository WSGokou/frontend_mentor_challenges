/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],

  safelist: (() => {
    const safelist = [
      'text-[#ff5757]',
      'bg-[#ff575710]',
      'text-[#ffb01f]',
      'bg-[#ffb01f10]',
      'text-[#00bd91]',
      'bg-[#00bd9110]',
      'text-[#1125d4]',
      'bg-[#1125d410]',
    ];
    for (let i = 0; i <= 150; i++) {
      safelist.push(`h-[${i}px]`);
    }
    for (let i = 0; i <= 150; i++) {
      safelist.push(`bottom-[${i + 39}px]`);
    }

    return safelist;
  })(),
};
