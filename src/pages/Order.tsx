import React from 'react';
import {
    IonCard,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonThumbnail,
    IonNote,
    IonDatetime, IonButtons, IonBackButton
} from '@ionic/react';
import './Home.css';
import {walk, warning, wifi, wine} from "ionicons/icons";

const Order: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>طلب</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">طلب</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>

                </IonHeader>
                <IonCard>
                    <IonItem detail routerLink={"/products/1"}>
                        <IonThumbnail slot="start">
                            <img src="http://pps.ps/post-image/13"/>
                        </IonThumbnail>
                        <IonLabel>
                            <h2>أكامول </h2>
                            <h3>علبه</h3>
                        </IonLabel>
                        <IonNote slot="end" color="primary"><h5>15 شيكل</h5></IonNote>
                    </IonItem>
                    <IonItem detail>
                    <IonThumbnail slot="start">
                        <img src="http://pps.ps/post-image/13"/>
                    </IonThumbnail>
                    <IonLabel>
                        <h2>أكامول </h2>
                        <h3>علبه</h3>
                    </IonLabel>
                        <IonNote slot="end" color="primary"><h5>15 شيكل</h5></IonNote>
                </IonItem>
                    <IonItem detail routerLink={"/products/1"}>
                    <IonThumbnail slot="start">
                        <img src="http://pps.ps/post-image/13"/>
                    </IonThumbnail>
                    <IonLabel>
                        <h2>أكامول </h2>
                        <h3>علبه</h3>
                    </IonLabel>
                        <IonNote slot="end" color="primary"><h5>15 شيكل</h5></IonNote>
                </IonItem>
                    <IonItem detail routerLink={"/products/1"}>
                    <IonThumbnail slot="start">
                        <img src="http://pps.ps/post-image/13"/>
                    </IonThumbnail>
                    <IonLabel>
                        <h2>أكامول </h2>
                        <h3>علبه</h3>
                    </IonLabel>
                        <IonNote slot="end" color="primary"><h5>15 شيكل</h5></IonNote>
                </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>المجموع</h2>
                        </IonLabel>
                        <IonNote slot="end" color="secondary"><h5>15 شيكل</h5></IonNote>
                    </IonItem>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Order;
