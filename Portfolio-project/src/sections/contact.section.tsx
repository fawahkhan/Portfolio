import { useState } from 'react';
import { SectionTitle } from '../components/section-title.component';

export const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		// Create mailto link with form data
		const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		);
		
		window.location.href = `mailto:fawahkhanofficial@gmail.com?subject=${subject}&body=${body}`;
		
		// Reset form after submission
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	};

	return (
		<section className='contact-section container' id='contact'>
			<div>
				<SectionTitle
					title='Contact'
					subTitle='ME'
				/>
			</div>
			<div className='contact-content'>
				<div className='contact-info'>
					<h3>GET IN TOUCH</h3>
					<p>
						I'm always excited to discuss new opportunities, collaborate on projects, 
						or just have a chat about technology and development.
					</p>
					<div className='contact-details'>
						<div className='contact-item'>
							<span className='contact-label'>Email:</span>
							<span className='contact-value'>fawahkhanofficial@gmail.com</span>
						</div>
						<div className='contact-item'>
							<span className='contact-label'>Location:</span>
							<span className='contact-value'>India</span>
						</div>
					</div>
				</div>
				
				<form className='contact-form' onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='name'>Name *</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								placeholder='Your Name'
							/>
						</div>
						
						<div className='form-group'>
							<label htmlFor='email'>Email *</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								placeholder='your.email@example.com'
							/>
						</div>
						
						<div className='form-group'>
							<label htmlFor='subject'>Subject</label>
							<input
								type='text'
								id='subject'
								name='subject'
								value={formData.subject}
								onChange={handleChange}
								placeholder='What would you like to discuss?'
							/>
						</div>
						
						<div className='form-group'>
							<label htmlFor='message'>Message *</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={5}
								placeholder='Your message here...'
							/>
						</div>
						
						<button type='submit' className='submit-btn'>
							Send Message
						</button>
					</form>
			</div>
		</section>
	);
};
