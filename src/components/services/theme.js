import { $interaction, $http, $config } from '#';
import ThemeJson from '../themes/default.json';

export default class {
  static get(inKey, inPath) {
    const compCfg = ThemeJson[inKey];
    return !inPath ? compCfg : nx.get(compCfg, inPath);
  }
}
