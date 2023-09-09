declare namespace NodeJS {
  type Mode = import('@/config/global-config/types');

  interface ProcessEnv {
    readonly NODE_ENV?: Mode;
    readonly NEXT_PUBLIC_PROJECT_URL: string;
  }
}
