import './ExploreContainer.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Nganong Gwapo Ko?</IonCardTitle>
        <IonCardSubtitle>Daan na pag palit</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
    
  );
  
};

export default ExploreContainer;
