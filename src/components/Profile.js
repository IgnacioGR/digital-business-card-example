import "./Profile.css";

export function Profile() {
	return (
		<div className="Profile">
			<img src="http://placeimg.com/640/480/sports" alt="" />
			<h3>Ignacio Gil</h3>
			<h5>Frontend Developer</h5>
			<div className="webpage">
				<a href="https://ignaciogr.github.io" target="_blank" rel="noreferrer">
					ignaciogr.github.io
				</a>
			</div>
			<div className="button-section">
				<button>Email</button>
				<button>Linkedin</button>
			</div>
		</div>
	);
}
