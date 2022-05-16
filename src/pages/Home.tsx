import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import "./Home.css";

interface CalendarProps {
  value: string;
  onDismiss: (opts?: { date: string }) => void;
}

const Calendar: React.FC<CalendarProps> = ({ value, onDismiss }) => {
  const datetimeRef = useRef(null);
  const [date, setDate] = useState<string>(new Date(Date.now()).toISOString());

  const confirm = () => {
    if (datetimeRef) {
      console.log(`On confirm ${date}`);
      onDismiss();
    }
  };

  return (
    <IonContent>
      <IonDatetime
        ref={datetimeRef}
        value={date}
        onIonChange={(e) => {
          console.log(`onIonChange`, e);
          setDate(e.detail.value!);
        }}
        max="2040-12-31"
        presentation="month-year"
      >
        <IonButtons slot="buttons">
          <IonButton onClick={() => confirm()} color="primary">
            Cancel
          </IonButton>
          <IonButton onClick={() => confirm()} color="primary">
            Done
          </IonButton>
        </IonButtons>
      </IonDatetime>
    </IonContent>
  );
};

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("2025-06-30T11:59:59Z");
  const [present, dismiss] = useIonModal(Calendar, {
    value,
    onDismiss: (opts?: { date: string }) => dismiss(),
  });

  const formatDateInput = (str: string): string => {
    const date = new Date(str);
    return `${String(date.getMonth()).padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonGrid>
            <IonRow>
              <IonCol size="9">
                <IonItem lines="none">
                  <IonLabel position="stacked">Exp. Date</IonLabel>
                  <IonInput
                    value={formatDateInput(value)}
                    onClick={() => present()}
                  />
                </IonItem>
              </IonCol>
              <IonCol size="3">
                <IonItem lines="none">
                  <IonLabel position="stacked">CVV</IonLabel>
                  <IonInput type="number" maxlength={3} />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
