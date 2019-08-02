import React, { Component } from 'react';
import { DataTable , TextField , Icon , Link , Thumbnail , Stack , Badge} from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';

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
        '',
        <Stack><Badge color="indigo" >100</Badge></Stack>,
        
      ],
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Mauve Cashmere Scarf</Link>,
        124533, 83, 
        '$19,090.00'
      ],
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Navy Merino Wool Blazer with khaki chinos and yellow belt</Link>,
        124518,
        32,
        '$14,240.00',
      ],
    ];

    return (
      <div>
        <div className="searchInput">
          <TextField
            value={this.state.value} 
            onChange={this.handleChange}
            placeholder="input search text"
            prefix={<Icon source={SearchMinor} color="inkLighter" />}
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