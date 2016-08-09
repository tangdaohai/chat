/**
 * Created by Jerry on 16/8/4.
 */

import React from 'react';
import ReactDom from 'react-dom';
import Hello from 'test/hello';

ReactDom.render(<Hello text = 'World' />, document.querySelector("#main"));
