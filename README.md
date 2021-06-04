# e-stella-whiteboard

> Whiteboard component for e-Stella project

[![NPM](https://img.shields.io/npm/v/e-stella-whiteboard.svg)](https://www.npmjs.com/package/e-stella-whiteboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save e-stella-whiteboard
```

## Usage

```jsx
import React, { Component } from 'react'

import Whiteboard from 'e-stella-whiteboard'

class Example extends Component {
  render() {
    return <Whiteboard code="" client_id="" />
  }
}
```

### Props

|Name   | Meaning   |Example   |Type    |
|---|---|---|--- |
|client_id  | API key from [here](https://www.whiteboard.team/)   | It's an API key, there won't be any example  | string   |
|code   |Whiteboard code (more info [here](https://www.whiteboard.team/))   |  Literaly anything, that has more than 15 letters  |string    |

## License

MIT © [Davenury](https://github.com/Davenury)
