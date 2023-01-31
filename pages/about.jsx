import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
						I'm a student of Akprind Institute of
						Science & Technology Yogyakarta. I took
						the Informatics Engineering Department. I
						love the advances technology and coding
						(programming). I'm a person who likes to
						try new things and i easy to socialize.
						Highly-motivated to study and implement
						in Technology Industry with Informatics
						Engineering basic. Wishing to be able to
						contribute to make realize the Society 4.0
						and 5.0
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;