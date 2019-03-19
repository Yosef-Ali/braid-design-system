import { Theme as TreatTheme } from 'treat';

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
  columnSpacing: SpacingToken | Record<'gutter', number>;
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
  backgroundColor: Record<BackgroundColor, string>;
  borderRadius: Record<BorderRadius, string>;
  boxShadow: Record<BoxShadow, string>;
  color: Record<Color, string>;
  fill: Record<Fill, string>;
  fontFamily: Record<FontFamily, string>;
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  height: Record<IconSize, string>;
  marginTop: Record<Spacing, string>;
  marginRight: Record<HorizontalSpacing, string>;
  marginBottom: Record<Spacing, string>;
  marginLeft: Record<HorizontalSpacing, string>;
  marginTopDesktop: Record<Spacing, string>;
  marginRightDesktop: Record<HorizontalSpacing, string>;
  marginBottomDesktop: Record<Spacing, string>;
  marginLeftDesktop: Record<HorizontalSpacing, string>;
  minHeight: Record<IconSize, string>;
  paddingTop: Record<VerticalPadding, string>;
  paddingRight: Record<HorizontalSpacing, string>;
  paddingBottom: Record<VerticalPadding, string>;
  paddingLeft: Record<HorizontalSpacing, string>;
  paddingTopDesktop: Record<VerticalPadding, string>;
  paddingRightDesktop: Record<HorizontalSpacing, string>;
  paddingBottomDesktop: Record<VerticalPadding, string>;
  paddingLeftDesktop: Record<HorizontalSpacing, string>;
  display: Record<Display, string>;
  displayDesktop: Record<Display, string>;
  flexDirection: Record<FlexDirection, string>;
  flexDirectionDesktop: Record<FlexDirection, string>;
  transform: Record<Transform, string>;
  transition: Record<Transition, string>;
  width: Record<IconSize | Width, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
  readonly treatTheme: TreatTheme<Tokens>;
}
