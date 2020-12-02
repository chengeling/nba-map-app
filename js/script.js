const hideMenuButton = document.querySelector('.app-header__btn')
const showMenuButton = document.querySelector('.app-right-panel__btn')
const menu = document.querySelector('.app-header');

hideMenuButton.addEventListener('click', () => {
    menu.classList.add('app-header--hide')
});

showMenuButton.addEventListener('click', () => {
    menu.classList.remove('app-header--hide')
});

require(["esri/views/MapView", "esri/WebMap"], function (
    MapView,
    WebMap
  ) {
    const webmap = new WebMap({
      portalItem: {
        // autocasts as new PortalItem()
        id: "61c7ed9259fb4c1083f2964c402c37d0"
      }
    });

    /************************************************************
     * Set the WebMap instance to the map property in a MapView.
     ************************************************************/
    const view = new MapView({
      map: webmap,
      container: "app-right-panel__map"
    });
  });