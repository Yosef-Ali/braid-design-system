import { Tokens } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makeMarginRules = (tokens: Tokens) => ({
  ...rowSpacingForCssRule('marginTop', tokens),
  ...columnSpacingForCssRule('marginRight', tokens),
  ...rowSpacingForCssRule('marginBottom', tokens),
  ...columnSpacingForCssRule('marginLeft', tokens)
});

type ruleNames = ''

export default (tokens: Tokens) => ({
  ...makeMarginRules(tokens)
  // ...makeDesktopRules({
  //   tokens,
  //   css: makeMarginRules(tokens, 'Desktop')
  // })
});

{
  '.marginTop': {

  }
}