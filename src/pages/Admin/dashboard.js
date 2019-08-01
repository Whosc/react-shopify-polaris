import React from 'react';

import {AppProvider, Page, Card, Button,Layout} from '@shopify/polaris';

function dashboard() {
  return (
    <AppProvider>
      <Layout>
        <Layout.Section>
          <Card title="Online store dashboard" sectioned>
            <p>dashboard 页面.</p>
          </Card>
          <Card sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </Card>
        </Layout.Section>
      </Layout>
      
  </AppProvider>
  );
}

export default dashboard;
