import { Link } from "gatsby"
import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { window } from "browser-monads"

import Constrainer from "../styles/constrainer"
import Button from "../styles/button/button"
import Heading from "../styles/type/heading"
import { themeVal } from "../styles/utils/general"
import { glsp } from "../styles/utils/theme-values"
import media from "../styles/utils/media-queries"

import LogoWhite from "../../static/assets/logo/SafetagLogoWhite.svg"
import LogoBlue from "../../static/assets/logo/SafetagLogoBlue.svg"

const PageHead = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  color: ${themeVal("color.surface")};
  background: ${({ scrolled }) =>
    scrolled > 0 ? themeVal("color.surface") : themeVal("color.primary")};
  border-top: 2px solid
    ${({ scrolled }) =>
      scrolled > 0 ? themeVal("color.primary") : themeVal("color.surface")};
  border-bottom: 1px solid
    ${({ scrolled }) =>
      scrolled > 0 ? themeVal("color.primary") : themeVal("color.surface")};
  transition: all 0.25s ease-out;
`

const PageHeadInner = styled(Constrainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const PageHeadline = styled.div``

const PageTitle = styled(Heading)`
  margin: 0;
  * {
    display: block;
  }
  ${Link},
  a {
    text-decoration: none;
    transition: all 0.24s ease 0s;
    &,
    &:visited {
      color: inherit;
      transform: none;
    }
    &:hover {
      color: ${themeVal("color.link")};
      opacity: 1;
    }
    &:after {
      content: none;
    }
  }
  img {
    max-width: 10rem;
  }
`

const PageNav = styled.nav`
  margin: 0;
  padding: 0;
`

const GlobalMenu = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0;
  list-style: none;

  position: fixed;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.2s ease-in;
  top: 5rem;
  right: ${({ open }) => (open ? "0" : "-100%")};
  z-index: 10;
  background: ${({ scrolled }) =>
    scrolled > 0 ? themeVal("color.surface") : themeVal("color.primary")};
  color: ${({ scrolled }) =>
    scrolled > 0 ? themeVal("color.primary") : themeVal("color.surface")};
  border-bottom: 1px solid
    ${({ scrolled }) =>
      scrolled > 0 ? themeVal("color.primary") : themeVal("color.surface")};

  > li {
    margin: ${glsp()};
    list-style: none;
  }
  ${media.mediumUp`
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    top: 0;
    right: 0;
    background: none;
    border-bottom: none;
    opacity: 1;
    transition: none;
    > li {
      margin: 0;
      margin-right: ${glsp(2)};
    }
    > *:last-child {
      margin: 0;
    }
  `}
`

const GlobalMenuLink = styled(Link)`
  font-family: ${themeVal("type.heading.family")};
  color: ${({ scrolled }) =>
    scrolled > 0 ? themeVal("color.link") : themeVal("color.surface")};
  text-decoration: none;
  letter-spacing: 0.5px;
  &,
  &:visited {
    color: ${({ scrolled }) =>
      scrolled > 0 ? themeVal("color.link") : themeVal("color.surface")};
  }
  &:hover {
    color: ${({ scrolled }) =>
      scrolled > 0 ? themeVal("color.link") : themeVal("color.surface")};
    opacity: 1;
    &:after {
      background: ${({ scrolled }) =>
        scrolled > 0 ? themeVal("color.link") : themeVal("color.surface")};
    }
  }
`

const GlobalMenuButton = styled(Button)``

const Toggle = styled.div`
  display: flex;
  height: 100%;
  cursor: pointer;
  padding: 0.75rem 0;
  margin-left: auto;
  ${media.mediumUp`
    display: none;
  `}
`

const Hamburger = styled.div`
  background-color: ${({ scrolled }) =>
    scrolled > 0 ? themeVal("color.link") : themeVal("color.surface")};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${({ scrolled }) =>
      scrolled > 0 ? themeVal("color.link") : themeVal("color.surface")};
    content: "";
    position: absolute;
    transition: all 0.2s ease-out;
  }

  ::before {
    transform: ${({ open }) =>
      open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const GlobalHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(window.scrollY)

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <PageHead role="banner" scrolled={scrolled}>
      <PageHeadInner>
        <PageHeadline>
          <PageTitle>
            <Link to="/">
              {scrolled > 0 ? (
                <img
                  src={LogoBlue}
                  alt="Safetag Logo"
                  scrolled={scrolled}
                ></img>
              ) : (
                <img
                  src={LogoWhite}
                  alt="Safetag Logo"
                  scrolled={scrolled}
                ></img>
              )}
            </Link>
          </PageTitle>
        </PageHeadline>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <Hamburger open scrolled={scrolled} />
          ) : (
            <Hamburger scrolled={scrolled} />
          )}
        </Toggle>
        <PageNav role="navigation">
          {navbarOpen ? (
            <GlobalMenu open scrolled={scrolled}>
              <li>
                <GlobalMenuLink to="/about/" scrolled={scrolled}>
                  About
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuLink to="/posts/" scrolled={scrolled}>
                  Blog
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuLink to="/#allMethods" scrolled={scrolled}>
                  Methods
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuLink to="/activities/" scrolled={scrolled}>
                  Activities
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuButton
                  variation={
                    scrolled > 0
                      ? "primary-raised-dark"
                      : "primary-raised-light"
                  }
                  to="/guide-builder/"
                  as={Link}
                >
                  Create Guide
                </GlobalMenuButton>
              </li>
            </GlobalMenu>
          ) : (
            <GlobalMenu scrolled={scrolled}>
              <li>
                <GlobalMenuLink to="/about/" scrolled={scrolled}>
                  About
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuLink to="/posts/" scrolled={scrolled}>
                  Blog
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuLink to="/#allMethods" scrolled={scrolled}>
                  Methods
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuLink to="/activities/" scrolled={scrolled}>
                  Activities
                </GlobalMenuLink>
              </li>
              <li>
                <GlobalMenuButton
                  variation={
                    scrolled > 0
                      ? "primary-raised-dark"
                      : "primary-raised-light"
                  }
                  to="/guide-builder/"
                  as={Link}
                >
                  Create Guide
                </GlobalMenuButton>
              </li>
            </GlobalMenu>
          )}
        </PageNav>
      </PageHeadInner>
    </PageHead>
  )
}

GlobalHeader.propTypes = {}

export default GlobalHeader
