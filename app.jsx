
class Home extends React.Component  {
	render() {
		return (
			<div className="main-content home">
				<h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
		);
	}
}

class About extends React.Component  {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}
class Teachers extends React.Component  {
	render(){
		return(
		<div className="main-content">
			<h2>Teachers</h2>
			<ul className="group">
				<li className="teacher">
					<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" alt="teacher"/>
					<h3>Angie McAngular</h3>
					<p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
				</li>
				<li className="teacher">
					<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png" alt="teacher"/>
					<h3>Angie McAngular</h3>
					<p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
				</li>
				<li className="teacher">
					<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png" alt="teacher"/>
					<h3>Geo Lo Cation</h3>
					<p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.</p>
				</li>
				<li className="teacher">
					<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" alt="teacher"/>
					<h3>Ecma Stuffp</h3>
					<p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.</p>
				</li>
				<li className="teacher">
					<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" alt="teacher"/>
					<h3>Jay Query</h3>
					<p>Angie is aJay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher. web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
				</li>	
				<li className="teacher">
					<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" alt="teacher"/>
					<h3>Json Babel</h3>
					<p>Json Bales is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher. web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
				</li>								
			</ul>
		</div>
		);
	}
}

class Cursos extends React.Component  {
	render() {
		const {route} = this.props;
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			default: 'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className="course-nav">
						<li><a href='/courses/html'>HTML</a></li>
						<li><a href='/courses/css'>CSS</a></li>
						<li><a href='/courses/javascript'>JavaScript</a></li>
					</ul>
				</div>
				<div>
					<ul>
						<li className ="curse media group">
							<img className="course-img" src="https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png" alt="course"/>
							<div>
								<h3>How to make a Website</h3>
								<p>If you’ve never built a website before and you have no coding or design experience,
									 this is the place to start. In this project, we learn how to build a modern portfolio 
									 website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
									  Next, we learn how to build custom web pages with an image gallery and contact page. 
									  Finally, we walk through how to share a website live on the web.</p>
							</div>
						</li>
						<li className ="curse media group">
						<img className="course-img" src="https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png" alt="course"/>
							<div>
								<h3>How to make a Website</h3>
								<p>If you’ve never built a website before and you have no coding or design experience,
									 this is the place to start. In this project, we learn how to build a modern portfolio 
									 website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
									  Next, we learn how to build custom web pages with an image gallery and contact page. 
									  Finally, we walk through how to share a website live on the web.</p>
							</div>
						</li>
						<li className ="curse media group">
							<img className="course-img" src="https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png" alt="course"/>
							<div>
								<h3>HTML Video and Audio</h3>
								<p>If you’ve never built a website before and you have no coding or design experience,
									 this is the place to start. In this project, we learn how to build a modern portfolio 
									 website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
									  Next, we learn how to build custom web pages with an image gallery and contact page. 
									  Finally, we walk through how to share a website live on the web.</p>
							</div>
						</li>
						<li className ="curse media group">
						<img className="course-img" src="https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png" alt="course"/>
							<div>
								<h3>SVG Basics</h3>
								<p>If you’ve never built a website before and you have no coding or design experience,
									 this is the place to start. In this project, we learn how to build a modern portfolio 
									 website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
									  Next, we learn how to build custom web pages with an image gallery and contact page. 
									  Finally, we walk through how to share a website live on the web.</p>
							</div>
						</li>
						<li className ="curse media group">
						<img className="course-img" src="https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png" alt="course"/>
							<div>
								<h3>Responsive Images</h3>
								<p>If you’ve never built a website before and you have no coding or design experience,
									 this is the place to start. In this project, we learn how to build a modern portfolio 
									 website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
									  Next, we learn how to build custom web pages with an image gallery and contact page. 
									  Finally, we walk through how to share a website live on the web.</p>
							</div>
						</li>
						<li className ="curse media group">
						<img className="course-img" src="https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png" alt="course"/>
							<div>
								<h3>Introduccion a Html y CSS </h3>
								<p>If you’ve never built a website before and you have no coding or design experience,
									 this is the place to start. In this project, we learn how to build a modern portfolio 
									 website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
									  Next, we learn how to build custom web pages with an image gallery and contact page. 
									  Finally, we walk through how to share a website live on the web.</p>
							</div>
						</li>
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component  {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}

	render() {
		let Child;
		let propsForcursos = null;
		switch (this.state.route) {
			case '/home':
				Child = Home;
				break;
			case '/about':
				Child = About;
				break;
			case '/teachers':
				Child = Teachers;
				break;
			case '/cursos':
				Child = Cursos;
				break;
			case '/cursos/html':
				Child = cursos;
				propsForcursos = 'html';
				break;
			case '/cursos/css':
				Child = Cursos;
				propsForcursos = 'css';
				break;
			case '/cursos/javascript':
				Child = Cursos;
				propsForcursos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
			<div className="data-reactroot container">
           <header>
		   <span className="icn-logo">
				< i className="material-icons">code</i>
			</span>		
               <ul className="main-nav">
			   <li>
                     <a href="#/home">Home</a>
                  </li>
                  <li>
                     <a href="#/about">About</a>
                  </li>
				  <li>
                     <a href="#/teachers">Teachers</a>
                  </li>
                  <li>
                     <a href="#/cursos">Cursos</a>
                  </li>
               </ul>
			   {
	         	propsForcursos?
			         <Child route = {propsForcursos} />
		         :
			         <Child />
	         }
			</header>{' '}
			</div>
		)
	}
}
 

ReactDOM.render(<App/>, document.getElementById("container"));
