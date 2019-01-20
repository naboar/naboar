```javascript
const css = [`margin-left: 5px;`];
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Badge css={css}>Badge</Badge>
      <Badge
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge>
      <Badge.Green css={css}>Badge</Badge.Green>
      <Badge.Green
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge.Green>
      <Badge.Main css={css}>Badge</Badge.Main>
      <Badge.Main
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge.Main>
      <Badge.Orange css={css}>Badge</Badge.Orange>
      <Badge.Orange
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge.Orange>
      <Badge.Purple css={css}>Badge</Badge.Purple>
      <Badge.Purple
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge.Purple>
      <Badge.Red css={css}>Badge</Badge.Red>
      <Badge.Red
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge.Red>
      <Badge.Teal css={css}>Badge</Badge.Teal>
      <Badge.Teal
        css={css}
        canClose={true}
        onClose={() => console.log('this worked!')}
      >
        Badge
      </Badge.Teal>
</div>
```