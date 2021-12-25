import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      query = query.toUpperCase();
      rentals = rentals.filter(
        (rental) =>
          rental.title.toUpperCase().includes(query) ||
          rental.city.toUpperCase().includes(query)
      );
    }

    return rentals;
  }
}
