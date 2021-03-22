import React from 'react';

import FriendView from '../friendview/friendsdetails'
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Kim Namjoon',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_RM_profile-200x200.jpg',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'Kim Soekjin',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_Jin_profile-200x200.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Min Yoongi',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_Suga_profile-200x200.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'jung Hoseok',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_J-Hope_profile-200x200.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Park Jimin',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_Jimin_profile-200x200.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
        {
          title: 'Kim Taehyung',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_V_profile-200x200.jpg',
          size: 'large',
          id: 6,
          linkUrl: ''
        },
        {
          title: 'Jeon Jungkook',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_Jungkook_Profile-200x200.jpg',
          size: 'large',
          id: 7,
          linkUrl: ''
        },
        {
          title: 'Lisa',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_lisa_profile_the_album-200x200.jpg',
          size: 'large',
          id: 8,
          linkUrl: ''
        },
        {
          title: 'Rose',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_Rose_profile_the_album-200x200.jpg',
          size: 'large',
          id: 9,
          linkUrl: ''
        },
        {
          title: 'Jennie',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_Jennie_profile_the_album-200x200.jpg',
          size: 'large',
          id: 10,
          linkUrl: ''
        },
        {
          title: 'Jisoo',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_Jisoo_profile_the_album-200x200.jpg',
          size: 'large',
          id: 11,
          linkUrl: ''
        },
        {
          title: 'Tzuyu',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/twice_tzuyu_profile_eyes_wide_open-200x200.jpg',
          id: 12,
          linkUrl: ''
        },
        {
          title: 'Chaeyoung',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Chaeyoung_profile_Eyes_wide_open-200x200.jpg',
          id: 13,
          linkUrl: ''
        },
        {
          title: 'Dahyun',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_dahyun_profile_moremore-200x200.jpg',
          id: 14,
          linkUrl: ''
        },
        {
          title: 'Mina',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Mina_Profile_MoreMore-200x200.jpg',
          id: 15,
          linkUrl: ''
        },
        {
          title: 'Jihyo',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Jihyo_profile_Eyes_wide_open-200x200.jpg',
          id: 16,
          linkUrl: ''
        },
        {
          title: 'Sana',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_sana_profile_eyes_wide_open-200x200.jpg',
          id: 17,
          linkUrl: ''
        },
        {
          title: 'Momo',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Momo_profile_moreandmore-200x200.jpg',
          id: 18,
          linkUrl: ''
        },
        {
          title: 'Jeongyeon',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/twice_moremore_concept_HD_Jeongyeon_profile-200x200.jpg',
          id: 19,
          linkUrl: ''
        },
        {
          title: 'Nayeon',
          imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Nayeon_Profile_Eyes_wide_open-200x200.jpg',
          id: 20,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-friends'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <FriendView key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
