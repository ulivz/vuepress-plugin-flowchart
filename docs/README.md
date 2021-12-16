---
sidebar: auto
---

@flowstart
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend

## Install

::: warning Note 
This plugin requires VuePress >= 1.0.0, for now you can try it via `yarn add vuepress@next -D`
:::

```bash
yarn add vuepress-plugin-flowchart -D
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    'flowchart'
  ]
}
```

## Syntax

```markdown
@flowstart [preset]

<!-- Your flowchart code here. -->

@flowend
```

`vuepress-plugin-flowchart` leverages [flowchart.js](https://github.com/adrai/flowchart.js) under the hood.

Available presets for now:

- `vue` (default)
- `ant`

View the current available preset [here](https://github.com/ulivz/vuepress-plugin-flowchart/tree/master/lib/presets), feel free to submit your own preset. : )

### Start & End

- `[Variable]=>start: [Text]`
- `[Variable]=>end: [Text]`

```markdown
@flowstart
st=>start: Start
e=>end: End

st->e
@flowend
```

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

### Operation

- `[Variable]=>operation: [Text]`

```markdown
@flowstart
process=>operation: Operation
e=>end: End

process->e
@flowend
```

@flowstart
process=>operation: Operation
e=>end: End

process->e
@flowend


### Inputoutput

- `[Variable]=>inputoutput: [Text]`

```markdown
@flowstart
process=>inputoutput: Inputoutput
e=>end: End

process->e
@flowend
```

@flowstart
process=>inputoutput: Inputoutput
e=>end: End

process->e
@flowend


### Subroutine

- `[Variable]=>subroutine: [Text]`

```markdown
@flowstart
process=>subroutine: Subroutine
e=>end: End

process->e
@flowend
```

@flowstart
process=>subroutine: Subroutine
e=>end: End

process->e
@flowend


### Condition

- `[Variable]=>condition: [Text]`
- `[Variable]([yesText])->[Position]`
- `[Variable]([noText])->[Position]`

```markdown
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend


### Parallel

- `[Variable]=>parallel: [Text]`
- `[Variable](path1, direction)->[Position]`
- `[Variable](path1, direction)->[Position]`

```markdown
@flowstart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e
@flowend
```

@flowstart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e
@flowend

## Showcase

### #1 Ordinary process

```md
@flowstart
stage1=>operation: Stage 1
stage2=>operation: Stage 2
stage3=>operation: Stage 3

stage1->stage2->stage3
@flowend
```

@flowstart
stage1=>operation: Stage 1
stage2=>operation: Stage 2
stage3=>operation: Stage 3

stage1->stage2->stage3
@flowend

### #2 Complex process

```md
@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend
```

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

### #3 Ant Preset

```markdown
@flowstart ant
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend
```

@flowstart ant
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend


### #4 PIA Preset

```markdown
@flowstart pia
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend
```

@flowstart pia
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend
