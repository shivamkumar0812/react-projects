import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
const News = (props) => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);



const updateNews = async (props) => {
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true);
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setArticles(parsedData.articles);
  setLoading(false);
  setTotalResults(parsedData.totalResults);
  props.setProgress(100);
}
useEffect(() => {
  updateNews();
  // eslint-disable next line
   document.title = `Thetechnicaltown - ${capitalize(props.category)}`;
}, [])

// handlePreClick = async () => {

//   setPage(page - 1);
//   updateNews();
// }
// handleNextClick = async () => {

//   setPage(page + 1);
//   updateNews();
// }

const fetchMoreData = async () => {
  //  setState({ page: state.page + 1 })
 
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  setPage(page + 1);
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);

}


return (
  <>
    <h2 className='text-center' style={{ margin: '40px 0px', marginTop: '90px' }}>Thetechnicaltown - Top {capitalize(props.category)} Headlines</h2>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >
      <div className="container">
        <div className="row my-4">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <Newsitem author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 38) : ""} description={element.description ? element.description.slice(0, 78) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>
    {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark mx-1" onClick={handlePreClick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
  </>
)
}
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "sports"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News