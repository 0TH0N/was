import BaseEntity from '../lib/BaseEntity';


export default class Product extends BaseEntity {
  constructor(article, name, weight, length, width, heigth, comment) {
    super(comment);
    this.article = article;
    this.name = name;
    this.weight = weight;
    this.length = length;
    this.width = width;
    this.heigth = heigth;
    this.volume = length * width * heigth;
  }
}
