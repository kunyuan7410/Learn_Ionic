export function Loading(message = 'Please wait...', duration = 1) {
	const loading = document.createElement('ion-loading');

	loading.cssClass = 'my-custom-class';
	loading.message = message;
	loading.duration = duration;

	document.body.appendChild(loading);
	return loading.present();
}
