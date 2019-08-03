import React, { Component } from 'react';
import { DataTable , TextField , Icon , Link , Thumbnail} from '@shopify/polaris';
import { SearchMinor , ArrowRightMinor} from '@shopify/polaris-icons';

import SEOScore from '../../../../../components/SEOScore';
import SEOIssues from '../../../../../components/SEOIssues';


import './productList.css';

class BasicTable extends Component {

  state = {
    value: '',
  };

  handleChange = (value) => {
    this.setState({value});
    console.log(value);
  };


  render() {
    const rows = [
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Emerald Silk Gown</Link>,
        'AKUANA', 
        <SEOIssues issues="0" />,
        <div className="center"><SEOScore score="100" /></div>,
      ],
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Mauve Cashmere Scarf</Link>,
        <Link url="https://www.example.com"><div><span className="addkeys"></span>  Add a keyword</div></Link>,
        <Link url="https://www.example.com"><SEOIssues issues="12"  /></Link>,
        <div className="center"><SEOScore score="12" /></div>,
      ],
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Navy Merino Wool Blazer with khaki chinos and yellow belt</Link>,
        <div><span className="addkeys"></span>  Add a keyword</div>, 
        <SEOIssues issues="0" />, 
        <Icon source={ArrowRightMinor} color="indigo" />,
      ],
    ];

    return (
      <div>
        <div className="searchInput">
          <TextField
            value={this.state.value} 
            onChange={this.handleChange}
            placeholder="input search text"
            prefix={<Icon source={SearchMinor}  />}
          />
        </div>
        
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
          ]}
          headings={[
            '',
            'Title',
            'Keyword',
            'SEO issues',
            'SEO Score',
          ]}
          rows={rows}
          // totals={['', '', '', 255, '$155,830.00']}

          verticalAlign="middle"
        /> 
      </div>
    );
  }
}

  export default BasicTable;