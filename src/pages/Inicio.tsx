import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Página Inicial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonCard style={{ maxWidth: '400px', margin: '20px auto' }}>
          <IonCardHeader>
            <IonAvatar style={{ width: '130px', height: '130px', margin: '0 auto' }}>
              <img src="/public/foto.jpg" alt="Foto 2x2" onError={(e: any) => { e.target.src = 'https://via.placeholder.com/150'; }} />
            </IonAvatar>
            <IonCardTitle style={{ marginTop: '15px' }}>Román Arturo Desangles De Salas</IonCardTitle>
            <IonCardSubtitle>Matrícula: 20240020</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Correo electrónico:</strong></p>
            <p>20240020@itla.edu.do</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;