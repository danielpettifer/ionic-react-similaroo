import React, { useState } from 'react';
import { IonSearchbar, IonIcon, IonButton, IonModal } from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';
import FilterModal from '../../modals/FilterModal';
import './DeliverooSearch.css';

export const DeliverooSearch: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  async function closeModal() {
    await setShowModal(false);
  }

    return (
      <div className="row search-bar ion-padding">
        <IonSearchbar mode="ios" placeholder="Dishes, restaurants or cuisines" className="align-left ion-no-padding"></IonSearchbar>
        <IonButton fill="clear" className="minus-right-margin" slot="end"  onClick={() => setShowModal(true)}>
              <IonIcon slot="icon-only" size="small" icon={optionsOutline} color="primary" />
        </IonButton>
        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          // presentingElement={mainPage}
          onDidDismiss={() => setShowModal(false)}
        >
            <FilterModal closeAction={closeModal}></FilterModal>
        </IonModal>
      </div>
    )
  }


export default DeliverooSearch;