import React from 'react';
import {
    IonAvatar, IonBackButton, IonButton, IonButtons, IonCheckbox,
    IonContent, IonDatetime,
    IonHeader, IonIcon, IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage, IonRange, IonSelect, IonSelectOption, IonText, IonThumbnail,
    IonTitle, IonToggle,
    IonToolbar
} from '@ionic/react';
import {star, home, logOut, lockClosed, locationOutline, document} from 'ionicons/icons';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>حسابي</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">حسابي</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonThumbnail slot="start">
                        <img src="https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/44937855_10155559581160163_8425207168675872768_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=9Of1eOElbwIAX9VYHoM&_nc_ht=scontent.fgza2-1.fna&oh=ee37ba36c9e18d2ba5b10340297c1919&oe=5EBBB4F4" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>صلاح يحيى</h2>
                        <p>0599825671</p>
                    </IonLabel>
                    <IonButton fill="outline" slot="end" routerLink={"/profile/settings"}>تعديل</IonButton>
                </IonItem>
                <IonItem detail routerLink={"/prescriptions"} >
                    <IonIcon icon={document} slot="start" />
                    <IonLabel>وصفاتي</IonLabel>
                </IonItem>
                <IonItem detail routerLink={"/addresses"} >
                    <IonIcon icon={locationOutline} slot="start" />
                    <IonLabel>عناويني</IonLabel>
                </IonItem>
                <IonItem detail >
                    <IonIcon icon={lockClosed} slot="start" />
                    <IonLabel>تغيير كلمة المرور</IonLabel>
                </IonItem>
                <IonItem detail>
                    <IonIcon icon={logOut} slot="start" />
                    <IonLabel>تسجيل الخروج</IonLabel>
                </IonItem>

            </IonContent>
        </IonPage>
    );
};

export default Profile;
