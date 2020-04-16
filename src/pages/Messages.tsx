import React from 'react';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonAvatar, IonItem} from '@ionic/react';
import './Home.css';
const Messages: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>الرسائل</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">الرسائل</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonAvatar slot={"start"}>
                        <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_849/https://pdaf.ps/pdaf2020/wp-content/uploads/2020/01/ahmad.jpg"/>
                    </IonAvatar>
                    <IonLabel>
                        <h2>احمد بركات</h2>
                        <h3>صيدليه جراند فارم</h3>
                        <p>يوجد خلل في طلبك</p>
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Messages;
