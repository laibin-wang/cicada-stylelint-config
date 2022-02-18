# Stylelint Config of cicada-design

## Install

```shell
# with npm
npm i @cicada-design/stylelint-config -D

# with yarn
yarn add @cicada-design/stylelint-config -D

# with pnpm
pnpm add @cicada-design/stylelint-config -D
```

## Usage

```js
{
  "extends": ["@cicada-design/stylelint-config"]
}
```

## EXAMPLE

``` css
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
 
  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
 
  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;
 
  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;
 
  /* Animation */
  transition: all 1s;
 
  /* Misc */
  user-select: none;
```