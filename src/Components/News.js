import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const updatedNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=6`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResult(parseData.totalResult);
        setLoading(false);
    };
    useEffect(() => {
        updatedNews();
    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}
    &pageSize=6`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResult(parseData.totalResult);
    };

    return (
        <div className="container m-5">
            <h4 className="text-center p-3 text-primary">
                Top {props.category} headlines{" "}
            </h4>

            {loading && <Loading />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={<Loading />}>
                <div className="container">
                    <div className="row g-4">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 g-4" key={element.url}>
                                    <NewsItem
                                        title={
                                            element.title ? element.title : ""
                                        }
                                        description={
                                            element.description
                                                ? element.description
                                                : ""
                                        }
                                        author={
                                            element.author
                                                ? element.author
                                                : "unknown"
                                        }
                                        publishedAt={
                                            element.publishedAt
                                                ? element.publishedAt
                                                : "00:00"
                                        }
                                        source={
                                            element.source.name
                                                ? element.source.name
                                                : ""
                                        }
                                        url={element.url}
                                        urlToImage={element.urlToImage}
                                        category={props.category}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}
News.defaultProps = {
    country: "in",
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
};

export default News;
