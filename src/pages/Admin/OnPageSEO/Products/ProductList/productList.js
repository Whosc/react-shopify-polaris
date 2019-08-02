import React, { Component } from 'react';

import {AppProvider, Page, Card, Layout } from '@shopify/polaris';
import BasicTable from './BasicTable';
import OnPageSEOTabs from './Tabs';

class productList extends Component {
  
  

  render() {
    return (
      <AppProvider>
        <Page>
          <Layout>
            <Layout.Section>
              <Card  sectioned>

                <OnPageSEOTabs /> 
                <BasicTable />
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
    </AppProvider>
    );
  }
}

export default productList;
