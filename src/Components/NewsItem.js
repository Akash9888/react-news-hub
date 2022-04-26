// import React, { Component } from "react";
import React from "react";

export default function NewsItem(props) {
    let { title, description, url, urlToImage, author, publishedAt, source } =
        props;
    return (
        <div className="card m-2 h-100">
            <img
                style={{ height: "200px" }}
                src={
                    urlToImage
                        ? urlToImage
                        : `https://images.pexels.com/photos/3953481/pexels-photo-3953481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
                }
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                    <span className="badge rounded-pill bg-warning text-dark">
                        {source}
                    </span>
                </h5>
                <p className="card-text">{description}</p>

                <p class="card-text">
                    <small class="text-muted">
                        By {author} on {publishedAt}
                    </small>
                </p>

                <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm btn-success">
                    Read more
                </a>
            </div>
        </div>
    );
}
