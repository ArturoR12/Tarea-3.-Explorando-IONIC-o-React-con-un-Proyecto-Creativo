import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tabla: React.FC = () => {
  const [numero, setNumero] = useState<string>('');
  const [tabla, setTabla] = useState<string[]>([]);

  const generarTabla = () => {
    const num = parseInt(numero, 10);
    if (isNaN(num)) return;

    const lista: string[] = [];
    for (let i = 1; i <= 13; i++) {
      lista.push(`${num} x ${i} = ${num * i}`);
    }
    setTabla(lista);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <IonItem>
            <IonLabel position="floating">Ingrese un Número</IonLabel>
            <IonInput type="number" value={numero} onIonChange={e => setNumero(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={generarTabla} style={{ marginTop: '20px' }}>
            Generar Tabla (Hasta el 13)
          </IonButton>

          <IonList style={{ marginTop: '20px' }}>
            {tabla.map((item, index) => (
              <IonItem key={index} className="ion-text-center">
                <IonLabel>{item}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tabla;