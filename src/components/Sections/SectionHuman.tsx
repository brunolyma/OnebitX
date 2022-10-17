interface PropsHuman {
  sec?: {
    id: string;
    isHeader: boolean;
    header: {
      title: string;
      subtitle?: string;
      animate: { effect: string; ease?: string; duraction?: string };
      hasButton: boolean;
      gif?: JSX.Element | string;
    };
    extra?: string;
    image?: JSX.Element | string;
  };
}

export function SectionHuman({ sec }: PropsHuman) {
  return <div>SectionHuman</div>;
}
