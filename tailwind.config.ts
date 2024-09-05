import type { Config } from 'tailwindcss'

// 'text': 'oklch(91.31% 0.012 291.27)',
// 'background': 'oklch(16.10% 0.021 288.39)',
// 'primary': 'oklch(70.31% 0.090 289.79)',
// 'secondary': 'oklch(34.93% 0.147 281.02)',
// 'accent': 'oklch(51.41% 0.213 281.14)',

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        },
        colors: {
            text: {
                50: 'oklch(95.66% 0.007 286.27)',
                100: 'oklch(91.31% 0.012 291.27)',
                200: 'oklch(82.43% 0.025 290.95)',
                300: 'oklch(73.33% 0.039 290.51)',
                400: 'oklch(63.97% 0.054 289.89)',
                500: 'oklch(54.33% 0.070 288.95)',
                600: 'oklch(46.45% 0.058 289.02)',
                700: 'oklch(38.22% 0.046 289.14)',
                800: 'oklch(29.52% 0.032 289.34)',
                900: 'oklch(20.12% 0.018 289.78)',
                950: 'oklch(14.85% 0.011 294.20)'
            },
            background: {
                base: 'oklch(16.10% 0.021 288.39)',
                50: 'oklch(95.41% 0.009 286.22)',
                100: 'oklch(90.66% 0.020 292.12)',
                200: 'oklch(81.04% 0.042 290.02)',
                300: 'oklch(71.28% 0.065 289.73)',
                400: 'oklch(61.21% 0.090 288.01)',
                500: 'oklch(51.18% 0.113 286.05)',
                600: 'oklch(43.67% 0.097 286.23)',
                700: 'oklch(36.06% 0.076 287.01)',
                800: 'oklch(27.92% 0.054 286.90)',
                900: 'oklch(19.26% 0.030 289.38)',
                950: 'oklch(14.48% 0.015 291.11)'
            },
            primary: {
                50: 'oklch(95.01% 0.015 290.30)',
                100: 'oklch(90.01% 0.029 292.38)',
                200: 'oklch(79.75% 0.059 290.45)',
                300: 'oklch(69.23% 0.095 290.04)',
                400: 'oklch(58.77% 0.129 288.17)',
                500: 'oklch(48.32% 0.163 284.46)',
                600: 'oklch(41.43% 0.136 285.13)',
                700: 'oklch(34.15% 0.109 285.42)',
                800: 'oklch(26.60% 0.076 285.47)',
                900: 'oklch(18.48% 0.042 288.14)',
                950: 'oklch(13.83% 0.025 292.15)'
            },
            secondary: {
                50: 'oklch(94.57% 0.019 292.60)',
                100: 'oklch(89.29% 0.037 290.73)',
                200: 'oklch(78.25% 0.079 290.17)',
                300: 'oklch(67.27% 0.121 288.21)',
                400: 'oklch(56.38% 0.164 285.25)',
                500: 'oklch(46.13% 0.203 280.18)',
                600: 'oklch(39.50% 0.170 280.61)',
                700: 'oklch(32.59% 0.135 281.28)',
                800: 'oklch(25.31% 0.098 282.47)',
                900: 'oklch(17.67% 0.054 284.54)',
                950: 'oklch(13.36% 0.032 285.29)'
            },
            accent: {
                50: 'oklch(94.36% 0.023 291.36)',
                100: 'oklch(88.41% 0.048 290.63)',
                200: 'oklch(76.94% 0.097 289.31)',
                300: 'oklch(65.28% 0.150 286.81)',
                400: 'oklch(54.30% 0.199 282.86)',
                500: 'oklch(44.74% 0.241 275.71)',
                600: 'oklch(38.29% 0.201 276.43)',
                700: 'oklch(31.49% 0.161 277.02)',
                800: 'oklch(24.46% 0.116 278.80)',
                900: 'oklch(16.85% 0.068 281.58)',
                950: 'oklch(12.51% 0.040 286.55)'
            }
        }
    },
    plugins: []
}
export default config
