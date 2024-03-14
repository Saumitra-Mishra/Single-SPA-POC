import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import { HTMLLayoutData } from "single-spa-layout/dist/types/isomorphic/constructRoutes";

const data: HTMLLayoutData = {
  props: {
    myProp: {
      para1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
      enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
      nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
      leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
      feugiat vivamus at augue. At augue eget arcu dictum varius duis at
      consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
      sapien faucibus et molestie ac.`,
      para2: `Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
      eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
      neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
      tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
      sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
      tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
      gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
      et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
      tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
      eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
      posuere sollicitudin aliquam ultrices sagittis orci a.`,
    },
  },
  loaders: {},
};
const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });
registerApplication({
  name: "app1",
  app: applications[0].app,
  activeWhen: applications[0].activeWhen,
  customProps: data.props
});

registerApplication({
  name: "app2",
  app: applications[1].app,
  activeWhen: applications[1].activeWhen,
})
layoutEngine.activate();
start();
