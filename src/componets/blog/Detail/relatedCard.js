import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shake from "react-reveal/Shake";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";
import "./style.css"
const RelatedCard = props => {
  return (
    <div className="blog-wrapper">
      <div className="ImageDiv">
        <Zoom
          //left
          delay={1000}
        >
                  <img className="article-image" alt='ariticle' src={props.image} />
        </Zoom>
        <Bounce left>
          <p>
            <Link to={`/detail/${props.keys}`} className="title">
              {props.title}
            </Link>
          </p>
        </Bounce>
        <Shake>
          <p>
            <Link to={`/detail/${props.keys}`} className="description">
              {props.descriptions}
            </Link>
          </p>
        </Shake>

        <p className="line" />
        <RubberBand>
          <p className="date">
            shshsddgdg
            {props.date}
          </p>
        </RubberBand>
      </div>
    </div>
  );
};
export default RelatedCard;
