export type ResumeV1 = {
	name: string;
	photoUrl?: string;
	title: string;
	contact: ContactInformation[];
	summary: string;
	experience: Experience[];
	education: Education[];
	skills: Skill[];
	projects: Project[];
};

export type Education = {
	school: string;
	degree: string;
	concentration: string;
	date: string;
};

export type ContactInformation = {
	title: string;
	value: string;
	iconUrl?: string;
	type: 'phone' | 'email' | 'website' | 'linkedin' | 'github' | 'social';
};

export type Experience = {
	company: string;
	title: string;
	start: string;
	end: string;
	location: string;
	companyDescription: string;
	summary: string;
	private: boolean;
	skills: Skill[];
	highlights: {
		title: string;
		points: string[];
		skills?: Skill[];
	}[];
};

export type Skill = {
	name: string;
};

export type Project = {
	title: string;
	summary: string;
	skills: Skill[];
	link: string;
};

export const RESUME_V1: ResumeV1 = {
	name: 'Nathan Tipton',
	photoUrl: 'https://cdn.midjourney.com/9472548a-0fde-4a27-b029-93f0a655b86d/0_0.png',
	title: 'Developer & Designer',
	contact: [
		{
			title: 'Phone',
			value: '817-821-3936',
			iconUrl: 'https://img.icons8.com/ios-filled/50/000000/phone.png',
			type: 'phone'
		},
		{
			title: 'Email',
			value: 'thomas.n.tipton@gmail.com',
			iconUrl: 'https://img.icons8.com/ios-filled/50/000000/email.png',
			type: 'email'
		},
		{
			title: 'LinkedIn',
			value: 'https://www.linkedin.com/in/tntipton',
			iconUrl: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
			type: 'linkedin'
		},
		{
			title: 'Website',
			value: 'https://www.nathantipton.me',
			iconUrl: 'https://img.icons8.com/ios-filled/50/000000/domain.png',
			type: 'website'
		}
	],

	summary: `Creative and ambitious software developer with ten years of demonstrated experience in the
        development, design, implementation, and maintenance of modern web applications. Highly
        effective at understanding business needs and providing innovative solutions.`,
	skills: [
		{ name: 'Angular' },
		{ name: 'SvelteKit' },
		{ name: 'Supabase' },
		{ name: 'Firebase' },
		{ name: 'Algolia' },
		{ name: 'Mapbox' },
		{ name: 'Jest' },
		{ name: 'Playwright' },
		{ name: 'Vitest' },
		{ name: 'TypeScript' },
		{ name: 'Postgres' },
		{ name: 'NoSQL' },
		{ name: 'Serverless' },
		{ name: 'Cloud Services' },
		{ name: 'Prisma' },
		{ name: 'Tailwind CSS' },
		{ name: 'CI/CD Pipelines' },
		{ name: 'Business Planning' },
		{ name: 'Financial Modeling' },
		{ name: 'Competitive Analysis' },
		{ name: 'Lean UX' },
		{ name: 'Wireframing' },
		{ name: 'Prototyping' },
		{ name: 'Figma' },
		{ name: 'Illustrator' },
		{ name: 'Balsamiq' },
		{ name: 'Proto.io' },
		{ name: 'Project Management' },
	],

	experience: [
		{
			company: 'BuddoBot Inc.',
			title: 'Software Engineer, Head of Research & Development',
			start: 'July 2020',
			end: 'Present',
			location: 'Remote',
			private: false,
			skills:[],
			companyDescription:
				'Cybersecurity company that provides Hacking as a Service (HaaS) to Fortune 500 companies.',
			summary: `Led the ideation, development, and business planning of special projects for BuddoBot.`,
			highlights: [
				{
					title: 'Software Development & Cloud Architecture',
					points: [
						'Develop software using technologies such as Angular, SvelteKit, Supabase, Firebase, Algolia, Mapbox, Jest, Playwright, Vitest, TypeScript, Postgres, NoSQL, serverless, cloud services, Prisma, and Tailwind CSS',
						'Establish CI/CD pipelines and ensure seamless deployment of applications'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'SvelteKit' },
						{ name: 'Supabase' },
						{ name: 'Firebase' },
						{ name: 'Algolia' },
						{ name: 'Mapbox' },
						{ name: 'Jest' },
						{ name: 'Playwright' },
						{ name: 'Vitest' },
						{ name: 'TypeScript' },
						{ name: 'Postgres' },
						{ name: 'NoSQL' },
						{ name: 'Serverless' },
						{ name: 'Cloud Services' },
						{ name: 'Prisma' },
						{ name: 'Tailwind CSS' },
						{ name: 'CI/CD Pipelines' },
						{ name: 'GitHub' }
					]

				},
				{
					title: 'Business Planning & Financial Modeling',
					points: [
						'Create comprehensive business plans, financial models, and projections for special projects and ventures',
						'Collaborate with legal teams and conduct competitive analysis to ensure the success of projects'
					],
					skills: [
						{ name: 'Business Planning' },
						{ name: 'Financial Modeling' },
						{ name: 'Competitive Analysis' }

					]
				},
				{
					title: 'Lean UX & Design',
					points: [
						'Employ Lean UX methodologies, such as wireframing and prototyping, to design user-centered applications',
						'Utilize design tools like Figma, Illustrator, Balsamiq, and Proto.io for creating visually appealing and functional designs'
					],
					skills: [
						{ name: 'Lean UX' },
						{ name: 'Wireframing' },
						{ name: 'Prototyping' },
						{ name: 'Figma' },
						{ name: 'Illustrator' },
						{ name: 'Balsamiq' },
						{ name: 'Proto.io' }
					]
				},
				{
					title: 'Project Management & Adaptability',
					points: [
						'Manage projects with low autonomy, rapidly learn new technologies and adapt to challenges',
						'Navigate projects covered by NDAs, demonstrating value added without revealing sensitive information'
					],
					skills: [
					]
				}
			]
		},
		{
			company: 'PenFed Credit Union',
			title: 'Consultant (Part-Time Contract)',
			start: 'March 2020',
			end: 'Present',
			location: 'Remote',
			private: true,
			skills: [],
			companyDescription: `America's second-largest federal credit union, offering Best-in-Class rates on car loans and home mortgages, market-leading financial services.`,
			summary: `Developed custom software solutions to enhance operational efficiency and effectiveness for a leading credit union.`,
			highlights: [
				{
					title: 'Mortgage Loan Quality Assurance Tool',
					points: [
						'Develop a custom platform that enables Quality Assurance (QA) analysts to add tests and rules to specific loan criteria to ensure loans are correct and compliant',
						'Replace a costly version of software with a more efficient solution built using Angular 12 and Sharepoint Lists REST API'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'Sharepoint' },
						{ name: 'REST API' },
						{ name: 'TypeScript' },
						{ name: 'Material Design' },
						{ name: 'GitHub' }
					]
				},
				{
					title: 'Procedure Repository',
					points: [
						'Design and develop a platform for the Business Controls team to write, publish, audit, and certify hundreds of procedure documents',
						'Enable users to search, favorite, pin, and make suggestions for changes to these procedures',
						'Replace a shared folder of PDF documents, resulting in a more efficient and user-friendly system'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'Sharepoint' },
						{ name: 'REST API' },
						{ name: 'TypeScript' },
						{ name: 'Material Design' },
						{ name: 'GitHub' }
					]
				},
				{
					title: 'Mortgage Process Timelines',
					points: [
						'Create infographics using Adobe Illustrator that walk through each day of the mortgage process from initial call to funding',
						'Design as a quick reference placemat for employees to use while talking to members, improving their ability to provide accurate and efficient service'
					],
					skills: [
						{ name: 'Illustrator' },
						{ name: 'Graphic Design' },
						{ name: 'Infographics' }
					]
				}
			]
		},
		{
			company: 'SoftPro Corp.',
			title: 'Software Engineer',
			start: 'July 2019',
			end: 'July 2020',
			location: 'Raleigh, NC',
			private: false,
			skills: [],
			companyDescription:
				'Leading provider of closing, title and escrow software, with more than 60,000 users.',
			summary: `Engineer for SoftPro's integration platform. Responsible for developing and maintaining the framework used by
                hundreds of vendors in the title and escrow industry.`,
			highlights: [
				{
					title: 'Software Development',
					points: [
						'Led front-end Angular SaaS platform development and contributed to back-end C# solutions for the integration team',
						'Ensured code quality by unit testing code with Jasmine, Karma, and MS Test'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'C#' },
						{ name: 'TypeScript' },
						{ name: 'Jasmine' },
						{ name: 'Karma' },
						{ name: '.NET' },
						{ name: 'Azure' },
					]
				},
				{
					title: 'Cloud Services',
					points: [
						'Implemented and monitored CI/CD pipelines through Azure Devops to deliver code quickly',
						'Collaborated in migration from monolith to a cloud microservice based architecture in Azure',
						'Utilized Azure services such as Application Insights, Cosmos DB, Key Vault, and Service Fabric'
					],
					skills: [
						{ name: 'Azure' },
						{ name: 'CI/CD Pipelines' },
					],
				},
				{
					title: 'Other Responsibilities',
					points: [
						'Served as Proxy Scrum Master to facilitate Scrum activities to drive team progress towards goals',
						'Certifications: AZ-900 Azure Fundamentals, AZ-203 Azure Associate Developer, SAFe Certified Scrum Master'
					],
					skills: [
						{ name: 'Scrum' },
						{ name: 'Agile' },
						{ name: 'SAFe' },
					]
				}
			]
		},
		{
			company: 'USAA',
			title: 'Senior Designer',
			start: 'July 2017',
			end: 'July 2019',
			location: 'San Antonio, TX',
			private: false,
			skills: [],
			companyDescription:
				'Fortune 500 diversified financial services group with over 30,000 employees',
			summary: `Responsible for the ideation, design, development, delivery, and support of tools and web applications used by Real
                Estate employees.`,
			highlights: [
				{
					title: 'Mortgage Calculator Suite',
					points: [
						'Suite of mortgage calculators designed to show and compare mortgage scenarios',
						'Enabled loan officers to have educated and in-depth conversations with members about their potential loan options',
						'Finalist in the Employee Experience category for USAA Bank Beautiful Experience Award'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'TypeScript' },
						{ name: 'Material Design' }
					]
				},
				{
					title: 'Employee Service and Support Platform',
					points: [
						'Replaced Outlook email buckets and manual Excel tracking sheets to improve management line of sight into process inefficiencies',
						'The application used to resolve over 4,000 tickets in its first year'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'TypeScript' },
						{ name: 'Material Design' }
					]
				},
				{
					title: 'Project Intake System',
					points: [
						'Formal system of intake, approval, and prioritization of projects from business analysts',
						'Saved time and effort by standardizing the request form for new product and initiatives, allowing project managers to focus efforts on proper prioritization and planning',
						'Increased visibility into the project pipeline for business analysts'
					],
					skills: [
						{ name: 'Angular' },
						{ name: 'TypeScript' },
						{ name: 'Material Design' }

					]
				}
			]
		},
		{
			company: 'OutMatch',
			title: 'Technical Project Implementation Specialist',
			start: 'December 2015',
			end: 'July 2017',
			location: 'Dallas, TX',
			private: false,
			skills: [],
			companyDescription:
				'Human capital management SaaS company with over 70 employees, providing web-based solutions for talent acquisition and development',
			summary: `Led project integrations with client teams and third-party ATS and HRIS systems. Designed, engineered and
                implemented products to improve internal processes and business performance.`,
			highlights: [
				{
					title: 'Automated Client Reporting Platform',
					points: [
						'Created an application that allowed client success teams to quickly monitor client metrics including usage, score distributions, and demographics',
						'Reduced the time to complete client reporting efforts from an average of 6-8 hours per report, to under 5 minutes for over 250 reports per year',
						'Enabled client teams to share reporting metrics with clients on a regular basis, resulting in higher client engagement'
					],
					skills: [
						{ name: 'C#' },
						{ name: 'SQL Server' },
						{ name: 'MySQL' },
						{ name: 'Kendo UI' },
						{ name: 'REST API' },
						{ name: 'Highcharts' }
					]
				},
				{
					title: 'Client Health Monitoring Application',
					points: [
						'Built an automated system to monitor client usage metrics. Delivered client teams weekly automated email updates on usage increases and decreases, enabling teams to better understand their clients’ engagement',
						'Empowered client teams to proactively manage client relationships',
						'Generated sales opportunities when usage numbers increased to contract maximums',
						'Developed a scoring algorithm for client health, used to help client teams forecast renewals and risks'
					],
					skills: [
						{ name: 'C#' },
						{ name: 'SQL Server' },
						{ name: 'MySQL' },
						{ name: 'Salesforce' },
						{ name: 'Kendo UI' },
						{ name: 'REST API' },
						{ name: 'Highcharts' }
					]
				}
			]
		},
		{
			company: 'OutMatch',
			title: 'Junior Developer / Support Analyst',
			start: 'April 2014',
			end: 'December 2015',
			location: 'Dallas, TX',
			private: false,
			skills: [],
			companyDescription:
				'Human capital management SaaS company with over 70 employees, providing web-based solutions for talent acquisition and development',
			summary: `Responsible for developing features on existing platforms while also solving escalated support issues from clients and
                integration partners, as well as communicating incidents/outages to the company, our clients, and applicants.`,
			highlights: [
				{
					title: 'Software Development',
					points: [
						'Developed web applications using ASP.NET MVC in a fast-paced environment using the Kanban methodology',
						'Created SQL queries, database scripts, and other tools for added support efficiency and scalability',
						'Leveraged JIRA to plan, track, and manage stories and issues',
						'Participated in peer code reviews with Review Assistant and Mercurial as the versioning system',
						'Created deployment and build configurations with TeamCity',
						'Planned and organized numerous support team initiatives',
						'Managed and configured ZenDesk features and settings'
					],
					skills: [
						{ name: 'C#' },
						{ name: 'ASP.NET MVC' },
						{ name: 'SQL Server' },
						{ name: 'Mercurial' },
						{ name: 'Agile' },
						{ name: 'Zendesk' },
						{ name: 'Kanban' }
					]
				}
			]
		}
	],
	education: [
		{
			school: 'The University of Texas at Arlington',
			degree: 'Bachelor of Business Administration',
			concentration: 'Information Systems',
			date: 'Graduated December 2013'
		}
	],
	projects: [
		{
			title: 'NC Whiskey Hunter',
			summary:
				'Application to search for and track North Carolina whiskey distilleries and their products',
			skills: [
				{ name: 'NextJS' },
				{ name: 'React' },
				{ name: 'Supabase' },
				{ name: 'SSR' },
				{ name: 'Tailwind CSS' },
				{ name: 'Algolia' }
			],
			link: 'https://www.ncwhiskeyhunter.com'
		},
		{
			title: 'Hatch',
			summary: 'Application to save, plan, and prioritize home improvement tasks and projects',
			skills: [
				{ name: 'Angular' },
				{ name: 'TypeScript' },
				{ name: 'Firebase' },
				{ name: 'Firestore' },
				{ name: 'Firebase Functions' },
				{ name: 'PWA' }
			],
			link: ''
		},
		{
			title: 'Bird Finder',
			summary:
				'Application that searches for bird species that have been spotted and reported in nearby locations',
			skills: [
				{ name: 'Angular' },
				{ name: 'TypeScript' },
				{ name: 'SQL Server' },
				{ name: 'Mapbox' },
				{ name: 'Rest API' },
				{ name: 'PWA' }
			],
			link: 'https://bird.nathantipton.me/home'
		}
	]
};
