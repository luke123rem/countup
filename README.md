# @luke123rem/countup

[![npm version](https://badge.fury.io/js/%40luke123rem%2Fcountup.svg)](https://www.npmjs.com/package/@luke123rem/countup)
[![Downloads](https://img.shields.io/npm/dm/@luke123rem/countup.svg)](https://www.npmjs.com/package/@luke123rem/countup)

A lightweight React hook for creating smooth scroll-triggered count-up animations.

When an element enters the viewport, the counter animates from 0 to a target value automatically.

## Installing

```bash
npm install @luke123rem/countup
```

## Usage

```jsx
import { useCountUp } from "@luke123rem/countup";

function Stats() {
  const { ref, value } = useCountUp(1000, 2000);

  return (
    <h2 ref={ref}>
      {value}
    </h2>
  );
}

export default Stats;
```

## API

```js
useCountUp(target, duration)
```

| Parameter | Type   | Default | Description                        |
| --------- | ------ | ------- | ---------------------------------- |
| target    | number | 5       | Final count value                  |
| duration  | number | 1200    | Animation duration in milliseconds |

## Perfect For

* Statistics sections
* Portfolio metrics
* Dashboard analytics
* Achievement counters
* Landing page highlights
* Business KPIs

## Features

* React Hook API
* Scroll-triggered animations
* Zero dependencies
* Lightweight
* Easy integration
* Built with Intersection Observer

## License

MIT
