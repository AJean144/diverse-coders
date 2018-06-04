const borderWidth =
    window.devicePixelRatio && devicePixelRatio >= 2 ? '0.5px' : '1px';

export const theme = {
    breakpoints: {
        s: '768px',
        m: '1024px',
        l: '1200px',
    },
    colors: {
        main: {
            base: '#fef4d8',
            dark: '#dac183',
        },
        contrast: {
            base: '#2f3131',
            dark: '#232626',
        },
        black: '#161919'
    },
    textColors: {
        main: '#393a3e',
        inverse: '#ffffff',
        link: '#ed7347',
    },
    fonts: {
        family: {
            base:
                "'Assistant', sans-serif",
            heading:
                "'Assistant', sans-serif",
        },
        lineHeight: {
            base: '1.5',
            heading: '1.2',
        },
        sizes: {
            base: '14px',
            xxs: '8px',
            xs: '10px',
            s: '12px',
            l: '16px',
            xl: '24px',
            h1: '24px',
            h2: '20px',
            h3: '16px',
            h4: '12px',
        },
        weights: {
            light: 200,
            normal: 400,
            semiBold: 600,
            bold: 800,
        },
    },
    radius: {
        base: '3px',
        s: '2px',
        l: '20px',
    },
    boxShadow: '0px 1px 8px 5px rgba(0,0,0,0.75)',
    spacing: {
        base: '16px',
        xs: '5px',
        s: '10px',
        m: '12px',
        l: '32px',
        xl: '60px',
    },
    borderWidth
}