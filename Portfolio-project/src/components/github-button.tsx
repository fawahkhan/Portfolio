import { FaGithub } from 'react-icons/fa';

type TGithubButton = {
	href: string;
	className?: string;
};

export const GithubButton = ({ href, className }: TGithubButton) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`github-btn ${className || ''}`}
		>
			<FaGithub className="github-icon" />
			<span>View Code</span>
		</a>
	);
};
