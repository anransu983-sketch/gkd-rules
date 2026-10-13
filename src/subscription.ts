import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 492752897,
  name: '苏安苒的GKD订阅',
  version: 0,
  author: 'anransu983-sketch',
  checkUpdateUrl: 'https://raw.githubusercontent.com/anransu983-sketch/gkd-rules/main/dist/gkd.version.json5',
  supportUri: 'https://github.com/anransu983-sketch/gkd-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
