// taken from brittany chiang's repo
// https://github.com/bchiang7/v4/blob/master/src/styles/InlineLink.js

import styled from 'styled-components';
import { lime } from '@material-ui/core/colors';

const transition = 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
const highlight = lime["A200"]

const InlineLink = styled.a`
  font-family: 'IBM Plex Mono';
  color: ${highlight};
  font-weight: 400;
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${transition};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: ${highlight};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.1em;
    background-color: ${highlight};
    transition: ${transition};
  }
`;

export default InlineLink;