## MoonWalk.JS

Removes trailing indentation in templating strings and other strings with multiple lines.

### Usage

Without moonwalk:

```js
function () {
  let y = 0;
  if(true) {
    let x = `
<div>
  <span>OK</span>
  <div>
    <div></div>
  </div>
</div>
`;
 }
```

With moonwalk:

```js
import moonwalk from 'moon-walk';
let y = 0;
  if(true) {
    let x = moonwalk(`
      <div>
        <span>OK</span>
        <div>
          <div></div>
        </div>
      </div>
    `);
  }
```
