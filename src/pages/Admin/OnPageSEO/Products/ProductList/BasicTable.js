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
    page: 1,
    size: 10,
    hasPrevious : false,
    hasNext : true,
    total:0,
    products:[],
  };

 
  // 初始化表格
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

  
  // 获取并更新产品数据
  getProductList = async () => {
    const params = {page:this.state.page,size:this.state.size,q:this.state.value};
    // console.log(params);
    const response = await reqGetProductList(params)
    if (response.code==='200') {
      // console.log(response.data.result); 
      const products  = response.data.result.map((item , key)=>{
        return ([
            <Thumbnail source={item.imgsrc} alt={item.title} />,
            <Link url = {`/admin/on-page-seo/productbyid/${item.id}`} >{item.title}</Link>,
            <Link url = {`/admin/on-page-seo/productbyid/${item.id}`} ><span>{item.primary_keywords?item.primary_keywords:<div><span className="addkeys"></span>  Add a keyword</div>}</span></Link>,
            <Link url = {`/admin/on-page-seo/productbyid/${item.id}`} ><SEOIssues issues={item.seo_issues} /></Link>,
            <Link url = {`/admin/on-page-seo/productbyid/${item.id}`} ><div className="center"><SEOScore score={item.seo_score}/></div></Link>,
          ]);
      });
      // 更新产品列表数据
      this.setState({
        products:products
      });

      // 更新分页数据
      if(this.state.page > 1){
        this.setState({
          hasPrevious:true
        });
      }else{
        this.setState({
          hasPrevious:false
        });
      }

      const maxPage =  Math.ceil(response.data.count / this.state.size);
      if(this.state.page < maxPage){
        this.setState({
          hasNext:true
        });
      }else{
        this.setState({
          hasNext:false
        });
      }

      this.setState({
        total:response.data.count
      });

    }
  }


  handleChange = (value) => {
    this.setState(({value:value}),()=>{
        // console.log(this.state.value);
        this.getProductList();
    });
  };


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
          footerContent={`Showing ${this.state.products.length} of ${this.state.total} results`}
        /> 
        <Pagination
          hasPrevious = {this.state.hasPrevious}
          onPrevious={() => {
            this.setState(({page:this.state.page - 1}),()=>{
                this.getProductList();
            });
          }}

          hasNext = {this.state.hasNext}
          onNext={() => {
            this.setState(({page:this.state.page + 1}),()=>{
                this.getProductList();
            });
          }}
         
          
        />
      </div>
    );
  }
}

  export default BasicTable;