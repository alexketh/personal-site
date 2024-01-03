/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Fire Engine RED',
    position: 'Junior Software Engineer',
    url: 'https://www.fire-engine-red.com/',
    startDate: '2023-10-01',
    endDate: '2022-10-01',
    summary: `Experienced Junior Software Engineer with a proven track record in web development, specializing in Vue.js,
      JavaScript, HTML5, and CSS (including SASS or LESS). I have over 1 year of hands-on experience working
      in Agile/Scrum environments, contributing to the development of enterprise-level, SaaS-based software
      solutions. My proficiency extends to modern frameworks (SPA, MVC, MVVM) and the implementation of
      rigorous testing practices.`,
    highlights: [
      'Leveraged Vue.js to build engaging user interfaces and responsive web applications.',
      'Collaborated closely with cross-functional teams, ensuring effective communication and informed decision-making.',
      'Contributed to the successful deployment of AWS services such as Lambda, S3, and SQS.',
      'Expertise in full-stack development, encompassing frontend and backend technologies.',
      'Actively participated in pair programming sessions, conducted thorough pull request reviews, and played an integral role in Agile ceremonies.',
    ],
  },
  {
    name: 'Fire Engine RED',
    position: 'Software Engineer Intern',
    url: 'https://www.fire-engine-red.com/',
    startDate: '2022-07-01',
    endDate: '2022-10-01',
    summary: `Enthusiastic software development intern with hands-on experience in Vue.js, JavaScript, HTML5,
      and CSS. Contributed to collaborative frontend projects, enhancing user interfaces. Expanded knowledge
      in backend development and full-stack practices, gaining exposure to PHP and Laravel. Engaged in pair
      programming, learning best practices, and collaborated with QA to implement feedback. Equipped with
      foundational skills in frontend technologies and backend practices, ready to contribute to innovative
      projects in a professional software development setting.`,
    highlights: [
      'Developed a foundational understanding of Vue.js, JavaScript, HTML5, CSS (including SASS or LESS), with a focus on frontend development.',
      'Familiarized myself with PHP and Laravel, gaining insights into backend development practices.',
      'Collaborated closely with QA, gaining experience in addressing and implementing changes based on quality assurance feedback.',
      'This internship provided a rich learning experience that has prepared me for a successful career in software development. Eager to apply the skills and knowledge gained to contribute effectively to innovative projects in a professional setting.',
    ],
  },
  {
    name: 'Pannell Community Center',
    position: 'Recreational Aide',
    url: 'http://www.cityofsacramento.org/parksandrec/community-centers/sambonniepannellcenter',
    startDate: '2018-12-01',
    endDate: '2020-06-01',
    summary: `As a Recreational Aide at Pannell Community Center, I played a key role in ensuring a safe 
      and disciplined recreational environment. This included enforcing facility rules and regulations, 
      managing day-to-day operations, and setting up various activity equipment. I actively supported 
      recreation staff in coordinating sports, games, and events, contributing to the vibrant community 
      atmosphere. Additionally, I handled administrative responsibilities, such as paperwork and 
      telephone inquiries.`,
    highlights: [
      'Enforce rules and regulations of recreation facility to maintain discipline and ensure safety while managing daily operations of facility.',
      'Setting up activity equipment such as tables, instruments, electronics, etc.',
      'Assisting recreation staff in conducting sports, games, and events.',
      'Performing administrative tasks such as filling out paperwork and answering telephones.',
    ],
  },
  {
    name: 'Old Navy',
    position: 'Sales Associate',
    url: 'https://oldnavy.com',
    startDate: '2018-06-01',
    endDate: '2019-06-01',
    summary: `As a Sales Associate at Old Navy, I played a pivotal role in driving sales through customer 
      engagement, suggestive selling, and sharing extensive product knowledge. I efficiently processed 
      payments, including totals for purchases, checks, cash, and various credit/debit cards, contributing 
      to seamless transactions. Committed to providing excellent service, I actively engaged and connected 
      with customers, fostering a positive shopping experience and driving profitable sales growth. 
      Additionally, I promoted customer loyalty by educating customers on brand loyalty programs.`,
    highlights: [
      'Drives sales through engagement of customers, suggestive selling, and sharing product knowledge.',
      'Processes payments by totaling purchases, processing checks, cash, and store or other credit and debit cards.',
      'Engage and connect with customers to provide excellent service to drive profitable sales growth.',
      'Promote customer loyalty by educating customers on brand loyalty programs.',
    ],
  },
];

export default work;
