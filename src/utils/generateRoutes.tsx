import { TRoute, TRoutePath } from "../types";

const generateRoutes = (items: TRoutePath[]) => {
  const routes = items.reduce((routes: TRoute[], item) => {
    if (item.path && item.element) {
      routes.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        routes.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return routes;
  }, []);

  return routes;
};

export default generateRoutes;
