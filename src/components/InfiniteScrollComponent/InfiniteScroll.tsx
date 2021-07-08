import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import React, { useState } from 'react';

const InfiniteScrollComponent = () => {
	const [disableInfiniteScroll, setDisableInfiniteScroll] =
		useState<boolean>(false);
	return (
		<IonInfiniteScroll threshold="100px" disabled={disableInfiniteScroll}>
			<IonInfiniteScrollContent loadingText="Loading..."></IonInfiniteScrollContent>
		</IonInfiniteScroll>
	);
};

export default InfiniteScrollComponent;
