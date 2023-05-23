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
	highlights: {
		title: string;
		points: string[];
	}[];
};

export type Skill = {
	name: string;
	iconUrl?: string;
	status?: 'learning' | 'proficient' | 'expert';
	since?: string;
};

export type Project = {
	title: string;
	summary: string;
	tech: string | string[];
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
		{ name: 'Angular', status: 'expert' },
		{ name: 'SvelteKit', status: 'proficient' },
		{ name: 'Supabase', status: 'proficient' },
		{ name: 'Firebase', status: 'expert' },
		{ name: 'Algolia', status: 'proficient' },
		{ name: 'Mapbox', status: 'proficient' },
		{ name: 'Jest', status: 'proficient' },
		{ name: 'Playwright', status: 'proficient' },
		{ name: 'Vitest', status: 'proficient' },
		{ name: 'TypeScript', status: 'expert' },
		{ name: 'Postgres', status: 'proficient' },
		{ name: 'NoSQL', status: 'proficient' },
		{ name: 'Serverless', status: 'proficient' },
		{ name: 'Cloud Services', status: 'expert' },
		{ name: 'Prisma', status: 'proficient' },
		{ name: 'Tailwind CSS', status: 'proficient' },
		{ name: 'CI/CD Pipelines', status: 'expert' },
		{ name: 'Business Planning', status: 'proficient' },
		{ name: 'Financial Modeling', status: 'proficient' },
		{ name: 'Competitive Analysis', status: 'proficient' },
		{ name: 'Lean UX', status: 'proficient' },
		{ name: 'Wireframing', status: 'proficient' },
		{ name: 'Prototyping', status: 'proficient' },
		{ name: 'Figma', status: 'proficient' },
		{ name: 'Illustrator', status: 'proficient' },
		{ name: 'Balsamiq', status: 'proficient' },
		{ name: 'Proto.io', status: 'proficient' },
		{ name: 'Project Management', status: 'proficient' },
	],

	experience: [
		{
			company: 'BuddoBot Inc.',
			title: 'Software Engineer, Head of Research & Development',
			start: 'July 2020',
			end: 'Present',
			location: 'Remote',
			private: false,
			companyDescription:
				'Cybersecurity company that provides Hacking as a Service (HaaS) to Fortune 500 companies.',
			summary: `Led the ideation, development, and business planning of special projects for BuddoBot.`,
			highlights: [
				{
					title: 'Software Development & Cloud Architecture',
					points: [
						'Developed software using technologies such as Angular, SvelteKit, Supabase, Firebase, Algolia, Mapbox, Jest, Playwright, Vitest, TypeScript, Postgres, NoSQL, serverless, cloud services, Prisma, and Tailwind CSS',
						'Established CI/CD pipelines and ensured seamless deployment of applications'
					]
				},
				{
					title: 'Business Planning & Financial Modeling',
					points: [
						'Created comprehensive business plans, financial models, and projections for special projects and ventures',
						'Collaborated with legal teams and conducted competitive analysis to ensure the success of projects'
					]
				},
				{
					title: 'Lean UX & Design',
					points: [
						'Employed Lean UX methodologies, such as wireframing and prototyping, to design user-centered applications',
						'Utilized design tools like Figma, Illustrator, Balsamiq, and Proto.io for creating visually appealing and functional designs'
					]
				},
				{
					title: 'Project Management & Adaptability',
					points: [
						'Managed projects with low autonomy, rapidly learning new technologies and adapting to challenges',
						'Navigated projects covered by NDAs, demonstrating value added without revealing sensitive information'
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
			companyDescription: `America's second-largest federal credit union, offering Best-in-Class rates on car loans and home mortgages, market-leading financial services.`,
			summary: `Developed custom software solutions to enhance operational efficiency and effectiveness for a leading credit union.`,
			highlights: [
				{
					title: 'Mortgage Loan Quality Assurance Tool',
					points: [
						'Developed a custom platform that enabled Quality Assurance (QA) analysts to add tests and rules to specific loan criteria to ensure loans were correct and compliant',
						'Replaced a costly version of software with a more efficient solution built using Angular 12 and Sharepoint Lists REST API'
					]
				},
				{
					title: 'Procedure Repository',
					points: [
						'Designed and developed a platform for the Business Controls team to write, publish, audit, and certify hundreds of procedure documents',
						'Users can search, favorite, pin, and make suggestions for changes to these procedures',
						'Replaced a shared folder of PDF documents, resulting in a more efficient and user-friendly system'
					]
				},
				{
					title: 'Mortgage Process Timelines',
					points: [
						'Created infographics using Adobe Illustrator that walked through each day of the mortgage process from initial call to funding',
						'Designed as a quick reference placemat for employees to use while talking to members, improving their ability to provide accurate and efficient service'
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
			companyDescription:
				'Leading provider of closing, title and escrow software, with more than 60,000 users.',
			summary: `Engineer for SoftPro’s integration platform. Responsible for developing and maintaining the framework used by
                hundreds of vendors in the title and escrow industry.`,
			highlights: [
				{
					title: 'Software Development',
					points: [
						'Lead front-end Angular SaaS platform development and contribute to back-end C# solutions for the integration team',
						'Ensure code quality by unit testing code with Jasmine, Karma, and MS Test'
					]
				},
				{
					title: 'Cloud Services',
					points: [
						'Implement and monitor CI/CD pipelines through Azure Devops to deliver code quickly',
						'Collaborator in migration from monolith to a cloud microservice based architecture in Azure',
						'Utilize Azure services such as Application Insights, Cosmos DB, Key Vault, and Service Fabric'
					]
				},
				{
					title: 'Other Responsibilities',
					points: [
						'Serves as Proxy Scrum Master to facilitate Scrum activites to drive team progess towards goals',
						'Certifications: AZ-900 Azure Fundamentals, AZ-203 Azure Associate Developer (In Progress), SAFe Certified Scrum Master (In Progress)'
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
					]
				},
				{
					title: 'Employee Service and Support Platform',
					points: [
						'Replaced Outlook email buckets and manual Excel tracking sheets to improve management line of sight into process inefficiencies',
						'The application used to resolve over 4,000 tickets in its first year'
					]
				},
				{
					title: 'Project Intake System',
					points: [
						'Formal system of intake, approval, and prioritization of projects from business analysts',
						'Saved time and effort by standardizing the request form for new product and initiatives, allowing project managers to focus efforts on proper prioritization and planning',
						'Increased visibility into the project pipeline for business analysts'
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
			companyDescription:
				'Human capital management SaaS company with over 70 employees, providing web-based solutions for talent acquisition and development',
			summary: `Led project integrations with client teams and third-party ATS and HRIS systems. Designed, engineered and
                implemented products to improve internal processes and business performance.`,
			highlights: [
				{
					title: 'Automated Client Reporting Platform',
					points: [
						'Application created to allow client success teams to quickly monitor client metrics including usage, score distributions, and demographics',
						'Reduced the time to complete client reporting efforts from an average of 6-8 hours per report, to under 5 minutes for over 250 reports per year',
						'Allowed client teams to share reporting metrics with clients on a regular basis, resulting in higher client engagement'
					]
				},
				{
					title: 'Client Health Monitoring Application',
					points: [
						'Automated system built to monitor client usage metrics. Delivered client teams weekly automated email updates on usage increases and decreases, allowing teams to better understand their clients’ engagement',
						'Empowered client teams to proactively manage client relationships',
						'Generated sales opportunities when usage numbers increase to contract maximums',
						'Developed a scoring algorithm for client health, used to help client teams forecast renewals and risks'
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
			tech: 'NextJS, Supabase, SSR, Tailwind CSS, Aloglia',
			link: 'https://www.ncwhiskeyhunter.com'
		},
		{
			title: 'Hatch',
			summary: 'Application to save, plan, and prioritize home improvement tasks and projects',
			tech: 'Firebase Functions, Firestore, Angular 9, PWA',
			link: 'https://hatch.nathantipton.me/home'
		},
		{
			title: 'Bird Finder',
			summary:
				'Application that searches for bird species that have been spotted and reported in nearby locations',
			tech: 'Angular 8, SQL Server, Cornell eBird API, Mapbox JS',
			link: 'https://bird.nathantipton.me/home'
		}
	]
};
