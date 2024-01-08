import './sass/index.scss';
import NewsApiService from './js/components/news-servise';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articleContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const newsApiService = new NewsApiService();

console.log(newsApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles(searchQuery);
}

function onLoadMore() {
  newsApiService.fetchArticles(searchQuery);
}
