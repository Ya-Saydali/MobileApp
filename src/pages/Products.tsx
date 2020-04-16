import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonItem,
    IonLabel,
    IonIcon,
    IonThumbnail,
    IonImg,
    IonButton,
    IonButtons, IonBackButton, IonSearchbar
} from '@ionic/react';
import './Home.css';
import { wifi } from 'ionicons/icons';
const Products: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>الادويه</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar placeholder="اكتب للبحث" />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">الادويه</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                    <IonItem routerLink={"/products/1"}>
                        <IonThumbnail slot={"start"}>
                            <IonImg src={"http://pps.ps/post-image/13"}></IonImg>
                        </IonThumbnail>
                        <IonLabel>
                            <h3>اكامول</h3>
                            <p>consectetur adipiscing elit. Duis ut urna neque.</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end">تفاصيل</IonButton>

                    </IonItem>

            </IonContent>
        </IonPage>
    );
};

export default Products;
