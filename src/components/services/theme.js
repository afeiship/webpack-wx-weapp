import { $interaction, $http, $config } from '#';
import ThemeConfig from 'themes/default.json';

export default class {
  static get(inPath) {
    return nx.get(ThemeConfig.components, inPath);
  }
}
