module.exports = {
  siteTitle: 'Ragil Bimantara | iOS Developer',
  siteDescription:
    'Ragil Bimantara is a Software Developer at Itsavirus, who loves learning new things',
  siteKeywords:
    'Ragil Bimantara, Ragil, Bimantara, saktibimantara, software developer, software engineer, iOS, iOS Developr, java developer',
  siteUrl: 'https://saktibimantara.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-166628407-2',
  googleVerification: '',
  name: 'Ragil Bimantara Sakti',
  location: 'Bali, Indonesia',
  email: 'ragilbmtr@gmail.com',
  github: 'https://github.com/saktibimantara',
  twitterHandle: '',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/saktibimantara',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saktibimantara',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ragilbimantara',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    pink: '#f57dff',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
