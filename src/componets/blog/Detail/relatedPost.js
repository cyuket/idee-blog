// import React, { Component } from 'react'
// import firebase from '../../../Firebase/config'
// import RelatedCard from "./relatedCard"
// import Slide from 'react-reveal/Slide'
// import './related.css'
// import {

//     Container,

// } from 'bootstrap-4-react';
// export default class RelatedPost extends Component {
//     constructor(props) {
//         super(props);
//         this.ref = firebase.firestore().collection('articles');
//         this.unsubscribe = null;
//         this.state = {
//             articles: []
//         };
//     }
//     onCollectionUpdate = (querySnapshot) => {
//         const articles = [];
//         querySnapshot.forEach((doc) => {
//             const {
//                 Body,
//                 FeaturedImage,
//                 title,
//                 date
//             } = doc.data();
//             articles.push({
//                 keys: doc.id,
//                 doc, // DocumentSnapshot
//                 Body,
//                 FeaturedImage,
//                 title,
//                 date
//             });
//         });
//         this.setState({
//             articles
//         });
//     }
//     componentDidMount() {
//         this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
//     }
//   render() {
//       const relatedArticle = this.state.articles
//     return (
        
//       <Container>
//             <div className="related-row">
//               {this.state.articles.map(article => 
//               <Slide top>
                
//               <RelatedCard 
//                 keys={article.keys}
//                 title={article.title}
//                 image={article.FeaturedImage}
//                 description={article.body}
//                 date={article.date}
//                 />
//               </Slide>
//             )}
            
//         </div>
//       </Container>
//     )
//   }
// }
