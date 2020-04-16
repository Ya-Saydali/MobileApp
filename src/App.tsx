import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonFabButton,
  IonFab
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {ellipse, home, square, triangle, cart, newspaperOutline, mailOutline, personOutline, arrowForwardCircle} from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Articles from './pages/Articles';
import Settings from './pages/Settings';
import Messages from './pages/Messages';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Article from "./pages/Article";
import Order from './pages/Order';
import Prescriptions from "./pages/Prescriptions";
import Product from './pages/Product';
import Products from './pages/Products';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/messages" component={Messages} exact={true} />
          <Route path="/articles" component={Articles} exact={true} />
          <Route path="/orders" component={Orders} exact={true} />
          <Route path="/orders/:id" component={Order} exact={true} />
          <Route path="/profile/settings" component={Settings} exact={true} />
          <Route path="/profile" component={Profile} />
          <Route path="/prescriptions" component={Prescriptions} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route path="/articles/:id" component={Article} />
          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>الرئيسية</IonLabel>
          </IonTabButton>
          <IonTabButton tab="orders" href="/orders">
            <IonIcon icon={cart} />
            <IonLabel>طلباتي</IonLabel>
          </IonTabButton>
          <IonTabButton tab="articles" href="/articles">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>مقالات</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/messages">
            <IonIcon icon={mailOutline} />
            <IonLabel>الرسائل</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personOutline} />
            <IonLabel>حسابي</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
