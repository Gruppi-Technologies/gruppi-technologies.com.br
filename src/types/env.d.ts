declare namespace NodeJS {
  type Mode = import('@/config/global-config/types');

  interface ProcessEnv {
    readonly NODE_ENV?: Mode;
  }
}
