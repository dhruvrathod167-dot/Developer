export const PROFILE = {
  name: 'Dhruv Rathod',
  firstName: 'Dhruv',
  lastName: 'Rathod',
  role: 'Python Django Developer',
  subrole: 'Full-Stack Engineer',
  location: 'Ahmedabad, India',
  email: 'dhruvrathod167@gmail.com',
  phone: '+91 9558779062',
  phoneHref: '+919558779062',
  photo: '/Dhruv_Photo.jpeg',
  positioning:
    'Building fast, reliable full-stack web applications with Python, Django, and modern JavaScript.',
  summary:
    "I'm a Python Django developer who builds full-stack web applications end to end — from database schema to responsive UI. I care about clean backend architecture, performant APIs, and interfaces that feel effortless to use.",
  philosophy:
    'Good software is invisible. It loads fast, breaks rarely, and gets out of the user\u2019s way.',
};

export const MARQUEE_ITEMS = [
  'Python',
  'Django',
  'REST APIs',
  'JavaScript',
  'HTML',
  'CSS3',
  'SQL',
  'Responsive Design',
];

export const STATS = [
  { value: 6, suffix: '+', label: 'Projects built' },
  { value: 4, suffix: '', label: 'Stacks shipped' },
  { value: 2, suffix: '+', label: 'Years building' },
];

export const EXPERIENCE = {
  role: 'Python Django Intern',
  company: 'Coding Cloud Company',
  location: 'Ahmedabad, India',
  period: '2024 \u2014 Present',
  summary:
    'Built and maintained full-stack Django web applications, integrating databases and REST APIs for dynamic, responsive products.',
  achievements: [
    'Built full-stack web applications in Python and Django, shipping user-facing features end to end.',
    'Developed backend functionality and integrated relational databases for dynamic, data-driven pages.',
    'Improved website performance and optimized application responsiveness across devices.',
    'Integrated RESTful APIs to extend application functionality and connect external services.',
    'Conducted code reviews to uphold code quality and engineering best practices.',
    'Maintained and updated live websites for improved UX and responsiveness.',
  ],
};

export const FEATURED_PROJECT = {
  title: 'Luxury Brand Furniture',
  subtitle: 'E-commerce Platform',
  year: '2024',
  role: 'Full-Stack Developer',
  cover: '/project-furniture-1.jpg',
  gallery: [
    '/project-furniture-2.jpg',
    '/project-furniture-3.jpg',
    '/project-furniture-4.jpg',
  ],
  problem:
    'A luxury furniture brand needed a full-stack e-commerce platform that could showcase a curated product catalog with a premium storefront, while keeping backend-driven dynamic pages fast and maintainable.',
  approach:
    'I architected the platform on Django with a normalized relational schema, built a responsive storefront with semantic HTML, CSS, and JavaScript, and used Bootstrap for a consistent component system. The catalog, product detail, and admin flows are all backend-driven so the brand can manage inventory without touching code.',
  decisions: [
    {
      title: 'Backend-driven catalog',
      body: 'Product, category, and inventory data live in a normalized relational schema, rendered server-side so every page is dynamic and SEO-friendly.',
    },
    {
      title: 'Responsive storefront',
      body: 'A mobile-first layout built with semantic HTML, CSS3, and JavaScript, layered with Bootstrap for a consistent, fast component system.',
    },
    {
      title: 'Database flexibility',
      body: 'Configured for SQLite in development and MySQL in production, so the schema scales with the brand without a rewrite.',
    },
  ],
  stack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite', 'MySQL'],
  outcome:
    'A full-stack luxury e-commerce platform with a responsive storefront and a backend the brand can manage independently \u2014 fast, maintainable, and ready to scale.',
  code: `# catalog/models.py
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=120)
    slug = models.SlugField(unique=True)

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    in_stock = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.name`,
};

export const SKILLS = [
  {
    group: 'Backend',
    items: ['Python', 'Django', 'RESTful APIs', 'Database Integration', 'SQLite', 'MySQL'],
  },
  {
    group: 'Frontend',
    items: ['HTML', 'CSS3', 'JavaScript', 'Responsive Design', 'JS Frameworks'],
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Computer Applications',
  short: 'BCA',
  school: 'Asia Pacific College',
  address: 'Usmanpura, Ahmedabad, Gujarat, India',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/', handle: '@dhruvrathod' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', handle: 'in/dhruvrathod' },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
