export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: '265464eae7114d61af598e1a1efe990a',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=1`;

    fetch(url, options)
      .then(r => r.json())
      .then(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
