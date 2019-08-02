import React, { Component } from 'react';
import { Tabs } from '@shopify/polaris';

class OnPageSEOTabs extends Component {
    state = {
      selected: 1,
    };
  
    handleTabChange = (selectedTabIndex) => {
      this.setState({selected: selectedTabIndex});
    };
  
    render() {
      const {selected} = this.state;
      const tabs = [
        {
          id: '0',
          content: 'Dashboard',
          accessibilityLabel: 'Dashboard',
          panelID: 'dashboard',
          link:'/admin/dashboard',
        },
        {
          id: '1',
          content: 'Products',
          panelID: 'products',
        },
        {
          id: '2',
          content: 'Collections',
          panelID: 'collections',
        },
        {
          id: '3',
          content: 'Blog',
          panelID: 'blog',
        },
        {
            id: '4',
            content: 'Special Pages',
            panelID: 'special-pages',
          },
      ];
  
      return (
        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange}>
        {/* <Card.Section title={tabs[selected].content}>
            <p>Tab {selected} selected</p>
        </Card.Section> */}
        </Tabs>
      );
    }
  }


  export default OnPageSEOTabs;