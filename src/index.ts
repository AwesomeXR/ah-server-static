import { IBaseExtension } from 'ah-server';
import * as staticServer from 'koa-static';

export class StaticExtension implements IBaseExtension {
  constructor(
    readonly list: {
      root: string;
      opt?: staticServer.Options;
    }[]
  ) {}

  middleware = this.list.map(d => staticServer(d.root, d.opt)) as any;
}
