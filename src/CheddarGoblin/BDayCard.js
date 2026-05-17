import { useEffect, useRef, useState } from 'react';
import './BDayCard.css';
import slide1Image from './Image/89029c6a-0092-4b50-a170-14077ae10154.JPG';
import slide2Image from './Image/IMG_0109.png';
import slide3Image from './Image/IMG_0007.png';
import slide4Image from './Image/IMG_3656.JPG';
import slide5Image from './Image/53234660-d6d8-4eb3-9e3f-66a05ee3e799.JPG';
import slide6Image from './Image/IMG_3817.png';
import slide7Image from './Image/IMG_0094.png';
import slide8Image from './Image/2cccec50-9381-41dd-8808-17fdb5373bf1.JPG';
import slide9Image from './Image/b6e0a3b9-f118-4fd1-867a-e4aacfcce0fa.JPG';

const TOTAL_SLIDES = 11;

const photoSlides = [
	{
		label: 'To the love of my life x',
		imageSrc: slide1Image,
		imageAlt: 'To the love of my life x',
		quote: 'Every time I look at you',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide2Image,
		imageAlt: 'To the love of my life x',
		quote: 'All I can think about is how lucky I am to have you in my life.',
	},
	{
		label: "To the love of my life x",
		imageSrc: slide3Image,
		imageAlt: "To the love of my life x",
		quote: 'I think about the small things, like making pasta together,',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide4Image,
		imageAlt: 'To the love of my life x',
		quote: 'and eating good food, or at least trying to...',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide5Image,
		imageAlt: 'To the love of my life x',
		quote: 'And the big things, like seeing new places,',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide6Image,
		imageAlt: 'To the love of my life x',
		quote: 'and experiencing new things, but most importantly....',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide7Image,
		imageAlt: 'To the love of my life x',
		quote: 'the fact that I get to go through life with you,',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide8Image,
		imageAlt: 'To the love of my life x',
		quote: 'is something I cherish and I cannot express how much you mean to me.',
	},
	{
		label: 'To the love of my life x',
		imageSrc: slide9Image,
		imageAlt: 'To the love of my life x',
		quote: 'You are the most amazing person I have ever met, Happy Birthday my darling goblin',
	},
];

const finalSlideMessage = 'I will share a ciggarette with you always and forever x';

