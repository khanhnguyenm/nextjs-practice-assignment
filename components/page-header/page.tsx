interface PageHeaderProps {
  title: string;
  subHeader: string;
  backgroundImage: string;
}

const PageHeader = ({ title, subHeader, backgroundImage }: PageHeaderProps) => {
  return (
    <header className="absolute top-0 z-0 w-full bg-cover bg-center min-h-[400px] text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex items-center justify-center h-full w-full min-h-[400px]">
        <div className="text-center">
          <div className="site-heading">
            <h1>{title}</h1>
            <hr className="small" />
            <span className="subheading">{subHeader}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader