import React, { useEffect, useState } from "react";
import imageArticle from "../Asset/IMG_3101.jpg";
import "../Style/Article.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GetAllProduct } from "../Redux/Actions/ProductActions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Article() {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);

  const renderArticle = () => {
    if (Product.isLoadingProduct) {
      const totalItems = 4;
      const items = new Array(totalItems).fill(null);
      return items.map(()=>{
        return (
          <div className="card-article">
            <Skeleton
              style={{
                border: "1px solid #ccc",
                display: "block",
                lineHeight: 2,
                padding: "1rem",
                marginBottom: "0.5rem",
                width: 250,
                height: 180,
              }}
            />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton />
                </h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  <Skeleton />
                </p>
                <Skeleton />
              </div>
            </div>
          </div>
        );
      })
    } else {
      return Product.allProduct?.posts?.map((val, index) => {
        console.log(val,'val')
        return (
          <div className="card-article">
            <img src={val.featured_image.source} alt="" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{val.seo.title}</h5>
                <p className="card-text">{val.seo.description}</p>
                <div className="author-card">
                  <img src={val.author.avatar_url} alt="" id="img-author" />
                  <p>{val.author.display_name}</p>
                  <p>20h Ago</p>
                  <p>{val.read_time} min read</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className="d-flex flex-column col-12">
        <h3>Lates Stories</h3>
        {renderArticle()}
      </div>
    </>
  );
}
