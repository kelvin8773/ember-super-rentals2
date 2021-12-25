import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr catetory;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.catetory)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
