import React, {
  Component
} from 'react'
import firebase from '../../../Firebase/config'
import ReactMarkdown from "react-markdown"

import Header from '../../Header/Header';

import RelatedCard from "./relatedCard"
import Slide from 'react-reveal/Slide'
import {

  Container,

} from 'bootstrap-4-react';
import "./style.css"
// import { from } from 'rxjs';
export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('articles');
    this.unsubscribe = null;
    this.state = {
      data: {},
      articles: [],
      key: '',
      date: ''
    };
  }

  renderingRelatedPost = (article) => {
    console.log()
    if (article > 1) {


      for (let i = 0; i < 2; i++) {


        let body = article.Body[i]
        var maxLength = 120
        let trimmedString = body.substr(0, maxLength);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return <Slide top >

          <RelatedCard
        keys = {
          article.keys
        }
        title = {
          article.title
        }
        image = {
          article.FeaturedImage
        }
        descriptions = {
          trimmedString
        }
        date = {
          article.date
        }
        /> </Slide>
      }

    } else {
      article.map(article => {
        let body = article.content
        console.log(article)
        //  let date = new Date(article.datePublished.toDate()).toDateString()
        // var maxLength = 120
        // var trimmedString = body.substr(30, maxLength);
        // trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return <Slide top>

          <RelatedCard
        keys = {
          article.keys
        }
        title = {
          article.title
        }
        image = {
          article.featuredImage
        }
        // descriptions={trimmedString}
        // date={date}
        /> </Slide>
      })
    }
  }
  onCollectionUpdate = (querySnapshot) => {
    const articles = [];
    querySnapshot.forEach((doc) => {
      const {
        Body,
        FeaturedImage,
        title,
        date
      } = doc.data();
      articles.push({
        keys: doc.id,
        doc, // DocumentSnapshot
        Body,
        FeaturedImage,
        title,
        date
      });
    });
    this.setState({
      articles
    });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    let id = this.props.match.params.id;
    console.log(id)
    const ref = firebase.firestore().collection('articles').doc(id);
    ref.onSnapshot(doc => {
      if (doc.exists) {
        let date = new Date(doc.data().datePublished.toDate()).toDateString();
        this.setState({
          data: doc.data(),
          key: doc.id,
          isLoading: false,
          date
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  render() {
    const article = this.state.data;
    // console.log(this.state.data.datePublished)

    return (
      <Container className = "body">

        <Header />
        <div className = "article-title" > 
          {  this.state.data.title } 
          <p className = "article-date" > {this.state.date} </p> 
          <p className="article-read"> 4 mins read </p> 
        </div>
        <div>

          <img src = {
            article.featuredImage
          }
          className = "article-image" /> 
        </div> 
        <div>
          <ReactMarkdown className = "article-content"
            source = {
              article.content
            }
            escapeHtml = {
              false
            }
          />
        </div>
        <div className="relatedArticle" >
              <div className = "related-row" >
              {/* dsoci;CNK.EWCIHLKW,NCM  */}
            {
              this.renderingRelatedPost(this.state.articles)
            }

            </div>

        </div>
      </Container>
    )
  }
}