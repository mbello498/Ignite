import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import App from '../App';

const setMarkdown = (markdown = []) => {
  return markdown.reduce(
    (markdownMap, [pathToMarkdown, component, isIndex, firstLink]) => {
      markdownMap[pathToMarkdown] = component;

      if (isIndex) {
        markdownMap.indexFiles = {
          ...markdownMap.indexFiles,
          [pathToMarkdown]: firstLink
        };
      }

      return markdownMap;
    },
    {}
  );
};

const setPlugins = plugins => {
  return plugins.reduce(
    (pluginMap, [name, component, options]) =>
      Object.assign({}, pluginMap, {
        [name]: {
          name,
          component,
          options
        }
      }),
    {}
  );
};

class MarkdownProvider extends Component {
  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    markdown: PropTypes.array,
    blogHero: PropTypes.string,
    plugins: PropTypes.array
  };

  static defaultProps = {
    blogHero: null,
    markdown: [],
    plugins: []
  };

  state = {
    markdown: setMarkdown(this.props.markdown),
    plugins: setPlugins(this.props.plugins)
  };

  static getDerivedStateFromProps(newProps, state) {
    return {
      ...state,
      markdown: setMarkdown(newProps.markdown)
    };
  }

  render() {
    return (
      <App
        markdown={this.state.markdown}
        location={this.props.location}
        plugins={this.state.plugins}
        blogHero={this.props.blogHero}
      />
    );
  }
}

export default MarkdownProvider;
