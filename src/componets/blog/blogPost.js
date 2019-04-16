import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Shake from 'react-reveal/Shake'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom'
import RubberBand from 'react-reveal/RubberBand';


const PostCard =  (props)=> {
    
  
    return (
        <div className="blog-wrapper">
            
            <div className="ImageDiv">
                <Zoom
                    //left
                    delay ={1000}
                >
                    {/* <div></div> */}
                    <img src={props.image}/>
                </Zoom>
                <Bounce
                    left
                    d
                >
                    <p >
                       <Link to={`/detail/${props.keys}`} className="title">{props.title}</Link>
                    </p>
                </Bounce>
                <Shake
                    
                >
                <p >
                     <Link to={`/detail/${props.keys}`} className="description">{props.description}</Link>
                </p>
                </Shake>
                
                <p className="line"></p>
                <RubberBand>
                    <p className="date">
                        {
                            props.date
                        }
                </p>
                </RubberBand>
                
            </div>

        </div>
    )
  
}
export default PostCard