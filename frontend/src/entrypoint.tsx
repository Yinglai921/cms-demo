import 'rmwc/dist/styles';

import * as React from 'react';
import { render } from 'react-dom';
// App wrapped with redux Provider, store, etc.

import { App } from '../src/app';

render(<App />, document.getElementById('root'));
