import React, { Component } from 'react';
import { DataTable , TextField , Icon , Link , Thumbnail , Pagination} from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';

import SEOScore from '../../../../../components/SEOScore';
import SEOIssues from '../../../../../components/SEOIssues';

import { reqGetProductList } from '../../../../../api';


import './productList.css';

class BasicTable extends Component {

  state = {
    value: '',
    page:'1',
    size:'10',
    products:[],
  };

 

  initColumn = () => {
    this.columnContentTypes = [
      'text',
      'text',
      'text',
      'text',
      'text',
    ];
    this.headings = [
      '',
      'Title',
      'Keyword',
      'SEO issues',
      'SEO Score',
    ];
  }

  handleChange = (value) => {
    this.setState({value:value});
    console.log(value);
    console.log(this.state.value);
    this.getProductList();

  };

  getProductList = async () => {
    const response = await reqGetProductList({page:this.state.page,size:this.state.size,q:this.state.value})
    if (response.code==='200') {
      // console.log(response.data.result); 
      const products  = response.data.result.map((item , key)=>{
        return ([
            <Thumbnail source={item.imgsrc} alt={item.title} />,
            <Link url="https://www.example.com">{item.title}</Link>,
            <span>{item.primary_keywords?item.primary_keywords:<div><span className="addkeys"></span>  Add a keyword</div>}</span>, 
            <SEOIssues issues={item.seo_issues} />,
            <div className="center"><SEOScore score={item.seo_score}/></div>,
          ]);
      });

      this.setState({
        products:products
      });
    }
  }


  componentWillMount () {
    this.initColumn()
  }

  componentDidMount () {
    this.getProductList()
  }


  render() {
    
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
          columnContentTypes={ this.columnContentTypes }
          headings={this.headings}
          rows={this.state.products}
          // totals={['', '', '', 255, '$155,830.00']}
          verticalAlign="middle"
        /> 
         <Pagination
          hasPrevious
          onPrevious={() => {
            console.log('Previous');
          }}
          hasNext
          onNext={() => {
            // this.setState({
            //   page:this.state.page + 1 
            // });
            console.log('Next');
          }}
        />
      </div>
    );
  }
}

  export default BasicTable;