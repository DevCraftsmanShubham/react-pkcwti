import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
const file = 'pdf_url'
const type = 'pdf'

class App extends Component {

 onError(e) {
    logger.logError(e, 'error in file-viewer');
  }
  render() {

    return (
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={this.onError}/>
    );
  }
}

render(<App />, document.getElementById('root'));
