import React from 'react';

import {AppProvider, Page, Card, Button,Layout} from '@shopify/polaris';

function productList() {
  return (
    <AppProvider>
      <Layout>
        <Layout.Section>
          <Card title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </Card>
          <Card sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </Card>
        </Layout.Section>
      </Layout>
      
  </AppProvider>
  );
}

export default productList;
