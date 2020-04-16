import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonCard
} from '@ionic/react';
import './Home.css';
import {Link} from "react-router-dom";

const Article: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>عائلة رجعت من ألمانيا تغادر الحجر الصحي بنابلس</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Go</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    <img width="100%" src="https://cdn1.maannews.net/cached_uploads/resize/822/487/n/2020/04/15/1-jpg-1586953300.jpg?_mhk=dbd33fa0603d73af2a1a42e4c2ba5bc1cc98b4b08cd3ab3162b534de1ddd3f1a9bc74c842f18f82bf43870bec39eb006" />
                    <IonCardHeader>
                        <IonCardTitle>نشر بتاريخ: 15/04/2020</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        نابلس- معا- غادرت عائلة مكونة من أربعة أفراد، الأربعاء، اليوم الصحي من فندق القصر في مدينة نابلس والتي مكثت ١٤ يوما في الحجر بعد عودتها من ألمانيا قبل أسبوعين.
                    </IonCardContent>
                </IonCard>
        </IonContent>
        </IonPage>
    );
};

export default Article;
