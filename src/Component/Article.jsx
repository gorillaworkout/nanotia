import React, { useEffect, useState, useRef } from "react";
import "../Style/Article.scss";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { GetAllProduct } from "../Redux/Actions/ProductActions";
export default function Article(props) {
  const dispatch = useDispatch();
  let newtitle = props.title;
  const navigate = useNavigate();
  const Product = useSelector((state) => state.Product);
  const [hasMore, sethasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productRender, setProductRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arrId, setArrId] = useState([]);
  const [totalUserArticle, setTotalUserArticle] = useState(0);

  useEffect(() => {
    dataToRender(currentPage);
  }, [currentPage]);
  useEffect(() => {
    if (Product?.allProduct) {
      dataToRender();
    }
    if (Product.isLoadingProduct === false) {
      setIsLoading(false);
    }
  }, [Product]);

  useEffect(() => {
    if (!hasMore) {
      dispatch(GetAllProduct());
    }
  }, [hasMore]);

  const dataToRender = () => {
    setIsLoading(true);
    let findMax = currentPage * 5;
    if (Product?.allProduct) {
      let sliceItems = Product.allProduct.slice(0, findMax);
      setTimeout(() => {
        setProductRender(sliceItems);
        setIsLoading(false);
        sethasMore(true)
      }, 1500);
      if (findMax === Product.allProduct.length) {
        sethasMore(false);
      }
    }
  };

  const redirectToDetail = (link, id) => {
    navigate(`/detail/${link}`);
    let totalFromLocalStorage = JSON.parse(
      localStorage.getItem("totalArticle")
    );
    if (totalFromLocalStorage) {
      setTotalUserArticle(totalUserArticle + 1);
    }
    localStorage.setItem("totalArticle", totalFromLocalStorage + 1);
  };
  useEffect(() => {
    if (totalUserArticle === 2) {
      setIsLoading(true);
    }
  }, [totalUserArticle]);

  const renderArticle = () => {
    if (isLoading) {
      const totalItems = 4;
      const items = new Array(totalItems).fill(null);
      return items.map((val, index) => {
        return (
          <div className="card-article" key={index}>
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
      });
    } else {
      return (
        <InfiniteScroll
          dataLength={productRender.length}
          next={() => setCurrentPage(currentPage + 1)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {productRender.map((val, index) => {
            return (
              <div
                className="card-article"
                key={index + 1}
                onClick={() => redirectToDetail(val.seo.title, index)}
              >
                <img src={val.featured_image.source} alt="" />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{val.seo.title}</h5>
                    <p className="card-text">{val.seo.description}</p>
                    <div className="author-card">
                      <img src={val.author.avatar_url} alt="" id="img-author" />
                      <p>{val.author.display_name}</p>
                      <p>20h Ago</p>
                      {/* <p>{val.read_time} min read</p> */}
                      <p>{index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      );
    }
  };

  return (
    <>
      <div id="article-box" className="d-flex flex-column col-12">
        <h3>Lates Stories</h3>
        {renderArticle()}
      </div>
    </>
  );
}
