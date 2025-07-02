import Carousel from './Carousel';

const Banner = ({ pageTitle }: { pageTitle: string }) => {
  const carouselItems = ['Slide 1', 'Slide 2', 'Slide 3'];
  return (
    <>
      <div className="goChopMainBanner">
        {/* <h2>{pageTitle}</h2> */}
        <Carousel items={carouselItems} />
      </div>
    </>
  );
};

export default Banner;
