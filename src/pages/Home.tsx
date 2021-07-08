import {
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonSlide,
	IonSlides,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useEffect } from 'react';
import urls from '../urls';
import './styles.css';

interface NavigateURL {
	history: any;
}

const Home: React.FC<NavigateURL> = ({ history }) => {
	const goTo = (path: string) => {
		history.push(path, { direction: 'forward' });
	};

	useEffect(() => {
		if (sessionStorage.getItem('isLogged') == 'false') {
			goTo(urls.LOGIN);
		} else if (sessionStorage.length === 0) {
			goTo(urls.LOGIN);
		}
	}, []);
	const option = {
		initialSlide: 0,
		// slidesPerView: 1,
		autoplay: true,
		speed: 400,
		loop: true,
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div className="slideControl">
					<IonSlides options={option}>
						<IonSlide>
							<IonCard>
								<img src="http://wessconnect.com/wp-content/uploads/2021/04/slider2.png" />
								<IonCardHeader>
									<IonCardTitle>
										The only software needed to run your beauty & wellness
										business smoothly
									</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									Helping salons, spas and aesthetic clinics increase
									productivity and run their beauty & wellness businesses in an
									effective and organised manner.
								</IonCardContent>
							</IonCard>
						</IonSlide>
						<IonSlide>
							<IonCard>
								<img src="http://wessconnect.com/wp-content/uploads/2021/05/slide3.jpg" />
								<IonCardHeader>
									<IonCardTitle>
										CLAIM UP TO 80% with the PSG Grant today!
									</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									Run your beauty business with WESS smoothly enjoy the full
									benefits at a fraction of the price
								</IonCardContent>
							</IonCard>
						</IonSlide>
						<IonSlide>
							<IonCard>
								<img src="http://wessconnect.com/wp-content/uploads/2021/04/bg-glomax.jpg" />
								<IonCardHeader>
									<IonCardTitle>
										I AM SO IMPRESSED WITH THIS SYSTEM!
									</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									Everything I wanted was here, no other system does what this
									can. As a business owner, I love the convenience of this
									booking system, but it is so much more than that. I use all of
									the features, the marketing emails, inventory management.
								</IonCardContent>
							</IonCard>
						</IonSlide>
					</IonSlides>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
