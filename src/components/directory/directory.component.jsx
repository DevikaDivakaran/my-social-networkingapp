import React from 'react';

import FriendView from '../friendview/friendsdetails'
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Janique Costa',
          imageUrl: 'https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
          id: 1,
        
        },
        {
          title: 'Khaled Børresen',
          imageUrl:'https://www.mobolize.com/wp/wp-content/uploads/2018/05/man-tablet-smiling-600x400.jpg',
          id: 2,
        },
        {
          title: 'Maja Kristense',
          imageUrl:'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
          id: 3,
          
        },
        {
        title: 'Latife Çevik',
          id: 4,
          imageUrl:'https://cdn.pixabay.com/photo/2015/12/19/21/03/person-1100286_960_720.jpg'
      },
      
  {
  title: 'Sayenne Leendertse',
    id: 5,
    imageUrl: 'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg'
},
{
title: 'Niklas Hamalainen',
  id: 6,
  imageUrl: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg'
},
{
  title: 'Friedlinde Würfel',
    
    id: 7,
imageUrl:'https://img.freepik.com/free-photo/cheerful-businessman-enjoying-success_1262-16166.jpg?size=626&ext=jpg'  },
{
title: 'Freja Madsen',
  
  id: 8,
imageUrl:'http://st.depositphotos.com/2931363/4881/i/450/depositphotos_48813801-Businessman-pointing-copy-space..jpg'
},
{
title: 'Florence Harris',
  id: 9,
imageUrl:'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.2.1660430068.1601510400'
},
{
title: 'Monsieur Reto Chevalier',
  id: 10,
imageUrl:'https://image.freepik.com/free-photo/surprised-playful-touched-good-looking-african-american-woman-glasses-stylish-brown-t-shirt-clasping-hands-smiling-from-joy-excitement-liking-great-show_176420-23322.jpg'
},
{
  title: 'Stenan Dufour',
  imageUrl: 'https://st3.depositphotos.com/12985790/16875/i/600/depositphotos_168751754-stock-photo-man-buttoning-up-shirt.jpg',

    id: 11,
    
  },
{
title: 'Mohamed Santos',
imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCogB5Hd9JblmBc1a8vbNgkzdW5l6dvzV3Q&usqp=CAU',
  id: 12,
 
},
{
title: 'Jonathan Hansen',
  imageUrl: 'https://st3.depositphotos.com/10654668/14328/i/600/depositphotos_143284773-stock-photo-businessman-with-cup-of-coffee.jpg',
  id: 13,
 
},
{
  title: 'Henna Penner',
    imageUrl: 'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1903/vadymvdrobot190306154/119989030-portrait-of-a-beautiful-pensive-young-woman-casualy-dressed-standing-isolated-over-white-background.jpg?ver=6',
    id: 14,
 
  },

{
title: 'Linda Rogers',
  imageUrl: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
  id: 15,
 
},
{
title: 'Miss Doreen Krull',
  
  id: 16,
  imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20161214164224-GettyImages-533978993.jpeg'
},

{
title: 'Elke Wölk',
  id: 17,
imageUrl:'https://thumbs.dreamstime.com/b/close-up-portrait-rejoicing-surprised-asian-woman-glasses-happy-person-hear-great-awesome-news-realise-something-close-178164807.jpg'
},
{
title: 'Logan Hamilton',
  imageUrl: 'https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782',
  id: 18,
  
},
{
  title: 'Ms Latif Naha',
    imageUrl: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_143919450_970647970450097_58844.jpg',
    id: 19,
    
  },
  {
    title: 'Anna Jørgensen',
      imageUrl: ' https://ak.picdn.net/shutterstock/videos/4634066/thumb/6.jpg',
      id: 20,
     
    }
       
      ]
    };
  }

  render() {
    return (
      <div className='directory-friends'>
        {this.state.sections.map(({ id,imageUrl,title }) => (
          <FriendView  id={id} key={id} imageUrl={imageUrl} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;
