import { createGlobalStyle } from 'styled-components'

import NunitoBlack from 'common/styles/fonts/Nunito/Nunito-Black.ttf'
import NunitoBlackItalic from 'common/styles/fonts/Nunito/Nunito-BlackItalic.ttf'
import NunitoBold from 'common/styles/fonts/Nunito/Nunito-Bold.ttf'
import NunitoBoldItalic from 'common/styles/fonts/Nunito/Nunito-BoldItalic.ttf'
import NunitoExtraBold from 'common/styles/fonts/Nunito/Nunito-ExtraBold.ttf'
import NunitoExtraBoldItalic from 'common/styles/fonts/Nunito/Nunito-ExtraBoldItalic.ttf'
import NunitoExtraLight from 'common/styles/fonts/Nunito/Nunito-ExtraLight.ttf'
import NunitoExtraLightItalic from 'common/styles/fonts/Nunito/Nunito-ExtraLightItalic.ttf'
import NunitoItalic from 'common/styles/fonts/Nunito/Nunito-Italic.ttf'
import NunitoLight from 'common/styles/fonts/Nunito/Nunito-Light.ttf'
import NunitoLightItalic from 'common/styles/fonts/Nunito/Nunito-LightItalic.ttf'
import NunitoRegular from 'common/styles/fonts/Nunito/Nunito-Regular.ttf'
import NunitoSemiBold from 'common/styles/fonts/Nunito/Nunito-SemiBold.ttf'
import NunitoSemiBoldItalic from 'common/styles/fonts/Nunito/Nunito-SemiBoldItalic.ttf'
import PromptBlack from 'common/styles/fonts/Prompt/Prompt-Black.ttf'
import PromptBlackItalic from 'common/styles/fonts/Prompt/Prompt-BlackItalic.ttf'
import PromptBold from 'common/styles/fonts/Prompt/Prompt-Bold.ttf'
import PromptBoldItalic from 'common/styles/fonts/Prompt/Prompt-BoldItalic.ttf'
import PromptExtraBold from 'common/styles/fonts/Prompt/Prompt-ExtraBold.ttf'
import PromptExtraBoldItalic from 'common/styles/fonts/Prompt/Prompt-ExtraBoldItalic.ttf'
import PromptExtraLight from 'common/styles/fonts/Prompt/Prompt-ExtraLight.ttf'
import PromptExtraLightItalic from 'common/styles/fonts/Prompt/Prompt-ExtraLightItalic.ttf'
import PromptItalic from 'common/styles/fonts/Prompt/Prompt-Italic.ttf'
import PromptLight from 'common/styles/fonts/Prompt/Prompt-Light.ttf'
import PromptLightItalic from 'common/styles/fonts/Prompt/Prompt-LightItalic.ttf'
import PromptMedium from 'common/styles/fonts/Prompt/Prompt-Medium.ttf'
import PromptMediumItalic from 'common/styles/fonts/Prompt/Prompt-MediumItalic.ttf'
import PromptRegular from 'common/styles/fonts/Prompt/Prompt-Regular.ttf'
import PromptSemiBold from 'common/styles/fonts/Prompt/Prompt-SemiBold.ttf'
import PromptSemiBoldItalic from 'common/styles/fonts/Prompt/Prompt-SemiBoldItalic.ttf'
import PromptThin from 'common/styles/fonts/Prompt/Prompt-Thin.ttf'
import PromptThinItalic from 'common/styles/fonts/Prompt/Prompt-ThinItalic.ttf'

export const getGlobalStyle = () => createGlobalStyle`

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoBlack}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.black};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoBlackItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.black_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoBold}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoBoldItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.bold_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoExtraBold}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_bold};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoExtraBoldItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_bold_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoExtraLight}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_light};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoExtraLightItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_light_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.regular_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoLight}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.light};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoLightItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.light_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoRegular}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.regular};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoSemiBold}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.semi_bold};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.nunito};
        src: url(${NunitoSemiBoldItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.semi_bold_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptBlack}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.black};
    }


    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptBlackItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.black_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptBold}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptBoldItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.bold_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptExtraBold}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_bold};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptExtraBoldItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_bold_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptExtraLight}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_light};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptExtraLightItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.extra_light_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.regular_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptLight}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.light};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptLightItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.light_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptMedium}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.medium};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptMediumItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.medium_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptRegular}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.regular};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptSemiBold}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.semi_bold};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptSemiBoldItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.semi_bold_italic};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptThin}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.thin};
    }

    @font-face {
        font-family: ${(props) => props.theme.fontFamily.prompt};
        src: url(${PromptThinItalic}) format('truetype');
        font-weight: ${(props) => props.theme.fontWeight.thin_italic};
    }

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }

    body {
        margin: 0;
        font-family: ${(props) => props.theme.fontFamily.prompt};
        font-size: ${(props) => props.theme.fontSize.default};
        font-weight: ${(props) => props.theme.fontWeight.regular}
    }

    main {
        display: block;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    } 

    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
    }

    pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
    }

    b,
        strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    input { /* 1 */
        overflow: visible;
    }

    button,
    select { /* 1 */
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
    }

    details {
    display: block;
    }

    summary {
    display: list-item;
    }

    template {
    display: none;
    }

    [hidden] {
    display: none;
    }
`
