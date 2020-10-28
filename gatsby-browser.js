const scrollTo = (id) => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 20)
  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10)
  }
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // hack to override `shouldUpdateScroll` behavior to bypass useQueryParams in product-checkout
  if (location.search) {
    return false;
  }
  const currentPosition = getSavedScrollPosition(location);
  return currentPosition || [0, 0];
};