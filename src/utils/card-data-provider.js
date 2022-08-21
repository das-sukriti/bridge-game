
export class CardDataProvider {

  static cardData = {};

  static getCardData = () => {
    return this.cardData;
  }

  static setCardData = (value) => {
    this.cardData = value;
  }
}