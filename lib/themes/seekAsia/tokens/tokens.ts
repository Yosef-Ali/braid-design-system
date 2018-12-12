import { Tokens } from '../../theme';

const tokens: Tokens = {
  rowHeight: 4,
  columnWidth: 4,
  interactionRows: 11,
  responsiveBreakpoint: 768,
  descenderHeightScale: 0.13,
  heading: {
    level1: {
      mobile: {
        size: 28,
        rows: 9
      },
      desktop: {
        size: 34,
        rows: 11
      }
    },
    level2: {
      mobile: {
        size: 24,
        rows: 8
      },
      desktop: {
        size: 28,
        rows: 9
      }
    },
    level3: {
      mobile: {
        size: 20,
        rows: 7
      },
      desktop: {
        size: 24,
        rows: 8
      }
    }
  },
  text: {
    xsmall: {
      mobile: {
        size: 12,
        rows: 5
      },
      desktop: {
        size: 16,
        rows: 5
      }
    },
    small: {
      mobile: {
        size: 14,
        rows: 6
      },
      desktop: {
        size: 16,
        rows: 6
      }
    },
    standard: {
      mobile: {
        size: 16,
        rows: 6
      },
      desktop: {
        size: 20,
        rows: 6
      }
    },
    large: {
      mobile: {
        size: 24,
        rows: 6
      },
      desktop: {
        size: 20,
        rows: 7
      }
    }
  },
  rowSpacing: {
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 8,
    xxlarge: 16
  },
  columnSpacing: {
    gutter: 5,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 8,
    xxlarge: 16
  },
  borderWidth: {
    standard: 1
  }
};

export default tokens;
