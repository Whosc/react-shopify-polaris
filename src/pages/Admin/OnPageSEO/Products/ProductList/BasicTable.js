import React, { Component } from 'react';
import { DataTable , TextField , Icon , Link , Thumbnail , Stack , Badge} from '@shopify/polaris';
import { SearchMinor , ArrowRightMinor} from '@shopify/polaris-icons';

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
        <Stack color="indigo"><Badge  color="indigo" >well done</Badge></Stack>,
        <div className="center"><span className="success">100</span></div>,
      ],
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Mauve Cashmere Scarf</Link>,
        <Link url="https://www.example.com"><div><span className="addkeys"></span>  Add a keyword</div></Link>,
        <Link url="https://www.example.com"><div><span className="seoissues">3</span> warnings</div></Link>,
        <Link url="https://www.example.com"><Icon source={ArrowRightMinor} color="indigo" /></Link>,
      ],
      [
        <Thumbnail
          source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          alt="Black choker necklace"
        />,
        <Link url="https://www.example.com">Navy Merino Wool Blazer with khaki chinos and yellow belt</Link>,
        <div><span className="addkeys"></span>  Add a keyword</div>, 
        <div><span className="seoissues">5</span> warnings</div>, 
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
            prefix={<Icon source={SearchMinor} color="green" />}
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