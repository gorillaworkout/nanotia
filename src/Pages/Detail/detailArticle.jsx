import React, { useState, useEffect } from "react";
import Header from "../../Component/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import "../../Style/detailArticle.scss";
import parse from "html-react-parser";
import image_nano from "../../Asset/image_techin.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

export const SEO = ({ title, description, meta = [] }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    />
  );
};
export default function DetailArticle() {
  toast.configure();
  const navigate = useNavigate();
  const { detail } = useParams();
  const Product = useSelector((state) => state.Product);
  const [hasMore, sethasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productRender, setProductRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allProduct, setAllProduct] = useState(Product?.allProduct);
  const [totalLimitArticle, setTotalLimitArticle] = useState(
    JSON.parse(localStorage.getItem("totalArticle"))
  );
  useEffect(() => {
    dataToRender(currentPage);
    setAllProduct(Product?.allProduct);
  }, [currentPage, Product]);

  const dataToRender = () => {
    if (totalLimitArticle > 5) {
      setIsLoading(true);
      toast.error("Maximum 5 Article!, Ciao!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else {
      let findMax = currentPage * 1;
      if (Product?.allProduct) {
        let productArticle = Product?.allProduct;

        let findIndex = productArticle.findIndex((val) => {
          if (val.seo.title === detail) {
            return val;
          }
        });
        productArticle.splice(0, 0, productArticle[findIndex]);
        productArticle.splice(findIndex + 1, 1);
        let sliceItems = productArticle.slice(0, findMax);
        setTimeout(() => {
          setProductRender(sliceItems);
          setIsLoading(false);
        }, 1500);
        if (findMax === Product.allProduct.length) {
          sethasMore(false);
        }
      }
    }
  };

  const renderLoading = () => {
    const totalItems = 4;
    const items = new Array(totalItems).fill(null);
    return items.map((val, index) => {
      return (
        <div className="card-article" key={index+1}>
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
              <p className="card-text">
                <Skeleton />
              </p>
              <Skeleton />
            </div>
          </div>
        </div>
      );
    });
  };
  const renderArticle = () => {
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
            <>
              <p id="newsletter">{val.categories[0].name}</p>
              <div className="detail-article" key={index + 1}>
                <div className="author-card">
                  <img src={val.author.avatar_url} alt="" />
                  <p>{val.author.display_name}</p>
                  <p>20 jan 2023</p>
                  <p>{val.read_time} min read</p>
                </div>
                <h1>{val.seo.title}</h1>
                <div>{parse(val.content)}</div>
              </div>
            </>
          );
        })}
      </InfiniteScroll>
    );
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>{detail}</title>
      </Helmet>
      <div className="banner_nano">
        <img src={image_nano} alt="" />
      </div>
      <div className="container d-flex flex-row container-card">
        <div className="d-flex flex-column col-8 card-left-detail">
          {isLoading ? <>{renderLoading()}</> : <>{renderArticle()}</>}
        </div>
        <div className="d-flex flex-column col-4">{/* <Iklan/> */}</div>
      </div>
    </>
  );
}
