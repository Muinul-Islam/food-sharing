/* eslint-disable react/no-unescaped-entities */

const Question = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-bold mb-8">
        Here Are Some Question And Answer
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How can I get involved in a community food sharing website?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            To get involved in a community food sharing website, you can start
            by creating an account on the platform. Once registered, you can
            browse and search for local food-sharing events or groups in your
            area.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What types of food items are typically shared on community food
          sharing websites?
        </div>
        <div className="collapse-content">
          <p>
            Community food sharing websites typically facilitate the sharing of
            a wide variety of food items. You can find fresh produce, canned
            goods, non-perishable items, baked goods, prepared meals, and even
            garden surplus on these platforms.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is it safe to share and receive food through these community websites?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Safety is a top priority for most community food sharing websites.
            While each platform may have its own guidelines and rules, users are
            generally encouraged to follow best practices for food safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
