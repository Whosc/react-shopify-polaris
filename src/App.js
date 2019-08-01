import React from 'react';

import {AppProvider, Page, Card, Button} from '@shopify/polaris';

function App() {
  return (
    <AppProvider>
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
  </AppProvider>
  );
}

export default App;
