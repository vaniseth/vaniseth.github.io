/* ==========================================================================
   SITE CONTENT — edit this file to update your website.
   - Any link with an empty url ('') is hidden automatically.
   - Text in [square brackets] is a placeholder: replace or delete it.
   - `bio` paragraphs accept simple HTML (e.g. <a href="...">links</a>).
   ========================================================================== */

window.SITE = {
  name: 'Vani Seth',
  role: 'Ph.D. Student in Computer Science · University of Missouri',

  // Accent color. One of: copper, teal, indigo, slate-blue, forest-green,
  // plum, burnt-orange, oxblood, mizzou-gold
  accent: 'mizzou-gold',

  // Profile photo (put the file in /images). Leave '' to show a placeholder.
  photo: 'images/profile.jpg',

  // Optional highlighted line under your name. Set to '' to hide it.
  // callout: 'I am on the industry job market for Summer 2027 internships! I am looking for roles in LLM Safety and Alignment, AI Security, Trustworthy AI, Adversarial Machine Learning, AI Research, Generative AI, and AI Evaluation',
  callout: 'Seeking Summer 2027 internships!',
  calloutInterests: 'LLM safety &amp; alignment, AI security, trustworthy AI, adversarial ML, generative AI, AI evaluation',
  calloutLink: { label: 'Get in touch →', url: 'mailto:vs4ky@missouri.edu' },

  


bio: [
  'I’m a Ph.D. student in Computer Science at the University of Missouri, where I work at the <a href="https://aeri.missouri.edu/" target="_blank" rel="noopener noreferrer">AERI Lab</a> under the guidance of <a href="https://www.prasadcalyam.com/" target="_blank" rel="noopener noreferrer">Dr. Prasad Calyam</a>. My research focuses on LLM safety and security, particularly defending against jailbreaks and adversarial attacks, and improving evidence-grounded reasoning in scientific and healthcare applications.',

  'Beyond my current research, I’m interested in trustworthy AI, adversarial machine learning, and AI security. I’m always open to research collaborations, exchanging ideas, and exploring new opportunities. Feel free to reach out!'
],



  cv: 'assets/Vani_Seth_CV.pdf',

  profileLinks: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=H2wkwRwAAAAJ' },                       // add your Scholar profile URL
    { label: 'GitHub',         url: 'https://github.com/vaniseth' },
    { label: 'LinkedIn',       url: 'https://www.linkedin.com/in/vaniseth' },
    { label: 'Medium',         url: 'https://medium.com/@vaniseth' },
    { label: 'CV (PDF)',       url: 'assets/Vani_Seth_CV.pdf' },
    { label: 'Email',          url: 'mailto:vs4ky@missouri.edu' }
  ],

  /* ---------------- Research themes (cards double as publication filters) */
themes: [
  {
    id: 'security',
    short: 'LLM Security',
    title: 'Trustworthy & Secure LLMs',
    blurb: 'Developing methods to detect and defend against jailbreaks, prompt injection, and adversarial attacks. My research focuses on understanding vulnerabilities in LLMs and building robust defenses to ensure safe and reliable behavior across complex interactions.'
  },
  {
    id: 'rag',
    short: 'Scientific RAG',
    title: 'Retrieval & Reasoning for Science',
    blurb: 'Building retrieval-augmented generation and multi-hop reasoning systems that integrate external knowledge to support scientific discovery. My work emphasizes evidence-grounded responses, verifiable reasoning, and reliable information retrieval.'
  },
  {
    id: 'domains',
    short: 'Critical-Domain AI',
    title: 'Trustworthy AI for Critical Domains',
    blurb: 'Designing trustworthy AI systems for high-stakes applications, including healthcare, finance, scientific research, and critical infrastructure. My research emphasizes reliability, privacy, transparency, and human oversight to support responsible AI deployment.'
  }
],

