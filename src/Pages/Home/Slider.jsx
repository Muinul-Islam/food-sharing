const Slider = () => {
  return (
    <div className="my-14">
      <h1 className="text-center font-bold text-3xl mb-8">
        Common Food You Can Get Here
      </h1>
      <div className="carousel w-full h-96">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/pWN8Yn9/326055faa522e6e388c528528430a8f9-chicken-biriyani-944-531.jpg"
            className="w-full relative"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/whvhRc3/w1ii-hero.jpg"
            className="w-full relative"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/rHm1hJx/sakuraco-wagyu-beef-thumbnail.png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/5RB4JCX/easy-chocolate-cake-31070-16x9.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-sm">
          1
        </a>
        <a href="#item2" className="btn btn-sm">
          2
        </a>
        <a href="#item3" className="btn btn-sm">
          3
        </a>
        <a href="#item4" className="btn btn-sm">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
