/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app';
import { CSSProperties, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavLink from 'next/link';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';

import Button from '../components/Buttons';

import styles from '../styles/layout.module.scss';
import '../styles/globals.scss';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
	const [scrollPosition, setScrollPosition] = useState(true);
	const [desktopMedia, setDesktopMedia] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const router = useRouter();

	const handleScrool = () => {
		if (window.scrollY >= 45) {
			setScrollPosition(false);
		} else {
			setScrollPosition(true);
		}
	};

	const handleResize = () => {
		setDesktopMedia(window.matchMedia('(min-width: 800px)').matches);
	};

	useEffect(() => {
		document.body.style.overflow = mobileNavOpen ? 'hidden' : 'auto';
	}, [mobileNavOpen]);

	useEffect(() => {
		handleResize();
		window.addEventListener('scroll', handleScrool);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScrool);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Loader />
			<main>
				{router.pathname === '/' && (
					<header className={styles['contact-bar']}>
						<ul>
							<a
								href='https://goo.gl/maps/HgfQqD17A7mSJoRe9'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FiMapPin size={24} />
								<span>Menestreau en villette, 45240</span>
							</a>
							<a
								href='mailto:45240fernando45240@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<IoMdMail size={24} />
								<span>fernando45240@gmail.com</span>
							</a>
							<a
								href='https://www.facebook.com/101-petits-travaux-106890404769940/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<BsFacebook size={24} />
							</a>
						</ul>
					</header>
				)}
				{desktopMedia ? (
					<header
						className={styles['nav-bar-desktop']}
						style={
							{
								'--navbar-background-color':
									scrollPosition && router.pathname === '/'
										? 'transparent'
										: 'var(--background-dark)',
								'--navbar-box-shadow':
									scrollPosition && router.pathname === '/'
										? 'transparent'
										: '0 2rem 2rem -2rem #00000061',
							} as CSSProperties
						}
					>
						<div>
							<h1>
								<NavLink passHref href='/'>
									<svg
										version='1.1'
										xmlns='http://www.w3.org/2000/svg'
										xmlnsXlink='http://www.w3.org/1999/xlink'
										x='0px'
										y='0px'
										width='50'
										viewBox='0 0 1000 1000'
										enableBackground='new 0 0 1000 1000'
										xmlSpace='preserve'
									>
										<g transform='translate(0.000000,511.000000) scale(0.100000,-0.100000)'>
											<path
												fill='white'
												d='M3811.1,4995.1c-81.1-35.1-124.9-81.1-232.3-245.5c-175.3-263-396.7-407.6-653.1-427.3c-133.7-11-133.7-8.8-181.9,65.7c-61.4,96.4-206,197.2-348.5,245.5c-92,28.5-190.7,35.1-574.2,28.5c-506.2-6.6-517.2-11-626.8-157.8c-43.8-59.2-46-85.5-46-889.8s2.2-830.6,46-889.8c24.1-32.9,72.3-81.1,105.2-105.2c57-43.8,89.9-46,567.6-46h508.4l142.5,78.9c87.7,48.2,168.8,111.8,208.2,168.7c57,78.9,76.7,89.9,155.6,89.9c335.3,6.6,655.3-306.8,710-692.5c8.8-74.5,28.5-153.4,41.6-177.5c39.5-72.3,151.2-155.6,232.3-170.9l76.7-13.1l4.4-3217.1c6.6-3212.8,6.6-3219.4,52.6-3278.5c24.1-32.9,72.3-81.1,105.2-105.2c57-43.8,87.7-46,714.4-46c626.8,0,657.5,2.2,714.4,46c32.9,24.1,81.1,72.3,105.2,105.2c46,59.2,46,65.7,52.6,3276.3l4.4,3215l96.4,26.3c179.7,48.2,208.2,103,363.8,729.8c74.5,306.8,144.6,567.6,151.2,582.9c8.8,17.5,74.5,2.2,223.5-57c543.5-212.6,1087-574.2,1645.8-1093.6c118.3-109.6,190.7-160,245.4-170.9c230.1-41.6,429.5,120.5,429.5,350.6c0,87.7-116.2,320-300.2,604.9C7758,4046.2,6533,4758.5,4884.9,4962.3C4525.5,5006.1,3883.4,5025.8,3811.1,4995.1z M4858.6,4611.6c1424.5-177.5,2500.5-756.1,3236.9-1744.5c146.8-197.2,383.5-582.9,383.5-624.6c0-11-65.7,46-146.8,127.1c-611.4,596.1-1599.8,1159.3-2171.8,1236l-111.8,13.1l-21.9-83.3c-11-48.2-81.1-326.5-155.6-622.4c-74.5-295.9-142.5-574.2-155.6-618l-21.9-83.3h-872.2h-870l-26.3,133.7c-63.6,341.9-317.8,675-631.2,824c-168.7,78.9-181.9,83.3-460.2,89.8l-287.1,8.8l-15.3-78.9c-17.5-96.4-109.6-206-203.8-245.5c-50.4-21.9-179.7-30.7-455.8-30.7h-383.5v701.3v701.3h383.5c276.1,0,405.4-8.8,455.8-30.7c94.2-37.3,186.3-149,203.8-243.3l13.2-76.7h234.5c263,0,433.9,35.1,602.7,127.1c140.3,74.5,405.4,324.4,497.5,469l72.3,111.8l322.2-15.3C4453.2,4651.1,4716.2,4629.2,4858.6,4611.6z M5345.2-1294.5v-3155.8h-526h-526v3155.8v3155.8h526h526V-1294.5z'
											/>
										</g>
									</svg>
								</NavLink>
							</h1>
							<ul>
								<li>
									<NavLink href='/'>Accueil</NavLink>
								</li>
								<li>
									<NavLink href='/Maconnerie'>Maçonnerie</NavLink>
								</li>
								<li>
									<NavLink href='/Amenagement'>Aménagements</NavLink>
								</li>
								<li>
									<Button onClick={() => router.push('/contact')}>
										Prendre contact
									</Button>
								</li>
							</ul>
						</div>
					</header>
				) : (
					<header className={styles['nav-bar-mobile']}>
						<div
							className={styles['nav-bar-mobile-hamburger']}
							onClick={() => setMobileNavOpen((prev) => !prev)}
						>
							{!mobileNavOpen ? (
								<AiOutlineMenu size={24} />
							) : (
								<AiOutlineClose size={24} />
							)}
						</div>
						<div
							className={`${styles['nav-bar-mobile-content']} ${
								styles[mobileNavOpen ? 'fadeIn' : 'fadeOut']
							}`}
						>
							<ul>
								<li>
									<p
										onClick={() => {
											router.push('/');
											setMobileNavOpen(false);
										}}
									>
										Accueil
									</p>
								</li>
								<li>
									<p
										onClick={() => {
											router.push('/Maconnerie');
											setMobileNavOpen(false);
										}}
									>
										Maçonnerie
									</p>
								</li>
								<li>
									<p
										onClick={() => {
											router.push('/Amenagement');
											setMobileNavOpen(false);
										}}
									>
										Aménagements
									</p>
								</li>
							</ul>
							<Button
								onClick={() => {
									router.push('/contact');
									setMobileNavOpen(false);
								}}
							>
								Prendre contact
							</Button>
						</div>
					</header>
				)}

				<main className={styles.main}>
					<Component {...pageProps} />
				</main>

				<section>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10736.801931747905!2d2.0185381!3d47.7193579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2186ad8d206abcb5!2s101%20petits%20travaux!5e0!3m2!1sfr!2sfr!4v1650820604971!5m2!1sfr!2sfr'
						width='100%'
						height='450'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</section>

				<footer className={styles.footer}>
					<p> © 101 petits travaux </p> <p>Tous droits réservés </p>
					<NavLink href='/mentions-legales'>Mentions légales </NavLink>
					<p>
						Réalisé par
						<a
							href='https://www.mtro.fr'
							target='_blank'
							rel='noopener noreferrer'
						>
							Arthur Monteiro
						</a>
					</p>
				</footer>
			</main>
		</>
	);
}

export default MyApp;