/* ---------------- News (newest first). The first `newsVisible` show by default. */
  // News text may include simple HTML: <a href="...">, <strong>, <em>.
  newsVisible: 5,
  news: [
    {
      date: 'Jan 2027',
      text: '<strong>SciWeaver</strong> accepted to <a href="https://cs3-lab.github.io/icdcn/index.html" target="_blank" rel="noopener noreferrer"><strong>ICDCN 2027</strong></a>! 🇮🇳'
    },
    {
      date: 'Oct 2026',
      text: 'Presented a hands-on tutorial on <strong>Building AI-Ready Campus/Cloud Infrastructure: MLOps for AI-driven Scientific Workflows on AWS</strong> at <a href="https://events.internet2.edu/website/93141/" target="_blank" rel="noopener noreferrer">Internet2 TechEx 2026</a>. 🇺🇸'
    },
    {
      date: 'Sep 2026',
      text: 'New preprint out: <a href="https://arxiv.org/abs/2609.29075" target="_blank" rel="noopener noreferrer">CRISS</a>!'
    },
    {
      date: 'Jul 2026',
      text: '<strong>ALTR</strong> and <strong>SAGE</strong> accepted to <a href="https://www.ieeesmc.org/ichms-2026/home-2/" target="_blank" rel="noopener noreferrer"><strong>IEEE ICHMS 2026</strong></a>! 🇸🇬'
    },
    {
      date: 'May 2026',
      text: '<strong>MCD</strong> paper accepted to <a href="https://www.ipdps.org/ipdps2026/index.html" target="_blank" rel="noopener noreferrer"><strong>IPDPSW 2026</strong></a>! 🇺🇸'
    },
    {
      date: 'Apr 2026',
      text: 'Received the <strong>Outstanding Graduate Poster Award</strong> at the University of Missouri!'
    },
    {
      date: 'Apr 2026',
      text: 'Successfully defended my M.S. thesis, <strong>Layered Security and Trust Mechanisms for GenAI Applications in Critical Domains</strong>!'
    },
    {
      date: 'Mar 2026',
      text: 'Won <strong>1st Place</strong> at the Agentic AI for Real-World Impact Hackathon with <a href="https://github.com/vaniseth/TigerTown" target="_blank" rel="noopener noreferrer"><strong>TigerTown</strong></a>!'
    },
    {
      date: 'Dec 2025',
      text: '<strong>EmpathAI</strong> accepted to <a href="https://publish.illinois.edu/healthsec2025/" target="_blank" rel="noopener noreferrer"><strong>ACSAC HealthSec 2025</strong></a>! 🇺🇸'
    },
    {
      date: 'Nov 2025',
      text: '<strong>ModeGraph</strong> accepted to <a href="https://cikm2025.org/" target="_blank" rel="noopener noreferrer"><strong>ACM CIKM 2025</strong></a>! 🇰🇷'
    },
    {
      date: 'Sept 2025',
      text: 'Started my Ph.D. in Computer Science at the <strong>University of Missouri</strong>!'
    },
    {
      date: 'May 2025',
      text: '<a href="https://ieeexplore.ieee.org/abstract/document/11154195" target="_blank" rel="noopener noreferrer"><strong>ARES-Vidura</strong></a> accepted to <strong>IEEE ICHMS 2025</strong>! 🇦🇪'
    },
    {
      date: 'Mar 2025',
      text: 'Won <strong>3rd Place</strong> at the Mizzou EECS GSA Show Me Course Project Competition with <a href="https://github.com/vaniseth/FaceGuard-AI" target="_blank" rel="noopener noreferrer"><strong>FaceGuard-AI</strong></a>!'
    },
    {
      date: 'Nov 2024',
      text: 'Selected as a judge for <a href="https://tigerhacks.missouri.edu/" target="_blank" rel="noopener noreferrer"><strong>TigerHacks</strong></a>!'
    },
    {
      date: 'Aug 2024',
      text: 'Joined the <strong>University of Missouri</strong> with a fully funded scholarship to pursue my M.S. in Computer Science!'
    },
    {
      date: 'May 2024',
      text: 'Graduated with a <strong>B.Tech. in Computer Science</strong>, specializing in Artificial Intelligence and Machine Learning!'
    },
    {
      date: 'Jun 2023',
      text: 'Joined the <a href="https://www.aai.aero/" target="_blank" rel="noopener noreferrer"><strong>Airports Authority of India</strong></a> as an AI/ML Intern!'
    },
    {
      date: 'Jul 2022',
      text: 'Ranked among the <strong>Top 5 Teams</strong> nationwide at <a href="https://www.sih.gov.in/" target="_blank" rel="noopener noreferrer"><strong>Smart India Hackathon 2022</strong></a>!'
    },
    {
      date: 'Jun 2022',
      text: 'Selected as one of <strong>500 scholarship recipients worldwide</strong> for the <a href="https://www.linuxfoundation.org/about/lift-scholarships" target="_blank" rel="noopener noreferrer"><strong>Linux Foundation Training Scholarship</strong></a>!'
    },
    {
      date: 'Jun 2022',
      text: 'Joined the <a href="https://misn.iitd.ac.in/" target="_blank" rel="noopener noreferrer"><strong>MISN Lab at IIT Delhi</strong></a> as a Research Assistant!'
    },
    {
      date: 'Dec 2021',
      text: 'Selected as <strong>AI/ML Coordinator</strong> for the <a href="https://sites.google.com/view/gdsc-algiers/about-us" target="_blank" rel="noopener noreferrer">Google Developer Student Club (GDSC)</a>!'
    },
    {
      date: 'Jul 2021',
      text: 'Selected as an <a href="https://aws.amazon.com/about-aws/our-impact/scholars/" target="_blank" rel="noopener noreferrer"><strong>AWS Machine Learning Scholar</strong></a>!'
    },
    {
      date: 'Mar 2021',
      text: 'Selected as a contributor for <a href="https://gssoc.girlscript.org/" target="_blank" rel="noopener noreferrer"><strong>GirlScript Summer of Code</strong></a>!'
    }
  ],


  /* ---------------- Publications (newest first)
     theme:  one of the theme ids above
     award:  e.g. 'Best Paper' → gold badge + gold edge. '' for none.
     tag:    e.g. 'Oral', 'Spotlight', 'Under Review'. '' for none.
     authors: your name is bolded automatically. Use * for equal contribution. */
  publications: [
  //   {
  //   theme: 'security',
  //   award: '',
  //   tag: 'Under Review',
  //   title: 'M-TAP: Detecting Multi-Turn Jailbreaks via Activation Probes',
  //   authors: '<strong>Vani Seth</strong>, [Coauthors]',
  //   venue: 'WWW ’27',
  //   venueLong: 'The ACM Web Conference 2027',
  //   links: [
  //     { label: 'project website', url: '' },
  //     { label: 'preprint', url: '' },
  //     { label: 'code', url: '' }
  //   ]
  // },
    {
      theme: 'domains',
      award: '',
      tag: 'Preprint',
      title: 'CRISS: A Retrieval-Augmented AI Chatbot for Assisting Cancer Registrars',
      authors: 'Vani Seth, Mohammad Beheshti, Anirudh Kambhampati, Vishwa Bhayani, Lucinda Ham, Prasad Calyam, Iris Zachary',
      venue: 'arXiv ’26',
      venueLong: 'arXiv Preprint, September 2026',
      links: [
        { label: 'preprint', url: 'https://arxiv.org/abs/2609.29075' },
        { label: 'pdf', url: 'https://arxiv.org/pdf/2609.29075' }
      ]
    },
    {
      theme: 'security',
      award: '',
      tag: '',
      title: 'ALTR: Adaptive Defense Framework Against Adversarial LLM Threats in Critical-Domain Applications',
      authors: 'Vani Seth, Srikar Alla, Sd Md Abidar Rahman, Ali Shiri Sichani, Prasad Calyam',
      venue: 'IEEE ICHMS ’26',
      venueLong: '2026 IEEE International Conference on Human-Machine Systems',
      links: [
        { label: 'pdf', url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11602220' },
        { label: 'code', url: '' },
        { label: 'paper', url: 'https://doi.org/10.1109/ICHMS69701.2026.11602220' }
      ]
    },
    {
      theme: 'rag',
      award: '',
      tag: '',
      title: 'SAGE: Student-Focused Adaptive Guidance Engine for Intelligent Tutoring with Regulated Learning',
      authors: 'Mahady Hasan Rayhan, Gabriel R. Edwards, Ashish Pandey, Vani Seth, Nilesh Salvi, Noah Glaser, Marisa Chrysochoou, Prasad Calyam',
      venue: 'IEEE ICHMS ’26',
      venueLong: '2026 IEEE International Conference on Human-Machine Systems',
      links: [
        { label: 'pdf', url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11602253' },
        { label: 'code', url: '' },
        { label: 'paper', url: 'https://doi.org/10.1109/ICHMS69701.2026.11602253' }
      ]
    },
    {
      theme: 'domain',
      award: '',
      tag: '',
      title: 'Online Self-Service Learning Modules for Running AI-Driven Scientific Workflows',
      authors: 'Pari Hirenkumar Patel*, Vani Seth*, Bishwas Wagle*, Roshan Lal Neupane, Ashish Pandey, Sanjit Subhash, Sharan Srinivas, Prasad Calyam',
      venue: 'IPDPSW ’26',
      venueLong: '2026 IEEE International Parallel and Distributed Processing Symposium Workshops',
      links: [
        // { label: 'conference', url: 'https://www.ipdps.org/ipdps2026/index.html' },
        { label: 'pdf', url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11652008' },
        { label: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/11652008' },
        { label: 'website', url: 'https://www.mizzouclouddevops.net/' }
      ]
    },
    {
      theme: 'rag',
      award: '',
      tag: '',
      title: 'Disentangling Complex Questions in LLMs via Multi-Hop Dependency Graphs',
      authors: 'Roland Oruche, Alphaeus Dmonte, Vani Seth, Zian Zeng, Yuanxun Zhang, Marcos Zampieri, Prasad Calyam',
      venue: 'ACM CIKM ’25',
      venueLong: '34th ACM International Conference on Information and Knowledge Management',
      links: [
        { label: 'paper', url: 'https://doi.org/10.1145/3746252.3761037' },
        { label: 'code', url: '' },
        { label: 'pdf', url: 'https://dl.acm.org/doi/pdf/10.1145/3746252.3761037' }
      ]
    },
    {
      theme: 'security',
      award: '',
      tag: '',
      title: 'EmpathAI: A Trustworthy and Secure Conversational Agent for Mental Healthcare',
      authors: 'Vani Seth, Ashish Pandey, Kavya Gundlapalli, Mahesh Duvvuri, Rithvik Mettu, Iris Zachary, Prasad Calyam',
      venue: 'ACSAC HealthSec ’25',
      venueLong: 'Health Security Workshop, Annual Computer Security Applications Conference 2025',
      links: [
        { label: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/11418001' },
        { label: 'pdf', url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11418001' },
        { label: 'code', url: '' }
      ]
    },
    {
      theme: 'rag',
      award: '',
      tag: '',
      title: 'Closed-Loop CNT Growth Using Retrieval Augmented Generation and Human Feedback',
      authors: 'Vani Seth, [Coauthors]',
      venue: 'IEEE ICHMS ’25',
      venueLong: '2025 IEEE International Conference on Human-Machine Systems',
      links: [
        { label: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/11154195' },
        { label: 'pdf', url: 'https://drive.google.com/file/d/1heLQ0nVpR1T1KVSgKunSOS24GJKB9p9m/view' }
      ]
    }
  ],

  /* ---------------- Tabs. A tab with no rows is hidden automatically. */
  tabs: [
    {
      id: 'awards', label: 'Awards',
      rows: [
        { lead: 'Apr 2026', title: 'Outstanding Graduate Poster Award', sub: 'Ranked top among graduate students across all engineering departments, University of Missouri' },
        { lead: 'Feb 2026', title: 'Winner — Agentic AI for Real-World Impact Hackathon', sub: 'Built an AI-driven Campus Safety Infrastructure Analysis System' },
        { lead: 'March 2026', title: '3rd Place - Show Me Course Projects ', sub: 'Built FaceGuard-AI is a deepfake detection system designed to identify manipulated media, combat misinformation, and protect public trust.' },
        { lead: 'August 2024', title: 'Full Tuition Scholarship', sub: 'M.S. in Computer Science, University of Missouri, Columbia' }
        // { lead: 'July 2022',     title: 'Smart India Hackathon Finalist', sub: 'Top 5 teams nationwide · email spoofing detection, sponsored by the Ministry of External Affairs, India' }
      ]
    },
    { 
      id: 'experience', label: 'Experience',
      rows: [
        { lead: 'Aug 2024 – now', title: 'Graduate Research Assistant', sub: 'University of Missouri · LLM security through adversarial robustness, activation-based threat detection, and representation-level safety, alongside RAG and evidence-grounded reasoning for critical-domain applications ' },
        { lead: 'Jun – Jul 2025', title: 'Graduate Student Coordinator · <a href="https://reu.rnet.missouri.edu/REU25.html" target="_blank" rel="noopener noreferrer">NSF REU Program</a>', sub: 'University of Missouri · Coordinated undergraduate research activities, supported student mentorship and project progress, and facilitated research meetings, technical presentations, and program activities.'},
        { lead: 'Jun – Jul 2023', title: 'AI/ML Intern', sub: 'Airports Authority of India, Delhi · LLM-powered chatbot for internal aviation document interaction and workflow automation' },
        { lead: 'Jun – Jul 2022', title: 'Research Assistant', sub: 'MISN Group, IIT Delhi · Federated learning and incentive mechanisms for privacy-preserving healthcare AI' }
      ]
    },
    {
      id: 'education', label: 'Education',
      rows: [
        { lead: '2025 – now',  title: 'Ph.D. in Computer Science', sub: 'University of Missouri, Columbia · Advisor: Dr. Prasad Calyam' },
        { lead: '2024 – 2026', title: 'M.S. in Computer Science', sub: 'University of Missouri, Columbia · Advisor: Dr. Prasad Calyam' },
        { lead: '2020 – 2024', title: 'B.Tech. in Computer Science', sub: 'Jaypee University, Madhya Pradesh, India' }
      ]
    },
    {
      id: 'talks', label: 'Talks',
      rows: [
      {
        lead: 'Oct 2026',
        title: 'Building AI-Ready Campus/Cloud Infrastructure: MLOps for AI-driven Scientific Workflows on AWS',
        sub: 'Hands-on tutorial at Internet2 TechEx 2026, Minneapolis, MN',
        links: [
          { label: 'conference', url: 'https://events.internet2.edu/website/93141/' }
        ]
      },
      {
        lead: 'Oct 2025',
        title: 'AI/ML in Real-World Workflows: Cloud Computing and Fundamentals of RAG',
        sub: 'Invited guest lecture for CSC/EE 8001: End-to-End ML Systems, taught by Dr. Tanu Malik at the University of Missouri',
        links: [
          { label: 'instructor', url: 'https://engineering.missouri.edu/faculty/tanu-malik/' },
          { label: 'slides', url: 'https://mailmissouri-my.sharepoint.com/:b:/g/personal/vs4ky_umsystem_edu/IQDIq50uioGjRb1fDxIabX6uARLy4sbG-H2wDW4o41HEimk?e=PA2hQh' }
        ]
      },
      {
        lead: 'Sep 2025',
        title: 'CyberTraining: Cloud Computing and AI/ML for Engineering Research',
        sub: 'Six-week seminar series for graduate Industrial Engineering students under Dr. Sharan Srinivas at the University of Missouri',
        links: [
          { label: 'instructor', url: 'https://srinivas-sharan.github.io/' }
        ]
      }
      ]
    }
    // {
    //   id: 'grants', label: 'Grants',
    //   rows: [
    //     { lead: '[Year]', title: '[Grant or funding source]', sub: '[Funder · project]' }
          // APEX course its with a grant with umkc and we are one of the tutors 
    //   ]
    // }
  ],

  /* ---------------- Gallery. Put photos in /images/gallery and set `src`.
     category: conf | talks | life                                          */
  galleryCategories: [
    { id: 'conf',  label: 'Conferences' },
    { id: 'talks', label: 'Posters & Talks' },
    { id: 'life',  label: 'Lab & Life' },
    { id: 'hack', label: 'Hackathons' },
  ],
  gallery: [
    { src: 'images/gallery/research-day.jpg', category: 'talks', date: 'Apr 2026',   caption: 'Winner of the Outstanding Graduate Poster Award' },
    { src: 'images/gallery/tigertown.JPG', category: 'talks', date: 'Feb 2026',   caption: 'Winning the Agentic AI for Real-World Impact Hackathon' },
    { src: 'images/gallery/CIKM.jpg', category: 'conf',  date: 'Nov 2025',       caption: 'Presenting at ACM CIKM 2025' },
    { src: 'images/gallery/kayak.jpg', category: 'life',  caption: 'A day out kayaking' },
    { src: 'images/gallery/football.jpg', category: 'life',   caption: 'FIFA 2026 World Cup!!' },
    { src: 'images/gallery/datacenter.jpg', category: 'life', caption: 'Geeking out at the data center' }
  ],

  lastUpdated: 'Nov 2026'
};
