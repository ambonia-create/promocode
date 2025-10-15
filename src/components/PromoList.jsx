import { PromoCard } from "./PromoCard";
import promoData from 'PromoData';

export const PromoList = () => {
    return (
      <div className="promo-list">
        {promoData.promoCards.map((card) => (
          <PromoCard key={card.id} {...card} />
        ))}
      </div>
    );
  };