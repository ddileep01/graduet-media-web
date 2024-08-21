import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

const DetailedProject = ({ project }: { project: Project }) => {
  const { title, image, moreDescription, author, tags, publishDate } = project;
  return (
    <div className="mt-8 mx-4 lg:mx-20">
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/"
          className="relative block w-full h-[60vh] lg:h-[80vh] overflow-hidden rounded-t-md"
        >
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image
            src={image}
            alt="image"
            fill
            className="object-cover object-center"
            priority={true}
          />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-12 xl:py-10 xl:px-8">
          <h3>
            <Link
              href="/"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {moreDescription}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="mb-4 lg:mb-0 mr-0 lg:mr-5 flex items-center border-r border-body-color border-opacity-10 pr-0 lg:pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
