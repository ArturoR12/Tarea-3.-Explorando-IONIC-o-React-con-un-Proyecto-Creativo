import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<string>('');
  const [textoLetras, setTextoLetras] = useState<string>('');

  const convertirNumeroALetras = (num: number): string => {
    if (num < 1 || num > 1000) return 'Ingresa un número entre 1 y 1000.';
    if (num === 1000) return 'Mil';
    if (num === 100) return 'Cien';

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales: { [key: number]: string } = {
      11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince',
      16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve',
      21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés', 24: 'veinticuantro',
      25: 'veinticinco', 26: 'veintiséis', 27: 'veintisiete', 28: 'veintiocho', 29: 'veintinueve'
    };
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    const c = Math.floor(num / 100);
    const du = num % 100;
    const d = Math.floor(du / 10);
    const u = du % 10;

    let res = '';
    if (c > 0) res += centenas[c] + ' ';

    if (especiales[du]) {
      res += especiales[du];
    } else {
      if (d > 0) {
        res += decenas[d];
        if (u > 0) res += ' y ' + unidades[u];
      } else if (u > 0) {
        res += unidades[u];
      }
    }

    return res.trim().charAt(0).toUpperCase() + res.trim().slice(1);
  };

  const procesarTraduccion = () => {
    const val = parseInt(numero, 10);
    if (isNaN(val)) {
      setTextoLetras('Por favor ingresa un número válido.');
    } else {
      setTextoLetras(convertirNumeroALetras(val));
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Traductor de Números</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <IonItem>
            <IonLabel position="floating">Número (1 al 1000)</IonLabel>
            <IonInput type="number" value={numero} onIonChange={e => setNumero(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={procesarTraduccion} style={{ marginTop: '20px' }}>
            Traducir a Letras
          </IonButton>

          {textoLetras !== '' && (
            <IonCard color="tertiary" style={{ marginTop: '20px' }}>
              <IonCardContent className="ion-text-center">
                <h2>{textoLetras}</h2>
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Traductor;