// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chAMP1R3', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'Thought Leadership',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Indiegogos Go Time Podcast',
          description:
            'Webby submitted podcast showcasing my subject matter expertise as co-host',
          imageUrl:
            'https://i.ibb.co/Y7rygQD/Screenshot-2024-10-30-at-22-05-11.png',
          link: 'https://open.spotify.com/show/7bEdWFbpv3rKHotpDzcCV4?si=44a8ae1c2f674ce0',
        },
        {
          title: 'Qualcomm & Techstars Startup Series - Financing Your Venture',
          description:
            'Featured Guest Lecturer',
          imageUrl:
            'https://i.ibb.co/CVGmMS6/2108310640331235247398.png',
          link: 'https://www.accupass.com/event/2108310245431809667317',
        },
      ],
    },
    external: {
      header: 'Thought Leadership',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Indiegogos Go Time Podcast',
          description:
            'Webby submitted podcast showcasing my subject matter expertise as co-host',
          imageUrl:
            'https://i.ibb.co/Y7rygQD/Screenshot-2024-10-30-at-22-05-11.png',
          link: 'https://open.spotify.com/show/7bEdWFbpv3rKHotpDzcCV4?si=44a8ae1c2f674ce0',
        },
        {
          title: 'Qualcomm & Techstars Startup Series - Financing Your Venture',
          description:
            'Featured Guest Lecturer',
          imageUrl:
            'https://i.ibb.co/CVGmMS6/2108310640331235247398.png',
          link: 'https://www.accupass.com/event/2108310245431809667317',
        },
      ],
    },
  github: {
      display: true, // Display GitHub projects?
      header: 'Team Enablement',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['chAMP1R3/chAMP1R3', 'chAMP1R3/chAMP1R3.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['chAMP1R3/Decks', 'chAMP1R3/CRM-Tracking'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Stacy Bradford',
    description: 'jkdafjhdfjk',
    imageURL: 'https://i.ibb.co/CVGmMS6/2108310640331235247398.png',
  },
  social: {
    linkedin: 'stacy-bradford',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'StacyDBradford@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/u/0/folders/145E7ndJMRyE0MoKgoVjbOjKKICY-Lv06', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    'SANDLER',
    'MEDDIC',
    'GAP',
    'SPIN',
    'Challenger',
    'Complex Sales',
    'Hunting',
    'Customer Success',
    'Cross Selling',
    'Upselling',
    'Cold Calling',
    'Storytelling',
    'Account Management',
    'Problem Solving',
    'SQL',
    'Hubspot',
    'PostGRE',
    'Python',
    'Looker',
    'Salesforce',
    'Outreach.io',
    'OpenAI',
  ],
  experiences: [
    {
      company: 'Earthmover - The Github of Scientific Data',
      position: 'Chief Vibes Officer Emeritus',
      from: 'February 2099',
      to: 'Present',
      companyLink: 'https://earthmover.io',
    },
  ],
  educations: [
    {
      institution: 'Codecademy',
      degree: 'Python, Advanced SQL, Data Science: Analytics Specialist, Intro to [web3], Blockchain, and Crypto',
      from: '0',
      to: '1',
    },
    {
      institution: 'University of Oklahoma',
      degree: 'Bachelor of Science - Zoology',
      from: '0',
      to: '1',
    },
  ],
  publications: [
    {
      title: 'Greentech Is On The Rise And Crowdfunding Platform Indiegogo Is Leading The Charge',
      conferenceName: '',
      journalName: 'Forbes',
      authors: 'Christopher Marquis',
      link: 'https://www.forbes.com/sites/christophermarquis/2021/08/09/greentech-is-on-the-rise-and-crowdfunding-platform-indiegogo-is-leading-the-charge/',
      description:
        'Ask me about the playbook that led to this earned media.  This is where I cut my proverbial professional teeth.',
    },
    {
      title: 'A Silent Supermajority: The Risk of Greenwashing in Crowdfunding',
      conferenceName: '',
      journalName: 'Tech Ideas For Good',
      authors: 'Stacy Bradford',
      link: 'https://web.archive.org/web/20220125071647/https://www.techideasforgood.com/idea-pages/greenwashing',
      description:
        'Guest post on a short-lived partnered blog and inspiration for Indiegogo Earth Day messaging ',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'champ1r3', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
