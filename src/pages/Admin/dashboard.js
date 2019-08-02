import React from 'react';

import {AppProvider,  Card, Layout} from '@shopify/polaris';

function dashboard() {
  return (
    <AppProvider>
      <Layout>
        <Layout.Section>
          <Card title="Online store dashboard" sectioned>
            <p>dashboard 页面.</p>
          </Card>
        </Layout.Section>
      </Layout>
      
  </AppProvider>
  );
}

export default dashboard;
