interface Props {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  align?: 'left' | 'center';
  index?: string;
}

const SectionHeader = ({ eyebrow, title, italic, description, align = 'left', index }: Props) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`section-eyebrow ${align === 'center' ? 'justify-center' : ''}`}>
        {index && <span className="mono text-primary">{index}</span>}
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl display-serif text-balance">
        {title}
        {italic && (
          <>
            {' '}
            <em className="display-italic lux-text-brand">{italic}</em>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-muted-foreground text-base md:text-lg text-pretty ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
