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
        
      </div>
    </section>
  );
};

export default page;
