import { ThemeRef } from 'treat';
// Text definitions
interface TextDefinition {
  size: number;
  rows: number;
}
type Breakpoint = 'mobile' | 'desktop';
type HeadingSize = 'level1' | 'level2' | 'level3';
type TextSize = 'standard' | 'large';
type ResponsiveHeading = Record<Breakpoint, TextDefinition> &
  Record<'regular' | 'weak', FontWeight>;
type ResponsiveText = Record<Breakpoint, TextDefinition>;
export type FieldTone = 'neutral' | 'critical' | 'positive';

// Spacing definitions
interface SpacingToken {
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}
interface ColumnSpacingToken extends SpacingToken {
  gutter: number;
}

// Border definitions
type BorderWidth = 'standard' | 'large';

export interface Tokens {
  rowHeight: number;
  columnWidth: number;
  touchableRows: number;
  responsiveBreakpoint: number;
  descenderHeightScale: number;
  heading: Record<HeadingSize, ResponsiveHeading>;
  text: Record<TextSize, ResponsiveText>;
  rowSpacing: SpacingToken;
  columnSpacing: ColumnSpacingToken;
  borderWidth: Record<BorderWidth, number>;
}

type BackgroundColor =
  | 'input'
  | 'inputDisabled'
  | 'brandAccent'
  | 'brandAccentActive'
  | 'brandAccentHover'
  | 'formAccent'
  | 'formAccentActive'
  | 'formAccentHover'
  | 'formAccentDisabled'
  | 'selection'
  | 'info'
  | 'card'
  | 'critical';
type BorderRadius = 'standard';
export type BoxShadow =
  | 'outlineFocus'
  | 'borderStandard'
  | 'borderCritical'
  | 'borderFormAccent'
  | 'borderFormAccentLarge';
export type Color =
  | 'black'
  | 'white'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'brandAccentForeground'
  | 'formAccent'
  | 'neutral'
  | 'link';
type Fill =
  | 'currentColor'
  | 'formAccent'
  | 'formAccentDisabled'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'white';
type FontFamily = 'text';
type FontSize = TextSize | HeadingSize;
export type FontWeight = 'regular' | 'medium' | 'strong';
export type Display = 'block' | 'inline' | 'none' | 'inlineBlock' | 'flex';
export type FlexDirection = 'row' | 'column';
export type IconSize =
  | 'standardText'
  | 'standardTextInline'
  | 'largeText'
  | 'largeTextInline';
export type Width = 'full';
type Spacing =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
type HorizontalSpacing = Spacing | 'gutter';
type VerticalPadding = Spacing | 'standardTouchableText';
export type Transform =
  | 'standardText'
  | 'largeText'
  | 'level1Heading'
  | 'level2Heading'
  | 'level3Heading'
  | 'touchable';
type Transition = 'fast' | 'touchable';

export interface Atoms {
  color: Record<Color, string>;
  fill: Record<Fill, string>;
  fontFamily: Record<FontFamily, string>;
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  height: Record<IconSize, string>;
  minHeight: Record<IconSize, string>;
  paddingTop: Record<VerticalPadding, string>;
  paddingBottom: Record<VerticalPadding, string>;
  paddingTopDesktop: Record<VerticalPadding, string>;
  paddingBottomDesktop: Record<VerticalPadding, string>;
  transform: Record<Transform, string>;
  width: Record<IconSize | Width, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
  readonly treatTheme: ThemeRef;
}
