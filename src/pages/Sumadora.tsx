import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularSuma = () => {
    const val1 = parseFloat(num1) || 0;
    const val2 = parseFloat(num2) || 0;
    setResultado(val1 + val2);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <IonItem>
            <IonLabel position="floating">Número 1</IonLabel>
            <IonInput type="number" value={num1} onIonChange={e => setNum1(e.detail.value!)} />
          </IonItem>
          <IonItem style={{ marginTop: '10px' }}>
            <IonLabel position="floating">Número 2</IonLabel>
            <IonInput type="number" value={num2} onIonChange={e => setNum2(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={calcularSuma} style={{ marginTop: '20px' }}>
            Sumar
          </IonButton>

          {resultado !== null && (
            <IonCard color="light" style={{ marginTop: '20px' }}>
              <IonCardContent className="ion-text-center">
                <h2><strong>Resultado:</strong> {resultado}</h2>
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;