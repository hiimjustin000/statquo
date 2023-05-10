# statquo
Utility functions for working with statistics.

## Installation
```bash
$ npm install statquo
```

## Importing
This library can be imported using the following syntax:
```javascript
const statquo = require("statquo");
const { mad, mean, median, quantile } = require("statquo");
const mad = require("statquo/mad");
```
```javascript
import * as statquo from "statquo";
import { mad, mean, median, quantile } from "statquo";
import mad from "statquo/mad";
```
```html
<script src="https://cdn.jsdelivr.net/npm/statquo/dist/statquo.js"></script>
```
```html
<script src="https://cdn.jsdelivr.net/npm/statquo/dist/statquo.min.js"></script>
```

## Usage
```javascript
const statquo = require("statquo");
const data = [1, 2, 3, 4, 5];
console.log(statquo.mean(data)); // 3
console.log(statquo.median(data)); // 3
console.log(statquo.mad(data)); // 1.2
console.log(statquo.quantile(data, 0.25)); // 2
console.log(statquo.range(data)); // 4
console.log(statquo.variance(data)); // 2
console.log(statquo.stdev(data)); // 1.5811388300841898
console.log(statquo.covariance(data, data)); // 2
```

## Documentation
The documentation can be found [here](https://hiimjustin000.github.io/statquo).

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
