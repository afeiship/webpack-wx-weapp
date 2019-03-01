import { $interaction, $http, $config } from '#';
const themConfig = JSON.parse('__THEME_CONFIG__');

console.log(themConfig);

export default class {
  static get(inKey, inPath) {
    const compCfg = themConfig[inKey];
    return !inPath ? compCfg : nx.get(compCfg, inPath);
  }
}
