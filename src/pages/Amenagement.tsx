/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import Head from 'next/head';

import styles from '../styles/pages/Amenagement.module.scss';
import Button from '../components/Buttons';

const Amenagement: NextPage = () => {
	return (
		<div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
			<Head>
				<title>101 Petits Travaux | Aménagement</title>
				<meta
					name='description'
					content='101 petits Travaux Fernando Monteiro'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className={styles.hero}>
				<h1>Aménagement</h1>
			</section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, transform: 'translateX(0rem)' },
					hidden: { opacity: 0, transform: 'translateX(-8rem)' },
				}}
				className={styles.description}
			>
				<h2>
					NOS SERVICES POUR VOS PROJETS D&apos;AMENAGEMENTS NEUVE SUR ORLEANS ET
					SES ALENTOURS
				</h2>

				<div className={styles['description-zone']}>
					<img
						className={styles['description-img']}
						src='/assets/imgs/amenagement/presentation_carousel_01.webp'
						alt='101 petits travaux, amenagement'
					/>
					<p>
						Nous proposons nos services d&apos;aménagements extérieur/intérieur
						maçonnerie sur le secteur de Orléans et 30 kilomètres autour.
						<br />
						<br /> Vous recherchez une entreprise pour vous accompagner dans vos
						travaux d&apos;aménagements ?
						<br />
						<br /> Notre disponibilité et notre forte expérience sont à votre
						service pour réaliser votre projet d&apos;aménagement.
						<br />
						<br /> N&apos;hésitez plus, nous avons à cœur de vous aider !
					</p>
				</div>
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, transform: 'translateX(0rem)' },
					hidden: { opacity: 0, transform: 'translateX(+10rem)' },
				}}
				className={styles.description}
			>
				<div className={styles['description-zone']}>
					<ul>
						<li>Créations de salles de bain</li>
						<li>Montages d&apos;abris de jardin</li>
						<li>Décoration de jardins</li>
						<li>Aménagements de combles</li>
						<li>Ouverture de porte fermée et fermeture provisoire</li>
					</ul>
					<img
						className={styles['description-img']}
						src='/assets/imgs/amenagement/presentation_carousel_00.webp'
						alt='101 petits travaux, amenagement'
					/>
				</div>
			</motion.section>

			<section className={styles.realisations}>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, transform: 'translateX(0rem)' },
						hidden: { opacity: 0, transform: 'translateX(-8rem)' },
					}}
				>
					<h2>NOS RÉALISATIONS</h2>
					<span>Voici quelques unes de nos réalisations</span>

					<ul className={styles['realisations-list']}>
						<Carousel className={styles['carousel']} infiniteLoop>
							<div>
								<img
									src='/assets/imgs/amenagement/presentation_carousel_00.webp'
									alt='101 petits travaux, amenagement'
								/>
							</div>
							<div>
								<img
									src='/assets/imgs/amenagement/presentation_carousel_01.webp'
									alt='101 petits travaux, amenagement'
								/>
							</div>
							<div>
								<img
									src='/assets/imgs/amenagement/presentation_carousel_02.webp'
									alt='101 petits travaux, amenagement'
								/>
							</div>
						</Carousel>
						<Button
							onClick={() =>
								window.location.assign(
									'https://www.facebook.com/101-petits-travaux-106890404769940/photos/?ref=page_internal'
								)
							}
						>
							Voir plus
						</Button>
					</ul>
				</motion.div>
			</section>
		</div>
	);
};

export default Amenagement;
