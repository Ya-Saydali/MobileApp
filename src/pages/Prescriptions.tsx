import React, { useState } from 'react';
import {
    IonAvatar, IonButton, IonCheckbox,
    IonContent, IonDatetime,
    IonHeader, IonIcon, IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage, IonRange, IonSelect, IonSelectOption, IonText, IonThumbnail,
    IonTitle, IonToggle,
    IonToolbar,
    IonModal,
    IonImg, IonButtons, IonBackButton
} from '@ionic/react';
import {star, home, logOut, lockClosed, locationOutline, document} from 'ionicons/icons';

const Prescriptions: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>وصفاتي الطبيه</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">وصفاتي الطبيه</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonItem onClick={() => setShowModal(true)}>
                    <IonThumbnail slot="start">
                        <img src="https://i.ibb.co/TMrkCcm/download.jpg" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>تاريخ الاضافه</h2>
                        <h3>15-04-2020</h3>
                    </IonLabel>
                    <IonButton slot="end" color={"success"}>تم الموافقه عليه</IonButton>
                </IonItem>

                <IonModal isOpen={showModal}>
                    <img
                        src={"https://i.ibb.co/TMrkCcm/download.jpg"}>
                    </img>
                    <IonButton onClick={() => setShowModal(false)}>إغلاق</IonButton>
                </IonModal>

                <IonItem onClick={() => setShowModal(true)}>
                    <IonThumbnail slot="start">
                        <img src="https://i.ibb.co/TMrkCcm/download.jpg" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>تاريخ الاضافه</h2>
                        <h3>15-04-2020</h3>
                    </IonLabel>
                    <IonButton slot="end" color={"danger"}>مرفوض</IonButton>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Prescriptions;
