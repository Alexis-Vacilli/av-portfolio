import Articles from "@/components/Blog/Articles";
import Categories from "@/components/Blog/Categories";
import Recents from "@/components/Blog/Recents";

const page = () => {
  return (
    <section className="py-12 xl:py-16 ">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-6 xl:mb-12">
          <h2 className="section-title text-center mx-auto">MY Blogs</h2>
          <p className="section-subtitle text-center secondary-font text-primary mx-auto">
            All Articles
          </p>
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row md:gap-x-10">
          {/* Main */}
          <div className="md:w-9/12">
            <Articles />
          </div>
          {/* Vertical line */}
          <div className="hidden md:block md:w-px bg-gray-300"></div>
          {/* Aside */}
          <div className="md:w-3/12">
            <div className="mb-4">
              <Recents containerStyles="rounded-md py-6 px-5" />
            </div>
            <div>
              <Categories containerStyles="rounded-md py-6 px-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
