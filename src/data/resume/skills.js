// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'DSA',
    competency: 3,
    category: ['Software Engineering'],
  },
  {
    title: 'Object Oriented Programming',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Tesorflow',
    competency: 3,
    category: ['Machine Learning'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'HTML + CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Web Development', 'Languages', 'Machine Learning'],
  },
  {
    title: 'Snowfalke',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'ClickHouse',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'SQL Server',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'RDS',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'DynamoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'React JS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Tailwind CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'Netlify',
    competency: 3,
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'Cloudflare',
    competency: 3,
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'Amplify',
    competency: 3,
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'EC2',
    competency: 3,
    category: ['Deployment', 'Tools'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#40494e',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
