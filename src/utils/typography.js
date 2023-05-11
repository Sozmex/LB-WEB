import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    ".blog2 a": {
      boxShadow: `none`,
    },
    ".blog2 *": {
      boxShadow: `none`,
    },
    ".index a": {
      boxShadow: `none`,
    },
    ".index *": {
      boxShadow: `none`,
    },
    ".awarditem a": {
      boxShadow: `none`,
    },
    ".awarditem *": {
      boxShadow: `none`,
    },
    "footer a": {
      boxShadow: `none`,
    },
    "header a": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
