import React, { Component } from 'react'
import firebase from '../../Firebase/config'
// import { Link } from 'react-router-dom';
import PostCard from "./blogPost"
import ReactMarkdown from "react-markdown"
// import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import {
  
  Container,
  
} from 'bootstrap-4-react';
import './BlogHome.css';
// import Image1 from "../../resources/images/slide_one.jpg"


export default class BlogHome extends Component {
  // state = {
  //   image: Image1,
  //   title: "Lorem ipsum dolor sit amet",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   date: "24 March, 2019"
  // }
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('articles');
    this.unsubscribe = null;
    this.state = {  
      articles: []
    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const articles = [];
    querySnapshot.forEach((doc) => {
      const { content, featuredImage, title, datePublished } = doc.data();
      articles.push({
        keys: doc.id,
        doc, // DocumentSnapshot
        content,
        title,
        featuredImage,
        datePublished
      });
    });
    this.setState({
      articles
    });
  }
   componentDidMount() {
     this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
   }
  render() {
    return (
      <Container className='mainContainer'>
        <div className="row">
          
          {this.state.articles.map(article => {
            let body = article.content
            var maxLength = 100
          
            let  date = new Date(article.datePublished.toDate()).toDateString()
            var trimmedString = body.substr(64, maxLength);
            
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            trimmedString = trimmedString.replace('<h1>', '') 
            trimmedString = trimmedString.replace('</h1>', '') 
            trimmedString = trimmedString.replace('<h2>', '')
            trimmedString = trimmedString.replace('</h2>', '') 
            trimmedString = trimmedString.replace('<p>', '')
            trimmedString = trimmedString.replace('</p>', '')
            trimmedString = trimmedString.replace('<h1>', '')
            trimmedString = trimmedString.replace('l>', '') 
            trimmedString = trimmedString.replace('<li>', '')
            trimmedString = trimmedString.replace('<a>', '')
            trimmedString = trimmedString.replace('</h1>', '') 
            const editedDescription = (<ReactMarkdown 
              source={ trimmedString}
              escapeHtml={
                false
              }
            />);
             return <Slide top>
               <PostCard 
                keys={article.keys}
                title={article.title}
                image={article.featuredImage}
                description={editedDescription}
                date={date}
                />
              </Slide> 
            }
              
            )}
            {/* <PostCard 
              title={this.state.title}
              image={this.state.image}
              description={this.state.description}
              date={this.state.date}
            /> */}
            {/* <PostCard/> */}
         
          
          
        </div>        
      </Container>
    )
  }
}
