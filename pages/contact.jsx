import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	Fell free to make a contact and be a friend !
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-email">Email: muhammadadji1710@gmail.com</li>
			      	<li className="contact-phone">Phone: +6282247896376</li>
			      	<li className="contact-instagram">Instagram : <a href="https://www.instagram.com/mdjiepr/?hl=id">Djie Pratama</a></li>
			      	<li className="contact-linkedin">Linkedin: <a href="https://www.linkedin.com/in/muhammadadjipr/">Muhammad Adji</a></li>
			      	<li className="contact-whatsapp">Whatsapp: <a href="https://wa.me/6282247896376">082247896376</a></li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;