/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            black: "#030303",
            offblack: "#111",
            white: "#FFF",
            offWhite: "rgba(255, 255, 255, 0.7 )",
            pink: "#E22CA4",
            green: "#34D89D",
            red: "#E00",
        },
        extend: {
            fontSize: {
                trettito: "32px",
            },
            minWidth: {
                serviceCard: "300px",
            },
            maxWidth: {
                pMax: "661px",
                serviceCard: "300px",
                hundre: "100px",
            },
            screens: {
                smScreen: "656px",
                midScreen: "728px",
                maxScreen: "1032px",
            },
        },
    },
    plugins: [],
};
