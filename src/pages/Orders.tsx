import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonText,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonBadge
} from '@ionic/react';
import './Home.css';
const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>طلباتي</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSegment value="current">
                        <IonSegmentButton value="current">
                            طلبات حاليه
                        </IonSegmentButton>
                        <IonSegmentButton value="past">
                            طلبات سابقه
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">طلباتي</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonItem routerLink={"orders/1"}>
                        <IonLabel className="ion-text-wrap">
                            <IonText color="primary">
                                <h3>رقم الطلب : 1233344</h3>
                            </IonText>
                            <p>تم التوصيل</p>
                        </IonLabel>

                        <IonBadge slot="end">55 شيكل</IonBadge>
                    </IonItem>
                    <IonItem routerLink={"orders/1"}>
                        <IonLabel className="ion-text-wrap">

                            <IonText color="primary">
                                <h3>رقم الطلب : 1233344</h3>
                            </IonText>
                            <p>جاري التوصيل</p>
                        </IonLabel>

                        <IonBadge slot="end">55 شيكل</IonBadge>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;
