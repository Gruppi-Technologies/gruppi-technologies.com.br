import { ReactElement } from 'react';

type ComponentWithRefIncludedInProps<Props, Ref> = (props: Props & { ref: Ref }, ref: Ref) => ReactElement | null;
type ForwardedRefComponent<Props, Ref> = (props: Props, ref: Ref) => ReactElement | null;

function withRefIncludedInProps<Props, Ref>(
  Component: ComponentWithRefIncludedInProps<Props, Ref>,
): ForwardedRefComponent<Props, Ref> {
  return function WrappedComponent(props, ref) {
    const propsWithIncludedRef = { ...props, ref };
    return Component({ ...propsWithIncludedRef }, ref);
  };
}

export default withRefIncludedInProps;
