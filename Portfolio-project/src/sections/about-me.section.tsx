import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Projects',
		items: [
			{
				title: 'Admission Management System',
				place: 'College Project',
				timePeriod: 'April 2025 - June 2025',
				description: (
					<ul>
						<li>
							Contributed significantly to the development of main project{' '}
							<strong>Admission System</strong>, a pivotal project for migrating the traditional admission 
							process to a digital platform.
						</li>
						<li>
							Designed and developed the landing page of the website along with interactive multistep form with
							validation and error handling. Used redux for state management and data fetching. 
							
						</li>
						<li>
							Implemented a user-friendly interface with responsive design, ensuring accessibility and ease of use. </li>
					</ul>
				),
			},
		],
	},
	{
		// title: 'Certification',
		items: [
			{
				title: 'RoadSync',
				place: 'Hack For Impact, IIIT Delhi' ,
				timePeriod: 'March 2025',
				description: (
					<ul>
						<li>
							Developed a web application,{' '} <strong> RoadSync</strong>, a platform that connects drivers with roadside assistance services.
						</li>
						<li>The website offers features such as a smart parking system to ensure hassle-free and organized parking.  </li>
						<li>
							It alerts users about speed limits and upcoming traffic signals while navigating,
							 prioritizing convenience and safety for a smooth driving experience.
						</li>
						<li>Additionally, It predicts vehicle carbon emissions and motivates users to reduce them through a gamified experience.</li>
						<li>
							Called for the offline round of the hackathon at IIIT Delhi . 
						    Secured a place in top 50 teams out of 2500+ participants.
						</li>
					</ul>
				),
			},
		],
	},
	
	{
		// title: 'Certification',
		items: [
			{
				title: 'EduBridge',
				place: 'Education for All' ,
				timePeriod: 'January 2025',
				description: (
					<ul>
						<li>
							Built a web application,{' '} <strong> EduBridge</strong>, a Ed-platform focusing on children of 
							unprivileged sections of the society with educational resources.
						</li>
						<li>EduBridge can provide effective solutions for underprivileged and migrant 
							children by addressing education gaps through:
						</li>
						<li>
							Providing access to quality educational resources , with features like
							GPS-Based School Discovery and all the nearby Educational services and opportuniites.
						</li>
						<li>Additionally, implemented a very simple UI and Multilingual Support in the website for easy navigation .</li>
						<li>
							{/* will paste the code here
							 */}
						</li>
					</ul>
				),
			},
		],
	},
	
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Technology in Information Technology',
				place: 'Maharaja Surajmal Institute of Technology',
				timePeriod: '2024 - 2028',
				description: 'Pursuing B.Tech in Information Technology with a focus on software development and web technologies. Eager to explore opportunities in DevOps and AI/ML.',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Mohd Fawah Khan, a Full Stack Developer
						 currently exploring the field of DevOps and AI/ML.
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Node</strong> for the past <strong>one year</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project for hackathons or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
