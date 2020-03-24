import React from 'react';
import {
  IonCard,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';
import { star } from 'ionicons/icons';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {

  return (
    <IonCard
      className="card-width-large"
      routerLink={`/home/restaurantdetail/${restaurant.id}`}
    >
      <img
        className="card-image-wide"
        src={restaurant.image}
        alt="restaurant"
      />
      <DeliveryLabel>
        £{restaurant.deliveryCost} Delivery
      </DeliveryLabel>
      <TimeLabel>
        {restaurant.deliveryTime}
        <Mins>
          min
        </Mins>
      </TimeLabel>
      <IonLabel>
        <Name>{restaurant.name}</Name>
        <Row>
          <Rating
            className={`${restaurant.rating > 0 ? "oneStar" : null}
             ${restaurant.rating > 1 ? "twoStar" : null}
              ${restaurant.rating > 2 ? "threeStar" : null} 
               ${restaurant.rating > 3 ? "fourStar" : null}
                 ${restaurant.rating > 4 ? "fiveStar" : null}`}
          >
            <IonIcon
              className="canChange"
              icon={star}
              color="primary"
              size="small"
            />
            {restaurant.rating}
            <RatingLabel>
              Excellent
            </RatingLabel>
          </Rating>
          <h3>({restaurant.ratingCount}+) • {restaurant.food}</h3>
        </Row>
      </IonLabel>
    </IonCard>
  );
};

const RatingLabel = styled.div`
  margin-right: 4px;
  margin-left: 8px;
`
const TimeLabel = styled.div`
  position: absolute;
  top: 115px;
  right: 16px;
  display; flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: #fff;
  color: #000;
  font-weight: 800;
  padding: 6px 24px;
  border-radius: 30px;
  box-shadow: 0 3px 10px 5px rgba(0,0,0,0.1);
`
const Mins = styled.div`
color: red;
text-align: center;
font-weight: 400;
color: var(--ion-color-medium)
`

const Name = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin-top: 12px;
  color: black;
  margin-bottom: 4px;
`

const Rating = styled.div`
  color: green;
  display: flex;
  align-items: center;

  >. canChange {
    margin-right: 8px;
  }

  &.oneStar {
    color: red;

    > .canChange {
      fill: red !important;
    }
  }
  &.twoStar {
    color: orange;

    > .canChange {
      fill: orange !important;
    }
  }
  &.threeStar {
    color: yellow;

    > .canChange {
      fill: yellow !important;
    }
  }
  &.fourStar {
    color: green;

    > .canChange {
      fill: green !important;
    }
  }

  &.fiveStar {
    color: limegreen;

    > .canChange {
      fill: limegreen !important;
      margin-right: 8px;
    }
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const DeliveryLabel = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: block;
  background: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
`

export default RestaurantItem;
