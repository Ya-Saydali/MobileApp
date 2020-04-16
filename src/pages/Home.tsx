import React from 'react';
import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader, IonIcon, IonItem, IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSlide,
    IonSlides,
    IonList,
    IonToggle,
    IonCol,
    IonRow,
    IonGrid,
    IonButtons
} from '@ionic/react';
import './Home.css';
import {camera, scan, walk, warning, wifi, wine} from "ionicons/icons";

const Home: React.FC = () => {
    let toggleDarkMode;
    toggleDarkMode = () => {
        document.body.classList.toggle('dark');
    }
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>الرئيسيه</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">الرئيسيه</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonCard>
              <img src="https://www.ovpm.org/wp-content/uploads/2020/03/chla-what-you-should-know-covid-19-1200x628-01.jpg" alt=""/>
              <IonCardContent>
              </IonCardContent>
              <IonCardHeader>
                  <IonCardSubtitle>اختر التصنيف</IonCardSubtitle>
              </IonCardHeader>
              <IonList>
                  <IonItem>
                      <IonIcon slot={"start"} icon={"mooon"} className="component-icon component-icon-dark"></IonIcon>
                      <IonLabel>الوضع الليلي</IonLabel>
                      <IonToggle slot="end" onIonChange={toggleDarkMode}></IonToggle>
                  </IonItem>
              </IonList>
              <IonItem routerLink={"/products"}>
                  <IonIcon icon={wifi} slot="start" />
                  <IonLabel>اسنان</IonLabel>
              </IonItem>

              <IonItem routerLink={"/products"}>
                  <IonIcon icon={wine} slot="start" />
                  <IonLabel>سكري</IonLabel>
              </IonItem>

              <IonItem routerLink={"/products"}>
                  <IonIcon icon={warning} slot="start" />
                  <IonLabel>وجع راس</IonLabel>
              </IonItem>

              <IonItem routerLink={"/products"}>
                  <IonIcon icon={walk} slot="start" />
                  <IonLabel>جلد</IonLabel>
              </IonItem>
              <IonItem routerLink={"/products"}>
                  <IonIcon icon={walk} slot="start" />
                  <IonLabel>جميع التصنيفات</IonLabel>
              </IonItem>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};



export default Home;
