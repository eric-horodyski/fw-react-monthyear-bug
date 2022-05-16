import {
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [date, setDate] = useState<string>("2020-03-30T11:59:59Z");

  const formatDateInput = (str: string): string => {
    const date = new Date(str);
    return `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
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
                    id="trigger-datetime"
                    value={formatDateInput(date)}
                  />
                  <IonModal trigger="trigger-datetime">
                    <IonContent>
                      <IonDatetime
                        max="2040-12-31"
                        value={date}
                        presentation="month-year"
                        onIonChange={(e) => setDate(e.detail.value!)}
                        showDefaultButtons={true}
                      />
                    </IonContent>
                  </IonModal>
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
