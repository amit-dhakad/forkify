import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  // get result from api
  async getResults() {
    const key = 'ad092045e14a4a795c1e2e771e78e6fa';
    try {
      // axios are use for api call
      const result = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = result.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
