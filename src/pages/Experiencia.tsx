import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Experiencia: React.FC = () => {
  // Reemplaza esto con el ID de tu video de YouTube subido
  const videoId = "dQw4w9WgXcQ";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <h2>Explicación de la Tarea</h2>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '20px' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video de Experiencia Personal"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allowFullScreen
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;