function BDayCard() {
	const [current, setCurrent] = useState(0);
	const [exiting, setExiting] = useState(null);
	const [direction, setDirection] = useState('left');
	const canvasRef = useRef(null);
	const frameRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return undefined;

		const ctx = canvas.getContext('2d');
		if (!ctx) return undefined;

		const colors = ['#f5d98a', '#e8b4c8', '#c4a2e0', '#a8d8b8', '#8ab4e8', '#d4a0d4', '#ffffff', '#f0b89a'];

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const spawnParticle = () => {
			return {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 3 + 1,
				color: colors[Math.floor(Math.random() * colors.length)],
				vx: (Math.random() - 0.5) * 0.4,
				vy: -Math.random() * 0.5 - 0.2,
				life: 1,
				decay: Math.random() * 0.004 + 0.002,
				twinkle: Math.random() * Math.PI * 2,
			};
		};

		resize();

		const particles = Array.from({ length: 120 }, () => spawnParticle());

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particles.length; i += 1) {
				const p = particles[i];
				p.twinkle += 0.06;
				const alpha = p.life * (0.5 + 0.5 * Math.sin(p.twinkle));

				ctx.save();
				ctx.globalAlpha = alpha;
				ctx.fillStyle = p.color;
				ctx.shadowColor = p.color;
				ctx.shadowBlur = 4;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();

				p.x += p.vx;
				p.y += p.vy;
				p.life -= p.decay;

				if (p.life <= 0) {
					particles[i] = spawnParticle();
				}
			}

			frameRef.current = window.requestAnimationFrame(animate);
		};

		frameRef.current = window.requestAnimationFrame(animate);
		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
			if (frameRef.current) {
				window.cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === 'ArrowRight') {
				goTo(current + 1);
			}
			if (event.key === 'ArrowLeft') {
				goTo(current - 1);
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [current]);

	const goTo = (next) => {
		if (next === current || next < 0 || next >= TOTAL_SLIDES) return;

		setDirection(next > current ? 'left' : 'right');
		setExiting(current);
		setCurrent(next);

		window.setTimeout(() => {
			setExiting(null);
		}, 350);
	};

	const renderDots = () => {
		return (
			<div className="bday-dots">
				{Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
					<button
						key={i}
						type="button"
						className={`bday-dot${i === current ? ' active' : ''}`}
						aria-label={`Go to slide ${i + 1}`}
						onClick={() => goTo(i)}
					/>
				))}
			</div>
		);
	};

	const renderNav = () => {
		return (
			<div className="bday-nav">
				<button type="button" className="bday-nav-btn" disabled={current === 0} onClick={() => goTo(current - 1)}>
					←
				</button>
				{renderDots()}
				<button type="button" className="bday-nav-btn" disabled={current === TOTAL_SLIDES - 1} onClick={() => goTo(current + 1)}>
					→
				</button>
			</div>
		);
	};

	const getSlideClassName = (index, baseClass) => {
		const classes = ['bday-slide', baseClass];
		if (index === current) classes.push('active');
		if (index === exiting) classes.push(direction === 'left' ? 'exit-left' : 'exit-right');
		return classes.join(' ');
	};

	return (
		<div className="bday-page">
			<canvas id="glitter-canvas" ref={canvasRef} />

			<div className="bday-card-wrapper">
				<div className="bday-card">
					<div className="bday-slides-container">
						<section className={getSlideClassName(0, 'slide-cover')}>
							<svg className="stained-glass-window" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<rect x="10" y="10" width="180" height="180" rx="20" fill="#12072a" stroke="#f5d98a" strokeWidth="2" />
								<rect x="24" y="24" width="152" height="152" fill="#1a0b36" stroke="#c4a2e0" strokeWidth="1" />
								<line x1="100" y1="24" x2="100" y2="176" stroke="#f5d98a" strokeWidth="1.2" opacity="0.85" />
								<line x1="24" y1="100" x2="176" y2="100" stroke="#f5d98a" strokeWidth="1.2" opacity="0.85" />
								<line x1="24" y1="24" x2="176" y2="176" stroke="#c4a2e0" strokeWidth="1" opacity="0.7" />
								<line x1="176" y1="24" x2="24" y2="176" stroke="#c4a2e0" strokeWidth="1" opacity="0.7" />

								<rect x="38" y="38" width="62" height="62" fill="#d8a9d8" opacity="0.72" />
								<rect x="100" y="38" width="62" height="62" fill="#f5d98a" opacity="0.62" />
								<rect x="38" y="100" width="62" height="62" fill="#8ab4e8" opacity="0.62" />
								<rect x="100" y="100" width="62" height="62" fill="#e8b4c8" opacity="0.72" />

								<path d="M100 52 C108 66 108 86 100 100 C92 86 92 66 100 52 Z" fill="#f4c6d8" stroke="#f5d98a" strokeWidth="1" />
								<path d="M100 100 C114 94 134 94 148 100 C134 106 114 106 100 100 Z" fill="#ddb0e2" stroke="#f5d98a" strokeWidth="1" />
								<path d="M100 100 C106 114 106 134 100 148 C94 134 94 114 100 100 Z" fill="#f0b9cf" stroke="#f5d98a" strokeWidth="1" />
								<path d="M52 100 C66 94 86 94 100 100 C86 106 66 106 52 100 Z" fill="#c8a2df" stroke="#f5d98a" strokeWidth="1" />

								<ellipse cx="100" cy="100" rx="16" ry="16" fill="#2f1257" stroke="#f5d98a" strokeWidth="1.2" />
								<ellipse cx="100" cy="100" rx="8" ry="8" fill="#f5d98a" opacity="0.9" />

								<rect x="96" y="148" width="8" height="20" fill="#89b28f" opacity="0.85" />
								<path d="M100 164 C90 160 84 154 80 146 C88 146 96 150 100 158 Z" fill="#a8d8b8" opacity="0.85" />
								<path d="M100 164 C110 160 116 154 120 146 C112 146 104 150 100 158 Z" fill="#a8d8b8" opacity="0.85" />
							</svg>

							<h1 className="cover-title">Happy Birthday</h1>
							<p className="cover-sub">My Special Little Goblin</p>
							<div className="flower-row">
								<span>✿</span>
								<span>✿</span>
								<span>✿</span>
								<span>✿</span>
							</div>
							{renderNav()}
						</section>

						{photoSlides.map((slide, idx) => {
							const slideIndex = idx + 1;
							return (
								<section key={slide.label} className={getSlideClassName(slideIndex, 'slide-photo')}>
									<div className="photo-frame">
										<p className="slide-label">✦ {slide.label} ✦</p>
										<div className="photo-placeholder" aria-label={`Slide ${slideIndex} image`}>
											{slide.imageSrc ? (
												<img src={slide.imageSrc} alt={slide.imageAlt} className="uploaded-photo" />
											) : (
												<span className="upload-hint">Set imageSrc in BDayCard.js for this slide.</span>
											)}
										</div>
										<div className="quote-area">{slide.quote}</div>
									</div>
									{renderNav()}
								</section>
							);
						})}

						<section className={getSlideClassName(10, 'slide-final')}>
							<span className="heart-burst">💜</span>
							<div className="big-23">23</div>
							<div className="years-label">Years of you</div>
							<div className="quote-area final-quote">{finalSlideMessage}</div>
							<div className="flower-row small">
								<span>✿</span>
								<span>✿</span>
								<span>✿</span>
							</div>
							{renderNav()}
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BDayCard;
