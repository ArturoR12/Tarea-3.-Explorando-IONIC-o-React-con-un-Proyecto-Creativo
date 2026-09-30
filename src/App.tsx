import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { homeOutline, calculatorOutline, textOutline, gridOutline, videocamOutline } from 'ionicons/icons';

/* CSS básico de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Importación de las páginas */
import Inicio from './pages/Inicio';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* Menú Lateral */}
        <IonMenu contentId="main" type="overlay">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Menú Principal</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/inicio">
                  <IonIcon slot="start" icon={homeOutline} />
                  <IonLabel>Página Inicial</IonLabel>
                </IonItem>
                <IonItem routerLink="/sumadora">
                  <IonIcon slot="start" icon={calculatorOutline} />
                  <IonLabel>Sumadora</IonLabel>
                </IonItem>
                <IonItem routerLink="/traductor">
                  <IonIcon slot="start" icon={textOutline} />
                  <IonLabel>Traductor de Números</IonLabel>
                </IonItem>
                <IonItem routerLink="/tabla">
                  <IonIcon slot="start" icon={gridOutline} />
                  <IonLabel>Tabla de Multiplicar</IonLabel>
                </IonItem>
                <IonItem routerLink="/experiencia">
                  <IonIcon slot="start" icon={videocamOutline} />
                  <IonLabel>Experiencia Personal</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>

        {/* Enrutamiento en React Router v6 */}
        <IonRouterOutlet id="main">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sumadora" element={<Sumadora />} />
            <Route path="/traductor" element={<Traductor />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;