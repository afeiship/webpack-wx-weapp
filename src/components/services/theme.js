import { $interaction, $http, $config } from '#';
import ThemeConfig from 'themes/default.json';

export default class {
  static get(inKey, inPath) {
    const compCfg = ThemeConfig[inKey];
    return !inPath ? compCfg : nx.get(compCfg, inPath);
  }
}
