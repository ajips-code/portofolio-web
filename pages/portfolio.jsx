import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
			      	Some Project that i have made
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/MenWO.jpeg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Men Wedding Organizer</h4>
			      		<div className="portfolio-category">Web Application</div>
								<p clasName="portfolio-description">
								Aplikasi berbasis web yang menyediakan layanan pemesanan acara penikahan, sunatan,dll
								</p>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/setubully.jpeg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Setubully App</h4>
			      		<div className="portfolio-category">Web Application</div>
								<p clasName="portfolio-description">
								Aplikasi berbasis web yang menyediakan layanan pelaporan bullying disekolah		
								</p>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;